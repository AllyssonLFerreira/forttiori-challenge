import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Bus } from 'src/app/Interface/Bus';

@Injectable({
  providedIn: 'root'
})
export class SearhBusService {
  
  private Url = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o';
 

  constructor(private http: HttpClient) { }

  getAllBus():Observable<Bus[]> {
    return this.http.get<Bus[]>(this.Url)
  }

}
