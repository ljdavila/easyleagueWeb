import { AuthenticationService } from './authentication/authentication.service';
import { AnimationsService } from './animations/animations.service';
import { UsersService } from './users';
import { TeamsService } from './teams';
import { TimeService } from './time';

export * from './teams';
export * from './users';


export const SERVICES_DECLARATIONS = [
  UsersService,
  TeamsService,
  AnimationsService,
  TimeService,
  AuthenticationService
];
