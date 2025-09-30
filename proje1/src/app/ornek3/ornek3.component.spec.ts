import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ornek3Component } from './ornek3.component';

describe('Ornek3Component', () => {
  let component: Ornek3Component;
  let fixture: ComponentFixture<Ornek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ornek3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ornek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
