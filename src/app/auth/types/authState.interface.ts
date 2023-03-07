import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  isLoggedIn: boolean | null;
  isRefreshing: boolean;
  currentUser: CurrentUserInterface | null;
}
