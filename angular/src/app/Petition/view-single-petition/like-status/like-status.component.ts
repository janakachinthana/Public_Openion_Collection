import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetRoleForEditOutput, LikeStatusDto, LikeStatusDtoPagedResultDto, LikeStatusServiceProxy, PetitionDto, PetitionDtoPagedResultDto, PetitionServiceProxy } from '@shared/service-proxies/service-proxies';
import { timeStamp } from 'console';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { ViewSinglePetitionComponent } from '../view-single-petition.component';


class PagedLikeStatusRequestDto extends PagedRequestDto {
  keyword: string;
}


@Component({
  selector: 'app-like-status',
  templateUrl: './like-status.component.html',
  styleUrls: ['./like-status.component.css']
})
export class LikeStatusComponent extends PagedListingComponentBase<LikeStatusDto>  {
  saving = false;
  likeStatus: LikeStatusDto[] = [];
  keyword = '';
  searchText: any;
  petitionId: string = "";
  user: any = null;
  Petition = new PetitionDto;
  like: any = "btn btn-outline-primary";
  dislike: any = "btn btn-outline-danger";
  disabled: any;
  likeStatusDto: LikeStatusDto;
  petitionLike: PetitionDto;
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    private _LlikeStatusService: LikeStatusServiceProxy,
    private _modalService: BsModalService,
    private router: Router,
    private _petitionService: PetitionServiceProxy,
    private _petitionsService: PetitionServiceProxy,
  ) {
    super(injector);

  }

  list(
    request: PagedLikeStatusRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    this._LlikeStatusService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: LikeStatusDtoPagedResultDto) => {
        this.likeStatus = result.items;
      
        if (this.user != null) {

          for (let index = 0; index < this.likeStatus.length; index++) {

            if (this.likeStatus.length != 0) {
              if (
                this.likeStatus[index].userId == this.user &&
                this.petitionId == this.likeStatus[index].petitionId &&
                this.likeStatus[index].like == true && this.likeStatus[index].disLike == false

              ) {

                this.like = "btn btn-primary";
                this.dislike = "btn btn-outline-danger";
                this.likeStatusDto = this.likeStatus[index]
                index = this.likeStatus.length + 2;

              } else if (
                this.likeStatus[index].userId == this.user &&
                this.petitionId == this.likeStatus[index].petitionId &&
                this.likeStatus[index].like == false && this.likeStatus[index].disLike == true

              ) {

                this.like = "btn btn-outline-primary";
                this.dislike = "btn btn-danger";
                this.likeStatusDto = this.likeStatus[index]
                index = this.likeStatus.length + 2;

              } else if (
                this.likeStatus[index].userId == this.user &&
                this.petitionId == this.likeStatus[index].petitionId &&
                this.likeStatus[index].like == false && this.likeStatus[index].disLike == false

              ) {

                this.like = "btn btn-outline-primary";
                this.dislike = "btn btn-outline-danger";
                this.likeStatusDto = this.likeStatus[index]
                index = this.likeStatus.length + 2;

              } else {
                this.like = "btn btn-outline-primary";
                this.dislike = "btn btn-outline-danger";
                this.likeStatusDto = null;
              }
            } else {
              this.like = "btn btn-outline-primary";
              this.dislike = "btn btn-outline-danger";
              this.likeStatusDto = null;
            }
          }

        } else {
          this.like = "btn btn-outline-dark disabled";
          this.dislike = "btn btn-outline-dark disabled";
          this.likeStatusDto = null;
        }
        this.showPaging(result, pageNumber);
      });
  }

  ngOnInit() {

    this.refresh()
    this.petitionId = this._petitionService.Id.toLocaleUpperCase();
    if (this._petitionsService.Id != null) {
      this._petitionsService.get(this.petitionId).subscribe((result) => {
        this.petitionLike = result;
      })
    }
    if(this.appSession.getShownLoginId() != null){
      this.user = this.appSession.getShownLoginId();
    }
  }

  delete(likeStatus: LikeStatusDto): void {
    abp.message.confirm(
      this.l('PetitionDeleteWarningMessage', likeStatus.id),
      undefined,
      (result: boolean) => {
        if (result) {
          this._LlikeStatusService
            .delete(likeStatus.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => { });
        }
      }
    );
  }

  createlikeStatus(): void {
    this.showCreateOrEditlikeStatusDialog();
  }

  editlikeStatus(likeStatus: LikeStatusDto): void {
    this.showCreateOrEditlikeStatusDialog(likeStatus.id);
  }

  showCreateOrEditlikeStatusDialog(id?: string): void {
    let createOrEditLikeStatusDialog: BsModalRef;
    if (!id) {
      createOrEditLikeStatusDialog = this._modalService.show(
        CreateRoleDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditLikeStatusDialog = this._modalService.show(
        CreateRoleDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditLikeStatusDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  updateLike(likeStatus: number): void {
    if (likeStatus == 1) {
      if (this.likeStatusDto != null && this.likeStatusDto.like == true && this.likeStatusDto.disLike == false) {

        this.likeStatusDto.like = false
        this.likeStatusDto.disLike = false
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {
            this.petitionLike.likes = this.petitionLike.likes - 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });
          });
      } else if (this.likeStatusDto != null && this.likeStatusDto.like == false && this.likeStatusDto.disLike == true) {

        this.likeStatusDto.like = true
        this.likeStatusDto.disLike = false
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {
            this.petitionLike.likes = this.petitionLike.likes + 1;
            this.petitionLike.disLikes = this.petitionLike.disLikes - 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });

          });
      } else if (this.likeStatusDto != null && this.likeStatusDto.like == false && this.likeStatusDto.disLike == false) {

        this.likeStatusDto.like = true
        this.likeStatusDto.disLike = false
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {
            this.petitionLike.likes = this.petitionLike.likes + 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });

          });
      } else if (this.likeStatusDto == null) {

        this.saving = true;

        const LikeStatus = new LikeStatusDto();
        LikeStatus.init(this.likeStatusDto);

        LikeStatus.like = true;
        LikeStatus.disLike = false;
        LikeStatus.petitionId = this.petitionId;
        LikeStatus.userId = this.user;
        this._LlikeStatusService.create(LikeStatus).pipe(
          finalize(() => {
          })
        ).subscribe(() => {
          this.notify.info(this.l('SavedSuccessfully'));
          this.onSave.emit();
          this.petitionLike.likes = this.petitionLike.likes + 1;
          this._petitionsService
            .update(this.petitionLike)
            .subscribe(() => {
              this.refresh();
            });
        });
      }

    } else if (likeStatus == 2) {

      if (this.likeStatusDto != null && this.likeStatusDto.disLike == true && this.likeStatusDto.like == false) {

        this.likeStatusDto.like = false
        this.likeStatusDto.disLike = false
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {

            this.petitionLike.disLikes = this.petitionLike.disLikes - 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });
          });
      } else if (this.likeStatusDto != null && this.likeStatusDto.disLike == false && this.likeStatusDto.like == true) {

        this.likeStatusDto.like = false
        this.likeStatusDto.disLike = true
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {

            this.petitionLike.disLikes = this.petitionLike.disLikes + 1;
            this.petitionLike.likes = this.petitionLike.likes - 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });
          });
      } else if (this.likeStatusDto != null && this.likeStatusDto.disLike == false && this.likeStatusDto.like == false) {

        this.likeStatusDto.like = false
        this.likeStatusDto.disLike = true
        this._LlikeStatusService
          .update(this.likeStatusDto)
          .subscribe(() => {

            this.petitionLike.disLikes = this.petitionLike.disLikes + 1;
            this._petitionsService
              .update(this.petitionLike)
              .subscribe(() => {
                this.refresh();
              });
          });
      } else if (this.likeStatusDto == null) {

        this.saving = true;

        const LikeStatus = new LikeStatusDto();
        LikeStatus.init(this.likeStatusDto);

        LikeStatus.like = false;
        LikeStatus.disLike = true;
        LikeStatus.petitionId = this.petitionId;
        LikeStatus.userId = this.user;
        this._LlikeStatusService.create(LikeStatus).pipe(
          finalize(() => {
          })
        ).subscribe(() => {
          this.notify.info(this.l('SavedSuccessfully'));
          // this.bsModalRef.hide();
          this.onSave.emit();
          this.petitionLike.disLikes = this.petitionLike.disLikes + 1;
          this._petitionsService
            .update(this.petitionLike)
            .subscribe(() => {
              this.refresh();
            });
        });
      }
    }

  }

  likeBtn(likeStatus: number) {
    if (this.user == null) {
      this.router.navigateByUrl('account/login');
    }
    else {
      this.updateLike(likeStatus)

    }
  }
  login(){
    this.router.navigateByUrl('account/login');
  }


}
