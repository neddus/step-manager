import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStep from '../reducer/step.reducer';

export const selectStepState = createFeatureSelector<fromStep.StepState>(
  fromStep.stepFeatureKey
);

export const selectSteps = createSelector(
  selectStepState,
  (state: fromStep.StepState) => state.steps
);

export const selectSelectedStep = createSelector(
  selectStepState,
  (state: fromStep.StepState) => state.selectedStep
);
