///<reference path="../../typings/index.d.ts"/>

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SHCModule} from './shc.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(SHCModule);
