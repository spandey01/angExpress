import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EMatSharedModule } from '../e-shared/e-shared-mat.module';
import {
  EMatDatePickerComponent, EMatTimepickerComponent,
  EMatSpinnerComponent, EMatTabsComponent,
  EMatTooltipComponent, EMatProgressbarComponent,
  EMatSwitchComponent, EMatToastComponent,
  EMatDialogPopupComponent, EMatDialogComponent,
  EMatMenuComponent, EMatSliderComponent,
  EMatCarouselComponent, EMatBreadcrumbComponent,
  EMatMessageboxComponent, EMatNavigationComponent,
  ELayoutComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,
  EMatVideoComponent,EMatDropdownComponent
} from './index';




@NgModule({
  imports: [
    EMatSharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  declarations:
  [ EMatDatePickerComponent, EMatDialogComponent,
    EMatMenuComponent, EMatDialogPopupComponent,
    ELayoutComponent, EMatTabsComponent,
    EMatSpinnerComponent, EMatTimepickerComponent,
    EMatTooltipComponent, EMatProgressbarComponent,
    EMatSwitchComponent, EMatToastComponent,
    EMatSliderComponent, EMatCarouselComponent,
    EMatBreadcrumbComponent, EMatMessageboxComponent,
    EMatNavigationComponent,
    EMatAccordianComponent,
    EMatNotificationComponent,
    EMatMapComponent,
    EMatVideoComponent,
    EMatDropdownComponent ],
    entryComponents: [EMatDialogComponent, EMatDialogPopupComponent],

})
export class EMatComponentsModule {}
