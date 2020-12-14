import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Step } from './models/step';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  getSteps(): Observable<Step[]> {
    const steps: Step[] = [
      {
        name: 'Jesus',
        type: 'Brother',
        age: 55,
        id: 99,
      },
      {
        name: 'Maria',
        type: 'Sister',
        age: 44,
        id: 88,
      },
    ];
    return of(steps);
  }

  constructor() {}
}
