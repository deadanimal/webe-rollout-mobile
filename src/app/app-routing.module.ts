import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'work-order',
    loadChildren: () => import('./work-order/work-order.module').then( m => m.WorkOrderPageModule)
  },
  {
    path: 'form-first',
    loadChildren: () => import('./form-first/form-first.module').then( m => m.FormFirstPageModule)
  },
  {
    path: 'work-request',
    loadChildren: () => import('./work-request/work-request.module').then( m => m.WorkRequestPageModule)
  },
  {
    path: 'asset-detail',
    loadChildren: () => import('./asset-detail/asset-detail.module').then( m => m.AssetDetailPageModule)
  },
  {
    path: 'asset-reading',
    loadChildren: () => import('./asset-reading/asset-reading.module').then( m => m.AssetReadingPageModule)
  },
  {
    path: 'asset-location',
    loadChildren: () => import('./asset-location/asset-location.module').then( m => m.AssetLocationPageModule)
  },
  {
    path: 'submit',
    loadChildren: () => import('./submit/submit.module').then( m => m.SubmitPageModule)
  },
  {
    path: 'punchlist',
    loadChildren: () => import('./punchlist/punchlist.module').then( m => m.PunchlistPageModule)
  },
  {
    path: 'attach-picture',
    loadChildren: () => import('./attach-picture/attach-picture.module').then( m => m.AttachPicturePageModule)
  },
  {
    path: 'acceptance-test-procedure',
    loadChildren: () => import('./acceptance-test-procedure/acceptance-test-procedure.module').then( m => m.AcceptanceTestProcedurePageModule)
  },
  {
    path: 'self-assesment',
    loadChildren: () => import('./self-assesment/self-assesment.module').then( m => m.SelfAssesmentPageModule)
  },
  // {
  //   path: 'signature',
  //   loadChildren: () => import('./signature/signature.module').then( m => m.SignaturePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
