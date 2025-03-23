import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopingWarningComponent } from './developing-warning.component';

describe('DevelopingWarningComponent', () => {
  let component: DevelopingWarningComponent;
  let fixture: ComponentFixture<DevelopingWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopingWarningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopingWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
