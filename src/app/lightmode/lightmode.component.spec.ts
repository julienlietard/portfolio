import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightmodeComponent } from './lightmode.component';

describe('LightmodeComponent', () => {
  let component: LightmodeComponent;
  let fixture: ComponentFixture<LightmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
