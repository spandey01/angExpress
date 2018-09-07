import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EMatSharedModule } from '../e-shared/index';
import { ESideNavComponent } from './e-sidenav/e-sidenav.component';
import { EToolbarComponent } from './e-toolbar/e-toolbar.component';
import { EDashboardComponent } from './e-dashboard/e-dashboard.component';
import { HighlightModule, HighlightOptions } from 'ngx-highlightjs';

const options: HighlightOptions = {
  theme: 'agate',
  path: 'assets/lib/hljs/highlight.pack'
 };
@NgModule({
  imports: [
    EMatSharedModule,
    HighlightModule.forRoot({theme: 'default'})
  ],
  exports: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
  ],
  declarations: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
  ],
  providers : []
})
export class EModuleModules { }
