import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { PetitionDto, PetitionServiceProxy } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/app-component-base';
import { PagedRequestDto } from '@shared/paged-listing-component-base';


// class PagedLikeStatusRequestDto extends PagedRequestDto {
//   keyword: string;
// }


@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.component.html',
  styleUrls: ['./edit-petition.component.css']
})
export class EditPetitionComponent extends AppComponentBase implements OnInit {
  saving = false;
  id:any
  petition: PetitionDto = new PetitionDto();
  user:any;
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    private _petitionService: PetitionServiceProxy,
    public bsModalRef: BsModalRef,
  ) 
  { super(injector);}
  
  ngOnInit(): void {
    this.user = this.appSession.getShownLoginName();
    if (this.id) {
      this._petitionService.get(this.id).subscribe((result: PetitionDto) => {
        this.petition = result;
      });
    } else {
      
    }
  }


  save(): void {

    if (this.id == null) {
      // this.saving = true;

      // // const comment = new CreateCommentDto();
      // this.petition.init(this.petition);
      
      // this._petitionService
      //   .create(this.petition)
      //   .pipe(
      //     finalize(() => {
      //       this.saving = false;
      //     })
      //   )
      //   .subscribe(() => {
      //     this.notify.info(this.l('Added Successfully'));
      //     this.bsModalRef.hide();
      //     this.onSave.emit();
      //   });
    } else {

      this.saving = true;

      this._petitionService
        .update(this.petition)
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
