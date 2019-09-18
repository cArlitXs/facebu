import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPublishComponent } from './stories-publish.component';

describe('StoriesPublishComponent', () => {
  let component: StoriesPublishComponent;
  let fixture: ComponentFixture<StoriesPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
