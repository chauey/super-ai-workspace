import { Injectable, inject } from '@angular/core';
import { CertTestStore } from '../../features/cert-test/store/test.store';

@Injectable({
  providedIn: 'root'
})
export class StoreInitializerService {
  private store = inject(CertTestStore);

  constructor() {
    // Initialize the store when the service is created
    console.log('Initializing CertTestStore...');
    this.store.loadTests();
  }
}
