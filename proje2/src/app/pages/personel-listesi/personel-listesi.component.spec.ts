import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelListesiComponent } from './personel-listesi.component';

describe('PersonelListesiComponent', () => {
  let component: PersonelListesiComponent;
  let fixture: ComponentFixture<PersonelListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelListesiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
