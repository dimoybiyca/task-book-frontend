import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';
import { ModalStateInterface } from 'src/app/modal/types/modal-state.interface';
import { AnalytycsStateInterface } from 'src/app/shared/modules/analytycs/types/analytycs-state.interface';
import { SideNavStateInterface } from 'src/app/shared/modules/side-nav/types/side-nav-state.interface';
import { TasksStateInterface } from 'src/app/tasks/types/tasks.state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  main: MainStateInterface;
  sideNav: SideNavStateInterface;
  tasks: TasksStateInterface;
  modal: ModalStateInterface;
  analytycs: AnalytycsStateInterface;
}
