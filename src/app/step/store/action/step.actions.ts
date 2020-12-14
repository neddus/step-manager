import { createAction } from '@ngrx/store';
import { Step } from '../../models/step';

export const addStep = createAction('[Step] Add Step', (step: Step) => ({
  step,
}));

export const removeStep = createAction('[Step] Remove Step', (step: Step) => ({
  step,
}));

export const selectStep = createAction('[Step] Select Step', (step: Step) => ({
  step,
}));

export const loadSteps = createAction('[Step] Load Steps');

export const loadStepsSuccess = createAction(
  '[Step] Steps Loaded Success',
  (steps: Step[]) => ({ steps })
);

export const loadStepsError = createAction('[Step] Load Steps Error');
