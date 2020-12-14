import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepViewComponent } from './step-view/step-view.component';
import { StepAddComponent } from './step-add/step-add.component';
import { StoreModule } from '@ngrx/store';
import { stepFeatureKey, reducer } from './store/reducer/step.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StepEffects } from './store/effect/step.effects';

@NgModule({
  declarations: [StepViewComponent, StepAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(stepFeatureKey, reducer),
    ReactiveFormsModule,
    EffectsModule.forFeature([StepEffects]),
  ],
  exports: [StepViewComponent, StepAddComponent],
  providers: [],
})
export class StepModule {}
