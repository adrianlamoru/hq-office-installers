
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';


const ROUTES: Routes = [
    { path: '', component: FormComponent },
    
    { path: '**', pathMatch:'full', redirectTo: '' },

   
];


export const APP_ROUTING = RouterModule.forRoot(ROUTES);
