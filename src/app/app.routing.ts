import { InitGuard } from './guards/initial-guard';
import { ResultsComponent } from './cars/results/results.component';
import { SuvCarComponent } from './cars/suv-car/suv-car.component';
import { CommertialCarComponent } from './cars/commertial-car/commertial-car.component';
import { PrivateCarComponent } from './cars/private-car/private-car.component';
import { WelcomComponent } from './cars/welcom.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/private'
    },
    {
        path: 'private',
        component: PrivateCarComponent
    },
    {
        path: 'commercial',
        component: CommertialCarComponent
    },
    {
        path: 'suv',
        component: SuvCarComponent
    },
    { 
        path: 'results/:mainType', 
        component: ResultsComponent
    }
]