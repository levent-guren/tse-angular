import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelSorguKriterComponent } from './personel-sorgu-kriter.component';

describe('PersonelSorguKriterComponent', () => {
  let component: PersonelSorguKriterComponent;
  let fixture: ComponentFixture<PersonelSorguKriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelSorguKriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelSorguKriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
