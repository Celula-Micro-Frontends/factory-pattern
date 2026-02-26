import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportContainerComponent } from './transport-container-component';

describe('TransportContainerComponent', () => {
  let component: TransportContainerComponent;
  let fixture: ComponentFixture<TransportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
