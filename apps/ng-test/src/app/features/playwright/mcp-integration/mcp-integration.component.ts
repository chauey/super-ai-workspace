import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mcp-integration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">MCP Integration</h1>
      <p class="text-gray-600">Learn how to integrate Playwright with MCP (Model Context Protocol).</p>
    </div>
  `
})
export class McpIntegrationComponent {}
