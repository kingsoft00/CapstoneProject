import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalBrandsComponent } from './portal-brands.component';

describe('PortalBrandsComponent', () => {
  let component: PortalBrandsComponent;
  let fixture: ComponentFixture<PortalBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
