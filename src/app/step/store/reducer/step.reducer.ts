import { Action, createReducer, on } from '@ngrx/store';
import * as StepActions from '../action/step.actions';
import { Step } from '../../models/step';

export const stepFeatureKey = 'step';

export interface StepState {
  steps: Step[];
  selectedStep: Step;
}

export const initialState: StepState = {
  steps: [],
  selectedStep: new Step(),
};

export const stepReducer = createReducer(
  initialState,

  on(StepActions.addStep, (state: StepState, { step }) => ({
    ...state,
    steps: [...state.steps, step],
  })),

  on(StepActions.removeStep, (state: StepState, { step }) => ({
    ...state,
    steps: state.steps.filter((c) => c.id !== step.id),
    selectedStep:
      step.id === state.selectedStep.id ? new Step() : state.selectedStep,
  })),

  on(StepActions.selectStep, (state: StepState, { step }) => ({
    ...state,
    selectedStep: { ...step },
  })),

  on(StepActions.loadStepsSuccess, (state: StepState, { steps }) => ({
    ...state,
    steps: [...state.steps, ...steps],
  }))
);

export function reducer(state: StepState | undefined, action: Action): any {
  return stepReducer(state, action);
}
