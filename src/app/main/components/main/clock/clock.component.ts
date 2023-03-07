import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, share, timer } from 'rxjs';

@Component({
  selector: 'tb-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, OnDestroy {
  time = new Date();
  clockSubscription: Subscription;

  ngOnInit(): void {
    this.clockSubscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.time = time;
      });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }
}
