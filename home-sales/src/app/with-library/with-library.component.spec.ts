import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLibraryComponent } from './with-library.component';

describe('WithLibraryComponent', () => {
  let component: WithLibraryComponent;
  let fixture: ComponentFixture<WithLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WithLibraryComponent]
    });
    fixture = TestBed.createComponent(WithLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
