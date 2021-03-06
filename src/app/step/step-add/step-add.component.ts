import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Step } from '../models/step';
import { addStep, loadSteps } from '../store/action/step.actions';
import { StepState } from '../store/reducer/step.reducer';
import { selectSelectedStep } from '../store/selector/step.selectors';

@Component({
  selector: 'app-step-add',
  templateUrl: './step-add.component.html',
  styleUrls: ['./step-add.component.scss'],
})
export class StepAddComponent implements OnInit {
  types = [
    { name: 'Son', id: '1' },
    { name: 'Sister', id: '2' },
    { name: 'Friend', id: '3' },
    { name: 'Brother', id: '4' },
  ];

  selectedStep$: Observable<Step>;
  nameControl = new FormControl('');
  ageControl = new FormControl('');
  typeControl = new FormControl(this.types[3]);

  addStepForm = new FormGroup({
    name: this.nameControl,
    age: this.ageControl,
    type: this.typeControl,
  });

  constructor(private store: Store<StepState>) {
    this.selectedStep$ = this.store.pipe(select(selectSelectedStep));
  }

  ngOnInit(): void {
    let list = [1, 2, 3, 4, 5];
    let observableList$ = from(list);

    let aa = observableList$
      .pipe(mergeMap((x: number) => of((a: number) => a * 2)))
      .subscribe(console.log);

    console.log(aa);
    const switched = of(1, 2, 3).pipe(
      switchMap((x: number) => of(x, x ** 2, x ** 3))
    );

    switched.subscribe((x) => console.log(x));
    this.addStep({
      name: 'Step',
      type: 'Sister',
      age: 10,
      id: 44,
    });

    this.store.select(selectSelectedStep).subscribe((p) => {
      this.nameControl.setValue(p.name);
      this.ageControl.setValue(p.age);
      this.typeControl.setValue(p.type);
    });
  }

  addStep(step: Step): void {
    const c = { ...step, id: Date.now() };
    this.store.dispatch(addStep(c));
  }

  loadSteps(): void {
    this.store.dispatch(loadSteps());
  }

  onSubmit(): void {
    this.addStep(this.addStepForm.value);
  }
}
