import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { RegisterInput, AccountServiceProxy, RegisterOutput } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register-other',
  templateUrl: './register-other.component.html',
  styleUrls: ['./register-other.component.css']
})
export class RegisterOtherComponent extends AppComponentBase {

  model: RegisterInput = new RegisterInput();
  saving = false;

  constructor(
    injector: Injector,
    private _router: Router,
  ) {
    super(injector);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save(): void {
    // this.saving = true;
    // this._accountService
    //   .register(this.model)
    //   .pipe(
    //     finalize(() => {
    //       this.saving = false;
    //     })
    //   )
    //   .subscribe((result: RegisterOutput) => {
    //     if (!result.canLogin) {
    //       this.notify.success(this.l('SuccessfullyRegistered'));
    //       this._router.navigate(['/login']);
    //       return;
    //     }

    //     // Autheticate
    //     this.saving = true;
    //     this.authService.authenticateModel.userNameOrEmailAddress = this.model.userName;
    //     this.authService.authenticateModel.password = this.model.password;
    //     this.authService.authenticate(() => {
    //       this.saving = false;
    //     });
    //   });
    this._router.navigateByUrl('account/login');
  }

  skip(): void{
    this._router.navigateByUrl('account/login');
  }

  // back(): void{
  //   this._router.navigateByUrl('account/login');
  // }
}
