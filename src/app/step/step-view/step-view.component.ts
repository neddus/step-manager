import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '..//models/step';
import { select, Store } from '@ngrx/store';
import { selectSteps } from '../store/selector/step.selectors';
import { StepState } from '../store/reducer/step.reducer';
import { removeStep, selectStep } from '../store/action/step.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-step-view',
  templateUrl: './step-view.component.html',
  styleUrls: ['./step-view.component.scss'],
})
export class StepViewComponent implements OnInit {
  steps$: Observable<Step[]>;
  constructor(private store: Store<StepState>) {
    this.steps$ = this.store.pipe(select(selectSteps));
  }
  ngOnInit(): void {
    this.steps$.pipe(tap(console.log)).subscribe();
  }

  // todo to service
  removeStep(step: Step): void {
    this.store.dispatch(removeStep(step));
  }
  selectStep(step: Step): void {
    this.store.dispatch(selectStep(step));
  }
}
