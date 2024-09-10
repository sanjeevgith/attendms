import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarPhoneComponent } from './sidenavbar-phone.component';

describe('SidenavbarPhoneComponent', () => {
  let component: SidenavbarPhoneComponent;
  let fixture: ComponentFixture<SidenavbarPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavbarPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavbarPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
