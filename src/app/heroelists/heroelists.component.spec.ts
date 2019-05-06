import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroelistsComponent } from './heroelists.component';

describe('HeroelistsComponent', () => {
  let component: HeroelistsComponent;
  let fixture: ComponentFixture<HeroelistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroelistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
