import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CityService } from '../../services/city';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="container">
      <h2>Add City</h2>

      <form (ngSubmit)="saveCity()">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="city.name" name="name" required />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Region</mat-label>
          <input matInput [(ngModel)]="city.region" name="region" required />
        </mat-form-field>

        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Population</mat-label>
          <input matInput type="number" [(ngModel)]="city.population" name="population" required />
        </mat-form-field>

        <button mat-raised-button color="primary" type="submit">Save</button>
      </form>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; }
    .full-width { width: 100%; margin-bottom: 1rem; }
  `]
})
export class CityFormComponent {
  city = { name: '', region: '', population: 0 };

  constructor(private cityService: CityService, private router: Router) {}

  saveCity(): void {
    this.cityService.createCity(this.city).subscribe(() => this.router.navigate(['/']));
  }
}
