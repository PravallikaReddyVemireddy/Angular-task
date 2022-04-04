import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiciacComponent } from './ticiac.component';

describe('TiciacComponent', () => {
  let component: TiciacComponent;
  let fixture: ComponentFixture<TiciacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiciacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiciacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
