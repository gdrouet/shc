import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {SHC} from "./shc";
import {AppWrapper} from "./component/app.wrapper";

const appRoutes: Routes = [
    {path: '', component: AppWrapper, data: {title: 'SHC'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
