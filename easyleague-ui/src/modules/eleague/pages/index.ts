import { ListPageComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team';

export * from './home';
export * from './team';

export const COMPONENT_DECLARATIONS = [
  HomeComponent,
  TeamComponent,
  ListPageComponent
];
