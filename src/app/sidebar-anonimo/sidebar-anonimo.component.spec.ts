import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAnonimoComponent } from './sidebar-anonimo.component';

describe('SidebarAnonimoComponent', () => {
  let component: SidebarAnonimoComponent;
  let fixture: ComponentFixture<SidebarAnonimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAnonimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
