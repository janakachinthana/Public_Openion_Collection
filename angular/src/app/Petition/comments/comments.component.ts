import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CommentDto, CommentServiceProxy, CommentDtoPagedResultDto, PetitionServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { CommentFormComponent } from '../comment-form/comment-form.component';


class PagedCommentsRequestDto extends PagedRequestDto {
  keyword: string;
}

 
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent extends PagedListingComponentBase<CommentDto>  {
  comments: CommentDto[] = [];
  keyword = '';
  public commentByID: CommentDto[] = [];
  searchText: any;
  user: any ;
  comment: CommentDto;
  userName: any;
  surName: any;
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _commentsService: CommentServiceProxy,
    private _modalService: BsModalService,
    private router: Router,
    public _petitionsService: PetitionServiceProxy,
  ) {
    super(injector);
  }

  list(
    request: PagedCommentsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    
    this._commentsService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
          if (this.appSession.getShownLoginId() != null) {
            this.user = this.appSession.getShownLoginId();
            this.userName = this.appSession.getShownLoginName();
            this.surName = this.appSession.getShownLoginSurName();
          }
        })
      )
      .subscribe((result: CommentDtoPagedResultDto) => {
        this.comments = result.items;
        this.showPaging(result, pageNumber);
        this.searchText = this._petitionsService.Id
      
      });


      

  }

  delete(comment: CommentDto): void {
    abp.message.confirm(
      this.l('CommentDeleteWarningMessage', comment.auther),
      undefined,
      (result: boolean) => {
        if (result) {
          this._commentsService
            .delete(comment.id)
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

  // createComment(comment: CommentDto): void {
  //   this.comment.init(comment);
    
  //   this._commentsService
  //     .update(this.comment)
  //     .pipe(
  //       finalize(() => {
  //       })
  //     )
  //     .subscribe(() => {
  //       this.notify.info(this.l('updateSuccessfully'));
  //       // this.bsModalRef.hide();
   
  //     });
  // }

  // editComment(comment: CommentDto): void {
  //   this.comment.init(comment);
    
  //   this._commentsService
  //     .update(this.comment)
  //     .pipe(
  //       finalize(() => {
  //       })
  //     )
  //     .subscribe(() => {
  //       this.notify.info(this.l('updateSuccessfully'));
  //       // this.bsModalRef.hide();
  //       this.onSave.emit();
  //     });
  // }


  editComment(comment: CommentDto): void {
    this.showCreateOrEditTenantDialog(comment.id);
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
      this.refresh();
    });
  }

}
