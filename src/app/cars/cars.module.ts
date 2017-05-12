import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomComponent } from './welcom.component';
import { PrivateCarComponent } from './private-car/private-car.component';
import { CommertialCarComponent } from './commertial-car/commertial-car.component';
import { SuvCarComponent } from './suv-car/suv-car.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
    declarations: [
        WelcomComponent,
        PrivateCarComponent,
        CommertialCarComponent,
        SuvCarComponent,
        ResultsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: '', component: WelcomComponent },
            { path: 'private', component: PrivateCarComponent },
            { path: 'commercial', component: CommertialCarComponent },
            { path: 'suv', component: SuvCarComponent },
            { path: 'results/:mainType', component: ResultsComponent}
        ])
    ],
    providers: []
})
export class CarsModule { }