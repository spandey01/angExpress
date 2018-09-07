import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { HttpModule } from '@angular/http';
import {
  ECoreDatepickerComponent, ECoreDialogComponent,
  ECoreMenuComponent, ECoreTimepickerComponent,
  ECoreTabsComponent, ECoreSpinnerComponent,
  ECoreTooltipComponent, ECoreProgressbarComponent,
  ECoreSwitchComponent, ECoreToastComponent,
  ECoreSliderComponent, ECoreCarouselComponent,
  ECoreBreadcrumbComponent, ECoreMessageboxComponent,
  ECoreDropdownComponent, ECoreVideoComponent,
  ECoreMapComponent, ECoreNotificationComponent
 } from './index';
import { ESharedCoreModule } from '../e-shared/e-shared-core.module';
import { FormsModule } from '@angular/forms';
import { ECoreAutocompleteComponent } from './e-core-autocomplete/e-core-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    ESharedCoreModule,
    FormsModule,
    HttpModule,
    NguiAutoCompleteModule
  ],
  declarations: [
    ECoreDatepickerComponent, ECoreDialogComponent,
    ECoreMenuComponent, ECoreTimepickerComponent,
    ECoreTabsComponent, ECoreSpinnerComponent,
    ECoreTooltipComponent, ECoreProgressbarComponent,
    ECoreSwitchComponent, ECoreToastComponent,
    ECoreSliderComponent, ECoreCarouselComponent,
    ECoreBreadcrumbComponent, ECoreMessageboxComponent,
    ECoreDropdownComponent, ECoreVideoComponent,
    ECoreMapComponent,ECoreNotificationComponent, ECoreAutocompleteComponent
  ]
})
export class ECoreComponentsModule { }
