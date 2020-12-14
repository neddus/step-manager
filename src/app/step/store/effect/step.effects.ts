import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { StepService } from '../../step.service';
import {
  loadStepsError,
  loadStepsSuccess,
} from '../../store/action/step.actions';

@Injectable()
export class StepEffects {
  loadSteps$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Step] Load Steps'),
      switchMap(() =>
        // call service
        this.stepService.getSteps().pipe(
          // dispatch action to store with data as paylaod
          map((steps) => loadStepsSuccess(steps)),
          catchError(() => of(loadStepsError)) // dunno if works
        )
      )
    )
  );
  constructor(private actions$: Actions, private stepService: StepService) {}
}
