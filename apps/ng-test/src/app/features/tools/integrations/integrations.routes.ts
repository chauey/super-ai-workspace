import { Routes } from '@angular/router';

export const integrationsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./integrations.component').then(m => m.IntegrationsComponent)
  },
  {
    path: 'mcp-servers',
    loadComponent: () => import('./mcp-servers/mcp-servers.component').then(m => m.McpServersComponent)
  },
  {
    path: 'api-connections',
    loadComponent: () => import('./api-connections/api-connections.component').then(m => m.ApiConnectionsComponent)
  },
  {
    path: 'third-party-services',
    loadComponent: () => import('./third-party-services/third-party-services.component').then(m => m.ThirdPartyServicesComponent)
  }
];


