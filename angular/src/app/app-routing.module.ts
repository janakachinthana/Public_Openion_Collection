import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { PetitionCategoryComponent } from './petition/petition-category/petition-category.component';
import { AddPetitionFormComponent } from './petition/add-petition-form/add-petition-form.component';
import { ViewSinglePetitionComponent } from './petition/view-single-petition/view-single-petition.component';
import { CommentFormComponent } from './petition/comment-form/comment-form.component';
import { UserProfileComponent } from './Petition/user-profile/user-profile.component';
import { PettionHomeComponent } from './petition/pettion-home/pettion-home.component';
import { PetitionComponent } from './petition/petition.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: PetitionComponent },
                    { path: 'category', component: PetitionCategoryComponent },
                    // { path: 'home', component: PetitionsComponent },
                    { path: 'addPetition', component: AddPetitionFormComponent,  canActivate: [AppRouteGuard] },
                    { path: 'addComment', component: CommentFormComponent,  canActivate: [AppRouteGuard] },
                    { path: 'viewPetition', component: ViewSinglePetitionComponent},
                    { path: 'userProfile', component: UserProfileComponent, canActivate: [AppRouteGuard]  },
                    { path: 'home1', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
