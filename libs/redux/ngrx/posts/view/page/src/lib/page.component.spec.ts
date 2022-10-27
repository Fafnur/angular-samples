import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { PostArticleModule } from '@angular-samples/redux/ngrx/posts/view/ui/article';
import { HeaderModule } from '@angular-samples/redux/ngrx/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageComponentPo } from './page.component.po';

describe('PageComponent', () => {
  let po: PageComponentPo;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(HeaderModule),
        MockModule(ContainerModule),
        MockModule(GridModule),
        MockModule(PostsPopularModule),
        MockModule(PostArticleModule),
      ],
      declarations: [PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
    po = new PageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.container).toBeTruthy();
    expect(po.header).toBeTruthy();
    expect(po.article).toBeTruthy();
    expect(po.popular).toBeTruthy();
  });
});
