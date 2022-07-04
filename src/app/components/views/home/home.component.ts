import { Component, OnInit } from '@angular/core';

import { SearhBusService } from 'src/app/services/search-bus/searh-bus.service';
import { SearhLotService } from 'src/app/services/search-lot/searh-lot.service';

import { Bus } from 'src/app/Interface/Bus';
import { Lotacao } from 'src/app/Interface/Lotacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allBus: Bus[] = [];
  filteredBus:Bus[] = [];
  allLot: Lotacao[] = [];
  filteredLot:Lotacao[] = [];
  /// filtro de busca ///
  filterBus: string = '';
  filterLot: string = '';

  constructor(
    private searchBus: SearhBusService, 
    private searchLot: SearhLotService
  ) { this.getBus(); this.getLot(); }

  ngOnInit(): void {
  };
  /// chamada Api ///
  getBus(): void {
    this.searchBus.getAllBus().subscribe((bus) => {      
      this.allBus = bus;
      this.filteredBus = bus;
    })
  };
  getLot(): void {
    this.searchLot.getAllLot().subscribe((lot) => {
      this.allLot = lot;
      this.filteredLot = lot;
    })
  };
  /// filtro de busca ///
  targetBus(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.allBus = this.filteredBus.filter((bus) => {
      return bus.nome.toLowerCase().includes(value)
    })
  }

  targetLot(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value
    
    this.allLot = this.filteredLot.filter((lot) => {
      return lot.nome.toLowerCase().includes(value)
    })
  }
}