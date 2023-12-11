import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { interval, map, Observable, of, shareReplay, switchMap, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class EmptyRouteService {
  pollData: Observable<any> = interval(5000)
    .pipe(
      switchMap(() => this.getData()),
      shareReplay({bufferSize: 1, refCount: true}),
    );
  constructor(
    private http: HttpClient
  ) {
    this.pollData.subscribe();
  }


  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap((data) => console.log(data))
    )
  }
}
