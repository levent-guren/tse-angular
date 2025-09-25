import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  beforeEach(async () => {

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'signal' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('signal');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, signal');
  });
  it("test ettigim şey", () => {
    let a = 5;
    expect(a).toBe(5);
    spyOn(app, 'topla').and.callThrough();
    expect(app.topla(3, 5)).toEqual(8);
    expect(app.topla).toHaveBeenCalledTimes(1);
    const compiled = fixture.nativeElement as HTMLElement;
    
  })
});
