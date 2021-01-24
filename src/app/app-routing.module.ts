import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, NoPreloading, PreloadAllModules } from '@angular/router';
import { OptInStrategy } from './strategy';
import { NetworkAwarePreloadStrategy } from './strategy/Network-Strategy';


const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload: true }
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { preload: false }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: NoPreloading,
    // preloadingStrategy: PreloadAllModules,
    preloadingStrategy: OptInStrategy,
    // preloadingStrategy: NetworkAwarePreloadStrategy
  })],
  exports: [RouterModule],
  providers: [OptInStrategy]
})
export class AppRoutingModule { }
