import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTodoComponent } from './tabla-todo.component';

describe('TablaTodoComponent', () => {
  let component: TablaTodoComponent;
  let fixture: ComponentFixture<TablaTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTodoComponent]
    });
    fixture = TestBed.createComponent(TablaTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
