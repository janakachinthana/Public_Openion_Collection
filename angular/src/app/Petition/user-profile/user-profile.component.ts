import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PetitionDto, PetitionServiceProxy, PetitionDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
class PagedPetitionsRequestDto extends PagedRequestDto {
  keyword: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends PagedListingComponentBase<PetitionDto>  {

  petitions: PetitionDto[] = [];
  keyword = '';
  userName: any;
  user:any;
  petitionxx: any ="" ;
  Category:any ="category";
  searchText:any;
  constructor(
    injector: Injector,
    private _petitionsService: PetitionServiceProxy,
    private _modalService: BsModalService,
    private router: Router
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
          this.userName = this.appSession.getShownLoginId();
          this.user = this.appSession.getShownLoginName()
        })
      )
      .subscribe((result: PetitionDtoPagedResultDto) => {
        this.petitions = result.items;
        // this.petitionLength = this.petitions.length;
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
            .subscribe(() => { });
        }
      }
    );
  }

  createPetition(): void {
    this.showCreateOrEditPetitionDialog();
  }

  editPetition(petition: PetitionDto): void {
    this.showCreateOrEditPetitionDialog(petition.id);
  }

  showCreateOrEditPetitionDialog(id?: string): void {
    let createOrEditPetitionDialog: BsModalRef;
    if (!id) {
      createOrEditPetitionDialog = this._modalService.show(
        CreateRoleDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditPetitionDialog = this._modalService.show(
        CreateRoleDialogComponent,
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

  SeeMore: any ="seeMore";
  seeMoreBtn:any = "See More...";

  seeMore(){
    if (this.SeeMore == "seeMore") {
      this.SeeMore = "seeLess";
      this.seeMoreBtn = "Collaps"
    } else {
      this.SeeMore = "seeMore";
      this.seeMoreBtn = "See More..."
    }
  }

  viewPst(petition: PetitionDto){
    this.router.navigateByUrl('app/viewPetition');
    this._petitionsService.Id = petition.id
  }

  selectChangeHandler(event: any){

    this.Category = event.target.value;
   
  }

  // ngOnInit(){
  //   this.refresh();
  //   for (let index = 0; index < this.petitions.length; index++) {
  //     if(this.petitions[index].auther == this.userName){
  //       this.petitionxx = "inactive"
  //       this.petitions.length = this.petitions.length +2;
  //     } 
  //   }
  // }
 
}
