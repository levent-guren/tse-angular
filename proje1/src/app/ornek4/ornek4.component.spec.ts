import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ornek4Component } from './ornek4.component';

describe('Ornek4Component', () => {
  let component: Ornek4Component;
  let fixture: ComponentFixture<Ornek4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ornek4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ornek4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
