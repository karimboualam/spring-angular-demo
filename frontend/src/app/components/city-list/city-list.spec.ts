import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityList } from './city-list';

describe('CityList', () => {
  let component: CityList;
  let fixture: ComponentFixture<CityList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
