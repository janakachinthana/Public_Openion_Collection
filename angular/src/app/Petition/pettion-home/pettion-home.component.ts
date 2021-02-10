import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagedRequestDto, PagedListingComponentBase } from '@shared/paged-listing-component-base';
import { PetitionDto, PetitionServiceProxy, PetitionDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

class PagedPetitionsRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-pettion-home',
  templateUrl: './pettion-home.component.html'
})
export class PettionHomeComponent extends PagedListingComponentBase<PetitionDto> {
  petitions: PetitionDto[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _petitionsService: PetitionServiceProxy,
    private _modalService: BsModalService,
    private router: Router,
  ) {
    super(injector);
  }

  list(
    request: PagedPetitionsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;

    this._petitionsService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: PetitionDtoPagedResultDto) => {
        this.petitions = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(petition: PetitionDto): void {
    abp.message.confirm(
      this.l('PetitionDeleteWarningMessage', petition.title),
      undefined,
      (result: boolean) => {
        if (result) {
          this._petitionsService
            .delete(petition.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

  createPetition(): void {
    this.showCreateOrEditPetitionDialog();
  }

  editPetition(petition: PetitionDto): void {
    // this.showCreateOrEditPetitionDialog(petition.id);
  }

  showCreateOrEditPetitionDialog(id?: number): void {
    let createOrEditPetitionDialog: BsModalRef;
    if (!id) {
      createOrEditPetitionDialog = this._modalService.show(
        // CreatePetitionDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditPetitionDialog = this._modalService.show(
        // EditPetitionDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditPetitionDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  public arr: Array<{text: string}> = [
    { text: 'Sentence 1'},
    {text: 'Sentence 2'},
    { text: 'Sentence 3'},
    { text: 'Sentenc4 '},
];

like:any ="btn btn-outline-info";
likes:number = 245;


ngOnInit(): void {
  this.like ="btn btn-outline-info";
  this.list;
}

category(): void{
  this.router.navigateByUrl('app/category');
}


likeBtn(){

  if (this.like == "btn btn-outline-info" ) {
    this.like = "btn btn-primary"
    this.likes = this.likes+1;
  }else{
    this.like = "btn btn-outline-info"
    this.likes = this.likes-1;
  }
}
}


