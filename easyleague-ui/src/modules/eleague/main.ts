import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EleagueModule } from './eleague.module';
import { environment } from '../../environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EleagueModule)
  .catch(err => console.error(err));
