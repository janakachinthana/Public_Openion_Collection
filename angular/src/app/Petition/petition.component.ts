import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { PagedRequestDto, PagedListingComponentBase } from '@shared/paged-listing-component-base';
import { PetitionDto, PetitionServiceProxy, PetitionDtoPagedResultDto, LikeStatusDto } from '@shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/session/app-session.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { EditPetitionComponent } from './view-single-petition/edit-petition/edit-petition.component';


class PagedPetitionsRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent extends PagedListingComponentBase<PetitionDto>  {
  petitions: PetitionDto[] = [];
  keyword = '';
  searchText: any;
  user: any = null ;
  Category: any = "category";
  // user: any = this.appSession.getShownLoginName();
  

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
          if (this.appSession.getShownLoginId() != null) {
            this.user = this.appSession.getShownLoginId();
          }
        })
      )
      .subscribe((result: PetitionDtoPagedResultDto) => {
        this.petitions = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(petition: PetitionDto): void {
    abp.message.confirm(
      this.l('want to delete this petition...?'),
      undefined,
      (result: boolean) => {
        if (result) {
          this._petitionsService
            .delete(petition.id)
            .pipe(
              finalize(() => {
                abp.notify.error(this.l('SuccessfullyDeleted'));
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
        EditPetitionComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditPetitionDialog = this._modalService.show(
        EditPetitionComponent,
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



  like: any = "btn btn-outline-info";
 


  // ngOnInit(): void {
  //   this.like ="btn btn-outline-info";
  // }

  category(): void {
    this.router.navigateByUrl('app/category',{
      state: {}
    });
  }


  // likeBtn() {

  //   if (this.like == "btn btn-outline-info") {
  //     this.like = "btn btn-primary"
  //     this.likes = this.likes + 1;
  //   } else {
  //     this.like = "btn btn-outline-info"
  //     this.likes = this.likes - 1;
  //   }
  // }

  viewPost(petition: PetitionDto){
    this._petitionsService.Id = petition.id;
    this.router.navigateByUrl('app/viewPetition');
   
    
  }

  selectChangeHandler(event: any){

    this.Category = event.target.value;
   
  }


  

  
}


