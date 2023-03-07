import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';
import { GetCategoriesResponseInterface } from 'src/app/shared/modules/side-nav/types/get-categories-response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryInterface[]> {
    const url = environment.apiUrl + '/categories';

    return this.http.get(url).pipe(map(this.getCategories));
  }

  private getCategories(
    response: GetCategoriesResponseInterface
  ): CategoryInterface[] {
    return response.categories;
  }
}
