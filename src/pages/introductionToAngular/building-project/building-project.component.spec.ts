import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProjectComponent } from './building-project.component';

describe('BuildingProjectComponent', () => {
  let component: BuildingProjectComponent;
  let fixture: ComponentFixture<BuildingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
