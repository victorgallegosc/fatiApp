import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseIdeaComponent } from './choose-idea.component';

describe('ChooseIdeaComponent', () => {
  let component: ChooseIdeaComponent;
  let fixture: ComponentFixture<ChooseIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
