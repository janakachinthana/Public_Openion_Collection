

import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { forEach as _forEach, map as _map } from 'lodash-es';
import { finalize } from 'rxjs/operators';
import {  PermissionDto, PetitionDto, PetitionServiceProxy } from '@shared/service-proxies/service-proxies';
// import {CdkStepper} from '@angular/cdk/stepper';


@Component({
  selector: 'app-add-petition-form',
  templateUrl: './add-petition-form.component.html',
  styleUrls: ['./add-petition-form.component.css']
})
export class AddPetitionFormComponent extends AppComponentBase implements OnInit {
  fileToUpload: File;
  imageUrl: string = "https://static.change.org/images/image-placeholder.svg";
  imageUrl2: string = "https://static.change.org/images/image-placeholder-drop.svg";

  saving = false;

  petition = new PetitionDto();
  permissions: PermissionDto[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = true;


  @Output() onSave = new EventEmitter<any>();

  constructor(
    private router: Router,
    injector: Injector,
    private _petitionService: PetitionServiceProxy,
    // public bsModalRef: BsModalRef
  ) { super(injector); }


  step1: any = "active";
  step2: any = "inactive";
  step3: any = "inactive";
  step4: any = "inactive";

  step1Div: any = "";
  step2Div: any = "inactiveDiv";
  step3Div: any = "inactiveDiv";
  step4Div: any = "inactiveDiv";

  textArea: any = "";

  image1: any = "";
  image2: any = "image2";

  iconActive: any = "fas fa-pen";
  iconDane: any = "fas fa-check-circle";
  iconBan: any = "fas fa-ban";

  icon1: any = this.iconActive;
  icon2: any = this.iconBan;
  icon3: any = this.iconBan;
  icon4: any = this.iconBan;

  ngOnInit() {

    this.step1 = "active"
    this.step2 = "inactive"
    this.step3 = "inactive"
    this.step4 = "inactive"

    this.step1Div = ""
    this.step2Div = "inactiveDiv"
    this.step3Div = "inactiveDiv"
    this.step4Div = "inactiveDiv"

    this.icon1 = this.iconActive;
    this.icon2 = this.iconBan;
    this.icon3 = this.iconBan;
    this.icon4 = this.iconBan;

    this.petition.auther = this.appSession.getShownLoginId().toString();
    this.petition.category = this._petitionService.category;
    this.petition.likes =0;
    this.petition.disLikes =0;

  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.image1 = "image2";
    this.image2 = "";

  }

  goToStep2() {
    this.step1 = "success"
    this.step2 = "active"

    this.step1Div = "inactiveDiv"
    this.step2Div = ""
    this.step3Div = "inactiveDiv"

    this.icon1 = this.iconDane;
    this.icon2 = this.iconActive;
    this.icon3 = this.iconBan;
    this.icon4 = this.iconBan;
  }

  goToStep3() {
    this.step1 = "success"
    this.step2 = "success"
    this.step3 = "active"

    this.step1Div = "inactiveDiv"
    this.step2Div = "inactiveDiv"
    this.step3Div = ""

    this.icon1 = this.iconDane;
    this.icon2 = this.iconDane;
    this.icon3 = this.iconActive;
    this.icon4 = this.iconBan;
  }

  goToStep4() {
    this.step1 = "success"
    this.step2 = "success"
    this.step3 = "success"
    this.step4 = "active"

    this.step1Div = "inactiveDiv"
    this.step2Div = "inactiveDiv"
    this.step3Div = "inactiveDiv"
    this.step4Div = ""

    this.icon1 = this.iconDane;
    this.icon2 = this.iconDane;
    this.icon3 = this.iconDane;
    this.icon4 = this.iconActive;
  }

  finish() {
    this.router.navigateByUrl('app/home');
  }

  bold() {
    if (this.textArea == "") {
      this.textArea = "bold";
    } else {
      this.textArea = "";
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
    this.saving = true;

    // const petition = new CreatePetitionDto();
    this.petition.init(this.petition);
    
    this._petitionService
      .create(this.petition)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        // this.bsModalRef.hide();
        this.onSave.emit();
        this.finish();
      });
  }
}

