import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SHC} from "./shc";
import {AppWrapper} from "./component/app.wrapper";

import {routing, appRoutingProviders} from './shc.router';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        SHC,
        AppWrapper
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [SHC]
})
export class SHCModule {
}
