import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account.component';
import { RegisterOtherComponent } from './register-other/register-other.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { UsersComponent } from '@app/users/users.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'login', component: LoginComponent },
                    { path: 'register', component: CreateUserDialogComponent },
                    { path: 'registerExtra', component: RegisterOtherComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
