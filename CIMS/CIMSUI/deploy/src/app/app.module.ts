import { CimsUserLayoutComponent } from './components/cims-user-layout/cims-user-layout.component';
import { CimsInnovationLayoutComponent } from './components/cims-innovation-layout/cims-innovation-layout.component';
import { LogInOutGuard } from './guards/Login-out/log-in-out.guard';
import { CimsShowUserComponent } from './components/cims-show-user/cims-show-user.component';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewIdeaFormComponent } from './components/new-idea-form/new-idea-form.component';
import { ShowIdeasFormComponent } from './components/show-ideas-form/show-ideas-form.component'
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatPaginatorModule, MatTableDataSource,   MatTabsModule, MatFormFieldModule, MatInputModule, MatCheckbox, MatCheckboxModule,
} from '@angular/material';

import {RouterModule, Routes } from '@angular/router';
import { CIMSHeaderComponent } from './components/cims-header/cims-header.component'
import { CIMSFooterComponent } from './components/cims-footer/cims-footer.component';
import { ShowReviewerFormComponent } from './components/show-reviewer-form/show-reviewer-form.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { ConfirmationDialogBoxComponent } from './components/confirmation-dialog-box/confirmation-dialog-box.component';
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';

//spinner
import { NgxSpinnerModule } from 'ngx-spinner';

//merge
import { CimsCardsComponent } from './components/cims-cards/cims-cards.component';
import { MatCardModule, MatTooltipModule} from '@angular/material/';
import { CimsIdeaBoxPageComponent } from './components/cims-idea-box-page/cims-idea-box-page.component';
import { CimsIdeaBoxCreationComponent } from './components/cims-idea-box-creation/cims-idea-box-creation.component';
import { CimsIdeaBoxFormComponent } from './components/cims-idea-box-form/cims-idea-box-form.component';
import { CimsIdeaBoxRequirementFormComponent } from './components/cims-idea-box-requirement-form/cims-idea-box-requirement-form.component';
import { CimsIdeaBoxRequirementDisplayComponent } from 'src/app/components/cims-idea-box-requirement-display/cims-idea-box-requirement-display.component';
import { DatePipe } from '@angular/common';
import { FilterCatPipe } from './pipes/filter-cat.pipe';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CimsCardsReviewerComponent } from './components/cims-cards-reviewer/cims-cards-reviewer.component';
import { CimsUserDashboardComponent } from './components/cims-user-dashboard/cims-user-dashboard.component';
import { CimsIdeaBoxRequirementFormDisabledComponent } from './components/cims-idea-box-requirement-form-disabled/cims-idea-box-requirement-form-disabled.component';
import {MatIconModule} from '@angular/material/icon';
import { CimsAdminDashboardComponent } from './components/cims-admin-dashboard/cims-admin-dashboard.component';
import { CimsManageUserAccessFormComponent } from 'src/app/components/cims-manage-user-access-form/cims-manage-user-access-form.component';
import { CimsIdeaFiledAgainstIdeaneedComponent } from 'src/app/components/cims-idea-filed-against-ideaneed/cims-idea-filed-against-ideaneed.component';
import { CimsBackButtonComponent } from 'src/app/components/cims-back-button/cims-back-button.component';
import { CimsAdminLayoutComponent } from './components/cims-admin-layout/cims-admin-layout.component';
import { CimsIdeaboxpageLayoutComponent } from './components/cims-ideaboxpage-layout/cims-ideaboxpage-layout.component';
import { CimsReviewerLayoutComponent } from './components/cims-reviewer-layout/cims-reviewer-layout.component';
import { UserGuard } from 'src/app/guards/RoleAuthentication/user.guard';
import { ReviewerGuard } from 'src/app/guards/RoleAuthentication/reviewer.guard';
import { InnovationManagerGuard } from 'src/app/guards/RoleAuthentication/innovation-manager.guard';
import { AdminGuard } from 'src/app/guards/RoleAuthentication/admin.guard';
import { CimsManageIdeaboxAccessFormComponent } from 'src/app/components/cims-manage-ideabox-access-form/cims-manage-ideabox-access-form.component';
import { CimsAssignUsersToIdeaboxComponent } from './components/cims-assign-users-to-ideabox/cims-assign-users-to-ideabox.component';
import { CimsMyReviewsComponent } from './components/cims-my-reviews/cims-my-reviews.component';
import { NotifyUsersDialogboxComponent } from './components/notify-users-dialogbox/notify-users-dialogbox.component';
import { CimsMyIdeaBoxCreationComponent } from 'src/app/components/cims-my-idea-box-creation/cims-my-idea-box-creation.component';
import { CimsMyIdeasComponent } from 'src/app/components/cims-my-ideas/cims-my-ideas.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { CimsAddRevieverDialogboxComponent } from 'src/app/components/cims-add-reviever-dialogbox/cims-add-reviever-dialogbox.component';
import { CimsTakeDecisionDialogboxComponent } from './components/cims-take-decision-dialogbox/cims-take-decision-dialogbox.component';

