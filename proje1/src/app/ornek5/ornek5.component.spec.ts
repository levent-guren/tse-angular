import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ornek5Component } from './ornek5.component';

describe('Ornek5Component', () => {
  let component: Ornek5Component;
  let fixture: ComponentFixture<Ornek5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ornek5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ornek5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
