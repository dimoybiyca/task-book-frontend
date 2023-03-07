import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticDaysInterface } from 'src/app/shared/modules/analytycs/types/statistic-days.interface';
import { StatisticNumbersInterface } from 'src/app/shared/modules/analytycs/types/statistic-numbers.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AnalytycsService {
  constructor(private http: HttpClient) {}

  getStatisticDays(): Observable<StatisticDaysInterface> {
    const url = environment.statisticUrl + '/days';

    return this.http.get<StatisticDaysInterface>(url);
  }

  getStatisticNumbers(): Observable<StatisticNumbersInterface> {
    const url = environment.statisticUrl + '/numbers';

    return this.http.get<StatisticNumbersInterface>(url);
  }
}
