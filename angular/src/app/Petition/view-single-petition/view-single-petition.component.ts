import { Component, Injector, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { AppComponentBase } from '@shared/app-component-base';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CommentDto, CommentServiceProxy, CommentDtoPagedResultDto, PetitionServiceProxy, PetitionDto } from '@shared/service-proxies/service-proxies';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { EditPetitionComponent } from './edit-petition/edit-petition.component';

@Component({
  selector: 'app-view-single-petition',
  templateUrl: './view-single-petition.component.html',
  styleUrls: ['./view-single-petition.component.css']
})
export class ViewSinglePetitionComponent extends AppComponentBase implements OnInit {
  Petition = new PetitionDto;
  keyword = '';
  like: any = "btn btn-outline-info";
  dislike: any = "btn btn-outline-danger"
  public petitionId: any;
  // likes:number = 245;
  user: any = null;

  x: string;


  constructor(
    injector: Injector,
    private _petitionsService: PetitionServiceProxy,
    private _modalService: BsModalService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    super(injector);

  }
  ngOnInit(): void {
    if (this._petitionsService.Id != null) {
      this.petitionId = this._petitionsService.Id;
      this._petitionsService.get(this.petitionId).subscribe((result) => {
        this.Petition = result;
      })
    } else {
      this.router.navigateByUrl('app/home');
    }
    if (this.appSession.getShownLoginId() != null) {
      this.user = this.appSession.getShownLoginId();
    }

  }



  likeBtn() {

    if (this.like == "btn btn-outline-info") {
      this.like = "btn btn-primary"
      this.Petition.likes = this.Petition.likes + 1;
    } else {
      this.like = "btn btn-outline-info"
      this.Petition.likes = this.Petition.likes - 1;
    }
  }

  disLikeBtn() {

    if (this.dislike == "btn btn-outline-danger") {
      this.dislike = "btn btn-danger"
      this.Petition.likes = this.Petition.likes + 1;
    } else {
      this.dislike = "btn btn-outline-danger"
      this.Petition.likes = this.Petition.likes - 1;
    }
  }


  // CommentBtn(){ 
  //   this.router.navigateByUrl('app/addComment');  
  // }



  CommentBtn(): void {
    this.showCreateOrEditTenantDialog();
  }

  showCreateOrEditTenantDialog(id?: string): void {
    let createOrEditTenantDialog: BsModalRef;
    if (!id) {
      createOrEditTenantDialog = this._modalService.show(
        CommentFormComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditTenantDialog = this._modalService.show(
        CommentFormComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditTenantDialog.content.onSave.subscribe(() => {
      //  this.refresh(); 
    });
  }


  
  edtPetitionBtn(): void {
    this.showCreateOrEditPetitionDialog(this.Petition.id);
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
      //  this.refresh(); 
    });
  }


  
  delete(): void {
    abp.message.confirm(
      this.l('PetitionDeleteWarningMessage',),
      undefined,
      (result: boolean) => {
        if (result) {
          this._petitionsService
            .delete(this.Petition.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                // this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

}
