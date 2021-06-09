import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery.model';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  throttle = 0;
  distance = 2;
  page = 1;
  breweries: Brewery[] | any[] = [];

  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.breweryService.getBreweries(this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries = breweries;
      })
  }

  onScroll(): void {
    this.breweryService.getBreweries(++this.page)
      .subscribe((breweries: Brewery[]) => {
        this.breweries.push(...breweries);
      });
  }

}
