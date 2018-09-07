import { Routes, RouterModule } from "@angular/router";
import { EDashboardComponent, ELayoutComponent } from './e-modules/index';
import { ModuleWithProviders } from "@angular/core";

import { ETranslationComponent } from './e-translation/e-translation.component';

import {
  EMatDatePickerComponent, EMatTimepickerComponent,
  EMatSpinnerComponent, EMatTabsComponent,
  EMatTooltipComponent, EMatProgressbarComponent,
  EMatSwitchComponent, EMatToastComponent,
  EMatDialogPopupComponent, EMatDialogComponent,
  EMatMenuComponent, EMatSliderComponent,
  EMatCarouselComponent, EMatBreadcrumbComponent,
  EMatMessageboxComponent, EMatNavigationComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,
  EMatVideoComponent,EMatDropdownComponent
} from './e-mat-components/index';

import {
  ECoreDatepickerComponent, ECoreDialogComponent,
  ECoreMenuComponent, ECoreTimepickerComponent,
  ECoreTabsComponent, ECoreSpinnerComponent,
  ECoreTooltipComponent, ECoreProgressbarComponent,
  ECoreSwitchComponent, ECoreToastComponent,
  ECoreSliderComponent, ECoreCarouselComponent,
  ECoreBreadcrumbComponent, ECoreMessageboxComponent,
  ECoreDropdownComponent, ECoreVideoComponent,
  ECoreMapComponent, ECoreNotificationComponent,ECoreAutocompleteComponent
} from "./e-core-components";


const routes: Routes = [
  {
    path: 'notification', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNotificationComponent, outlet: 'basic', data: { name: 'Basic Notification' }
      },
      {
        path: '', component: ECoreNotificationComponent, outlet: 'core', data: { name: 'Basic Core Notification' }
      }
    ]
  },
  {
    path: 'map', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMapComponent, outlet: 'basic', data: { name: 'Basic Map' }
      },
      {
        path: '', component: ECoreMapComponent, outlet: 'core', data: { name: 'Basic Core Map' }
      }
    ]
  },
  {
    path: 'video', component: ELayoutComponent, children: [
      {
        path: '', component: EMatVideoComponent, outlet: 'basic', data: { name: 'Basic Video' }
      },
      {
        path: '', component: ECoreVideoComponent, outlet: 'core', data: { name: 'Basic Core Video' }
      }
    ]
  },
  {
    path: 'dropdown', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDropdownComponent, outlet: 'basic', data: { name: 'Basic Dropdown' }
      },
      {
        path: '', component: ECoreDropdownComponent, outlet: 'core', data: { name: 'Basic Core Dropdown' }
      }
    ]
  },
  {
    path: 'navigation', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNavigationComponent, outlet: 'basic', data: { name: 'Basic Navigation' }
      },
      {
        path: '', component: EMatNavigationComponent, outlet: 'core', data: { name: 'Basic Core Navigation' }
      }
    ]
  },
  {
    path: 'datepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDatePickerComponent, outlet: 'basic', data: { name: 'Basic Datepicker' }
      },
      {
        path: '', component: ECoreDatepickerComponent, outlet: 'core', data: { name: 'Basic Core Datepicker' }
      }
    ]
  },
  {
    path: 'timepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTimepickerComponent, outlet: 'basic', data: { name: 'Basic Timepicker' }
      },
      {
        path: '', component: ECoreTimepickerComponent, outlet: 'core', data: { name: 'Basic Core Timepicker' }
      }
    ]
  },
  {
    path: 'dialog', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDialogComponent, outlet: 'basic', data: { name: 'Basic Dialog' }
      },
      {
        path: '', component: ECoreDialogComponent, outlet: 'core', data: { name: 'Basic Core Dialog' }
      }
    ]
  },
  {
    path: 'tooltip', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTooltipComponent, outlet: 'basic', data: { name: 'Basic Tooltip' }
      },
      {
        path: '', component: ECoreTooltipComponent, outlet: 'core', data: { name: 'Basic Core Tooltip' }
      }
    ]
  },
  {
    path: 'menu', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMenuComponent, outlet: 'basic', data: { name: 'Basic Menu' }
      },
      {
        path: '', component: ECoreMenuComponent, outlet: 'core', data: { name: 'Basic Core Menu' }
      }
    ]
  },
  {
    path: 'spinner', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSpinnerComponent, outlet: 'basic', data: { name: 'Basic Menu' }
      },
      {
        path: '', component: ECoreSpinnerComponent, outlet: 'core', data: { name: 'Basic Core Menu' }
      }
    ]
  },
  {
    path: 'sliders', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSliderComponent, outlet: 'basic', data: { name: 'Basic Slider' }
      },
      {
        path: '', component: ECoreSliderComponent, outlet: 'core', data: { name: 'Basic Core Slider' }
      }
    ]
  },
  {
    path: 'carousel', component: ELayoutComponent, children: [
      {
        path: '', component: EMatCarouselComponent, outlet: 'basic', data: { name: 'Basic Carousel' }
      },
      {
        path: '', component: ECoreCarouselComponent, outlet: 'core', data: { name: 'Basic Core Carousel' }
      }
    ]
  },
  {
    path: 'breadcrumb', component: ELayoutComponent, children: [
      {
        path: '', component: EMatBreadcrumbComponent, outlet: 'basic', data: { name: 'Basic Breadcrumb' }
      },
      {
        path: '', component: ECoreBreadcrumbComponent, outlet: 'core', data: { name: 'Basic Core Breadcrumb' }
      }
    ]
  },
  {
    path: 'messagebox', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMessageboxComponent, outlet: 'basic', data: { name: 'Basic Messagebox' }
      },
      {
        path: '', component: ECoreMessageboxComponent, outlet: 'core', data: { name: 'Basic Core Messagebox' }
      }
    ]
  },
  {
    path: 'progressbar', component: ELayoutComponent, children: [
      {
        path: '', component: EMatProgressbarComponent, outlet: 'basic', data: { name: 'Basic Progressbar' }
      },
      {
        path: '', component: ECoreProgressbarComponent, outlet: 'core', data: { name: 'Basic Core Progressbar' }
      }
    ]
  },
  {
    path: 'switch', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSwitchComponent, outlet: 'basic', data: { name: 'Basic Switch' }
      },
      {
        path: '', component: ECoreSwitchComponent, outlet: 'core', data: { name: 'Basic Core Switch' }
      }
    ]
  },
  {
    path: 'toast', component: ELayoutComponent, children: [
      {
        path: '', component: EMatToastComponent, outlet: 'basic', data: { name: 'Basic Toast' }
      },
      {
        path: '', component: ECoreToastComponent, outlet: 'core', data: { name: 'Basic Core Toast' }
      }
    ]
  },
  {
    path: 'tabs', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTabsComponent, outlet: 'basic', data: { name: 'Basic Tabs' }
      },
      {
        path: '', component: ECoreTabsComponent, outlet: 'core', data: { name: 'Basic Core Tabs' }
      }
    ]
  },
  {
    path: 'autocomplete', component: ELayoutComponent, children: [
      {
        path: '', component: ECoreAutocompleteComponent, outlet: 'core', data: { name: 'Basic Core Autocomplete' }
      }
    ]
  },
  {
    path: 'accordian', component: ELayoutComponent, children: [
      {
        path: '', component: EMatAccordianComponent, outlet: 'basic', data: { name: 'Basic Mat Accordian' }
      }
    ]
  },
  { path: 'dashboard', component: EDashboardComponent },
  { path: 'layout', component: ELayoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'translate', component: ETranslationComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
