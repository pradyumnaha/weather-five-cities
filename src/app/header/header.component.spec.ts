import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../shared/services/data.service';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [HeaderComponent],
        providers: [DataService]

    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it("should handle home button display", async(() => {
    let response: boolean;
    const dataService = fixture.debugElement.injector.get(DataService);  
    spyOn(dataService, 'currentHmeBtndisplaySubject').and.returnValue(of(response));
    component.ngOnInit();
    component.displayHomeButton = component.currentHmeBtndisplaySubject;
    expect(component.displayHomeButton).toEqual(response);
  }));

  it('should navigate back to home screen', () => {
      component.onHomeClick();
      expect(component.displayHomeButton).toBe(false);
  });

});
