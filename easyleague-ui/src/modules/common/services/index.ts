import { UsersService } from './users';
import { TeamsService } from './teams';

export * from './teams';
export * from './users';


export const SERVICES_DECLARATIONS = [
  UsersService,
  TeamsService
];
