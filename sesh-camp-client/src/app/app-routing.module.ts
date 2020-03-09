import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { UploadMusicComponent } from './upload-music/upload-music.component';


const routes: Routes = [
  { path: 'music', component: UploadMusicComponent },
  { path: '', component: TestComponentComponent },
  { path: '**', redirectTo: '' },

];
// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
