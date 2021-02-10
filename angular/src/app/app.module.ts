import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { PettionHomeComponent } from './petition/pettion-home/pettion-home.component';
import { PetitionCategoryComponent } from './petition/petition-category/petition-category.component';
import { ViewSinglePetitionComponent } from './petition/view-single-petition/view-single-petition.component';
import { CommentFormComponent } from './petition/comment-form/comment-form.component';
import { UserProfileComponent } from './Petition/user-profile/user-profile.component';
import { AddPetitionFormComponent } from './petition/add-petition-form/add-petition-form.component';
import { PetitionComponent } from './petition/petition.component';
import { CommentsComponent } from './petition/comments/comments.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LikeStatusComponent } from './petition/view-single-petition/like-status/like-status.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditPetitionComponent } from './petition/view-single-petition/edit-petition/edit-petition.component';
@NgModule({schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    PettionHomeComponent,
    PetitionCategoryComponent,
    ViewSinglePetitionComponent,
    CommentFormComponent,
    UserProfileComponent,
    AddPetitionFormComponent,
    PetitionComponent,
    CommentsComponent,
    LikeStatusComponent,
    EditPetitionComponent,

  ],
  imports: [
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
  ],

  bootstrap: [AppComponent],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,

    AddPetitionFormComponent
  ],
})
export class AppModule {}
