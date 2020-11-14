import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalProductsComponent } from './portal-products.component';

describe('PortalProductsComponent', () => {
  let component: PortalProductsComponent;
  let fixture: ComponentFixture<PortalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
