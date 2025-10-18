import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from '../../services/city';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  template: `
    <div class="container">
      <h2>City List</h2>
      <table mat-table [dataSource]="cities" class="mat-elevation-z8">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let city">{{ city.name }}</td>
        </ng-container>

        <ng-container matColumnDef="region">
          <th mat-header-cell *matHeaderCellDef>Region</th>
          <td mat-cell *matCellDef="let city">{{ city.region }}</td>
        </ng-container>

        <ng-container matColumnDef="population">
          <th mat-header-cell *matHeaderCellDef>Population</th>
          <td mat-cell *matCellDef="let city">{{ city.population }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns"></tr>
      </table>

      <button mat-raised-button color="primary" routerLink="/add">Add City</button>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; }
    table { width: 100%; margin-bottom: 1rem; }
  `]
})
export class CityListComponent implements OnInit {
  cities: any[] = [];
  columns = ['name', 'region', 'population'];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => (this.cities = data));
  }
}
