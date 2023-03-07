import { Component, Input, OnInit } from '@angular/core';
import { Observable, concatMap, delay, from, of } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'tb-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input('counterTitle') counterTitleProps: string;
  @Input('taskCounter') taskCounterProps: number;

  counter$: Observable<number>;

  constructor(private utils: UtilsService) {}

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners() {
    let fakeCounter = this.utils.range(0, this.taskCounterProps + 1);

    this.counter$ = from(fakeCounter).pipe(
      concatMap((item) => of(item).pipe(delay(1000 / this.taskCounterProps)))
    );
  }
}
