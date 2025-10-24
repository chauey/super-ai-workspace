import { Routes } from '@angular/router';

export const appsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./apps.component').then(m => m.AppsComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
  },
  {
    path: 'task-management',
    loadComponent: () => import('./task-management/task-management.component').then(m => m.TaskManagementComponent)
  },
  {
    path: 'certification-test',
    loadChildren: () => import('../cert-test/cert-test.routes').then(m => m.certTestRoutes)
  },
  {
    path: 'family-tree',
    loadComponent: () => import('./family-tree/family-tree.component').then(m => m.FamilyTreeComponent)
  },
  {
    path: 'job-board',
    loadComponent: () => import('./job-board/job-board.component').then(m => m.JobBoardComponent)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.component').then(m => m.ListsComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent)
  }
];




