import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { CommentDto, CommentServiceProxy, PermissionDto, PetitionServiceProxy } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent extends AppComponentBase implements OnInit {
 
  saving = false;

  comment: CommentDto = new CommentDto();
  // commentEdit: CommentDto = new CommentDto();
  permissions: PermissionDto[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = true;
  id: string;
  user: any;



  @Output() onSave = new EventEmitter<any>();

  constructor(
    private router: Router,
    injector: Injector,
    private _commentService: CommentServiceProxy,
    private _petitionService: PetitionServiceProxy,
    public bsModalRef: BsModalRef
  ) { super(injector); }


  ngOnInit(): void {
    this.user = this.appSession.getShownLoginName();
    this.comment.auther = this.appSession.getShownLoginId().toString();
    this.comment.petitionId = this._petitionService.Id;
    if (this.id) {
      this._commentService.get(this.id).subscribe((result: CommentDto) => {
        this.comment = result;
      });
    } else {
      
    }
   
  }


  setInitialPermissionsStatus(): void {
    _map(this.permissions, (item) => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(
        item.name
      );
    });
  }

  isPermissionChecked(permissionName: string): boolean {
    // just return default permission checked status
    // it's better to use a setting
    return this.defaultPermissionCheckedStatus;
  }

  onPermissionChange(permission: PermissionDto, $event) {
    this.checkedPermissionsMap[permission.name] = $event.target.checked;
  }

  getCheckedPermissions(): string[] {
    const permissions: string[] = [];
    _forEach(this.checkedPermissionsMap, function (value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }

  save(): void {

    if (this.id == null) {
      this.saving = true;

      // const comment = new CreateCommentDto();
      this.comment.init(this.comment);
      
      this._commentService
        .create(this.comment)
        .pipe(
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe(() => {
          this.notify.info(this.l('Added Successfully'));
          this.bsModalRef.hide();
          this.onSave.emit();
        });
    } else {

      this.saving = true;

      this._commentService
        .update(this.comment)
        .pipe(
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe(() => {
          this.notify.info(this.l('Update Successfully'));
          this.bsModalRef.hide();
          this.onSave.emit();
        });
      
    }
  
  }
}