const routes:Routes = [
  { path: 'login', component: UserLoginComponent },
  {
    path:'admin_dashboard',
    component: CimsAdminLayoutComponent,
    canActivateChild: [LogInOutGuard, AdminGuard],
    children: [
      {
        path: '',
        component: CimsAdminDashboardComponent
      },
      {
        path: 'showideas',
        component: ShowIdeasFormComponent
      },
      {
        path: 'newidea',
        component: NewIdeaFormComponent
      },
      {
        path: 'ideaboxpage',
        component: CimsIdeaboxpageLayoutComponent,
        children: [
          {
            path: '',
            component: CimsIdeaBoxPageComponent
          },
          {
            path: 'newideabox',
            component: CimsIdeaBoxFormComponent
          },
          {
            path: 'requirement_form', 
            component: CimsIdeaBoxRequirementFormComponent
          },
          {
            path: 'req_display_form/:type', 
            component: CimsIdeaBoxRequirementDisplayComponent
          },
          {
            path: 'req_display_form/:type/assign_users',
            component: CimsAssignUsersToIdeaboxComponent
          },
          {
            path: 'req_display_form/requirement_form', 
            component: CimsIdeaBoxRequirementFormComponent
          },
          {
            path: 'req_display_form/:type/requirement_form', 
            component: CimsIdeaBoxRequirementFormDisabledComponent
          },
          {
            path: 'req_display_form/:type/view_ideas/:idea_need_id', 
            component: CimsIdeaFiledAgainstIdeaneedComponent
          },
          {
            path: 'req_display_form/:type/new_idea/:idea_need_id', 
            component: NewIdeaFormComponent
          },
          {
            path: 'ideabox_owner',
            component: CimsManageIdeaboxAccessFormComponent
          }
        ]
      },
      {
        path: 'manage_users',
        component: CimsShowUserComponent
      },
      {
        path: 'manage_users/edit_access/:id', 
        component: CimsManageUserAccessFormComponent
      },
      {
        path:'review',
        component: ShowReviewerFormComponent
      },
      { 
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
      }

    ]
  },
  {
    path:'innovation',
    component: CimsInnovationLayoutComponent,
    canActivateChild: [LogInOutGuard , InnovationManagerGuard],
    children: [
      {
        path: '', 
        component: CimsCardsComponent
      },
      {
        path: 'showideas',
        component: ShowIdeasFormComponent
      },
      {
        path: 'newidea',
        component: NewIdeaFormComponent
      },
      {
        path: 'requirement',
        component: CimsIdeaBoxCreationComponent
      },
      // {
      //     path: 'ideaboxpage/:type',
      //     component: CimsIdeaBoxCreationComponent
      // },
      {
        path: 'myideaboxpage',
        component: CimsMyIdeaBoxCreationComponent
      },
      {
        path: 'myideaboxpage/req_display_form/:type',
        component: CimsIdeaBoxRequirementDisplayComponent
      },
      {
          path: 'myideaboxpage/req_display_form/:type/view_ideas/:idea_need_id',
          component: CimsIdeaFiledAgainstIdeaneedComponent
      },
      {
        path: 'ideaboxpage',
        component: CimsIdeaboxpageLayoutComponent,
        children: [
          {
            path: '',
            component: CimsIdeaBoxPageComponent
          },
          {
            path: 'req_display_form/:type/assign_users',
            component: CimsAssignUsersToIdeaboxComponent
          },
          {
            path: 'req_display_form/:type',
            component: CimsIdeaBoxRequirementDisplayComponent
          },
          {
            path: 'requirement_form',
            component: CimsIdeaBoxRequirementFormComponent
          },
          {
            path: 'newideabox',
            component: CimsIdeaBoxFormComponent
          },
          {
            path: 'req_display_form/requirement_form',
            component: CimsIdeaBoxRequirementFormComponent
          },
          {
            path: 'req_display_form/:type/requirement_form',
            component: CimsIdeaBoxRequirementFormDisabledComponent
          },
          {
            path: 'req_display_form/:type/view_ideas/:idea_need_id', 
            component: CimsIdeaFiledAgainstIdeaneedComponent
          },
          {
            path: 'req_display_form/:type/new_idea/:idea_need_id', 
            component: NewIdeaFormComponent
          },
        ]
        
      },
      {
        path:'review',
        component: ShowReviewerFormComponent
      },
      { 
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'reviewer',
    component: CimsReviewerLayoutComponent,
    canActivateChild: [LogInOutGuard, ReviewerGuard],
    children: [
      {
        path: '',
        component: CimsCardsReviewerComponent
      },
      {
        path: 'showideas',
        component: ShowIdeasFormComponent
      },
      {
        path: 'newidea',
        component: NewIdeaFormComponent
      },
      {
        path:'review',
        component: ShowReviewerFormComponent
      },
      {
        path: 'ideaboxpage',
        component: CimsIdeaBoxCreationComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type',
        component: CimsIdeaBoxRequirementDisplayComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type/view_ideas/:idea_need_id', 
        component: CimsIdeaFiledAgainstIdeaneedComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type/new_idea/:idea_need_id', 
        component: NewIdeaFormComponent
      },
      {
        path: 'my_reviews',
        component: CimsMyReviewsComponent
      },
      // { 
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // }
    ]

  },
  {
    path:'user_dashboard',
    component: CimsUserLayoutComponent,
    canActivateChild: [LogInOutGuard , UserGuard ],
    children: [
      {
        path: '',
        component: CimsUserDashboardComponent
      },
      {
        path: 'myideas',
        component: CimsMyIdeasComponent
      },
      {
        path: 'newidea',
        component: NewIdeaFormComponent
      },
      {
        path: 'showideas',
        component: ShowIdeasFormComponent
      },
      {
        path: 'ideaboxpage',
        component: CimsIdeaBoxCreationComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type',
        component: CimsIdeaBoxRequirementDisplayComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type/new_idea/:idea_need_id', 
        component: NewIdeaFormComponent
      },
      {
        path: 'ideaboxpage/req_display_form/:type/view_ideas/:idea_need_id',
        component: CimsIdeaFiledAgainstIdeaneedComponent
      },
      { 
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]

  },
  { path: 'review',
        component: ShowReviewerFormComponent,
        canActivate:[LogInOutGuard] 
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // { path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    NewIdeaFormComponent,
    ShowIdeasFormComponent,
    CIMSHeaderComponent,
    CIMSFooterComponent,
    ShowReviewerFormComponent,
    DialogBoxComponent,
    ConfirmationDialogBoxComponent,
    CimsCardsComponent,
    CimsIdeaBoxCreationComponent,
    CimsIdeaBoxPageComponent,
    CimsIdeaBoxFormComponent,
    CimsIdeaBoxRequirementFormComponent,
    CimsIdeaBoxRequirementDisplayComponent,
    FilterCatPipe,
    UserLoginComponent,
    CimsCardsReviewerComponent,
    CimsUserDashboardComponent,
    CimsIdeaBoxRequirementFormDisabledComponent,
    CimsAdminDashboardComponent,
    CimsShowUserComponent,
    CimsManageUserAccessFormComponent,
    CimsIdeaFiledAgainstIdeaneedComponent,
    CimsBackButtonComponent,
    CimsAdminLayoutComponent,
    CimsIdeaboxpageLayoutComponent,
    CimsReviewerLayoutComponent,
    CimsInnovationLayoutComponent,
    CimsUserLayoutComponent,
    CimsManageIdeaboxAccessFormComponent,
    CimsAssignUsersToIdeaboxComponent,
    CimsMyReviewsComponent,
    NotifyUsersDialogboxComponent,
    CimsMyIdeaBoxCreationComponent,
    CimsMyIdeasComponent,
    AddReviewComponent,
    ViewReviewComponent,
    CimsAddRevieverDialogboxComponent,
    CimsTakeDecisionDialogboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //TagInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    NgxSpinnerModule,
  ],
  providers: [
    AddIdeaService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    DatePipe,
    AuthService,
    LogInOutGuard,
    UserGuard,
    ReviewerGuard,
    InnovationManagerGuard,
    AdminGuard
    ],
    bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent,ConfirmationDialogBoxComponent,NotifyUsersDialogboxComponent,AddReviewComponent,ViewReviewComponent,CimsAddRevieverDialogboxComponent,CimsTakeDecisionDialogboxComponent]
  
})


export class AppModule { }
