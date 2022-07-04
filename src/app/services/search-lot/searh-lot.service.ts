import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Lotacao } from 'src/app/Interface/Lotacao';

@Injectable({
  providedIn: 'root'
})
export class SearhLotService {
  private Url = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l'
  
  constructor(private http: HttpClient) { }

  getAllLot():Observable<Lotacao[]> {
    return this.http.get<Lotacao[]>(this.Url)
  };

}
