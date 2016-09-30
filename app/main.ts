import 'reflect-metadata';
import 'es6-shim';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
