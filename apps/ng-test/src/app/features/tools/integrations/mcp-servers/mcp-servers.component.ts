import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mcp-servers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">MCP Servers</h1>
      <p class="text-gray-600">Manage and configure MCP (Model Context Protocol) servers.</p>
    </div>
  `
})
export class McpServersComponent {}
