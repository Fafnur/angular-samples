import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export interface ApiDog {
  path: string;
}

const DOG_KEY = makeStateKey<ApiDog>('ApiDog');

@Injectable()
export class HomePageService {
  constructor(private readonly httpClient: HttpClient, private readonly transferState: TransferState) {}

  getDog(): Observable<ApiDog> {
    const apiDog = this.transferState.get(DOG_KEY, null);

    if (apiDog) {
      return of(apiDog);
    }

    return this.httpClient.get<{ path: string }>('http://localhost:4004').pipe(
      tap((response) => {
        this.transferState.set(DOG_KEY, response);
      })
    );
  }
}
