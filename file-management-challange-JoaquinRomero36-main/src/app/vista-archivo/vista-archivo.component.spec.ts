import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaArchivoComponent } from './vista-archivo.component';

describe('VistaArchivoComponent', () => {
  let component: VistaArchivoComponent;
  let fixture: ComponentFixture<VistaArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
