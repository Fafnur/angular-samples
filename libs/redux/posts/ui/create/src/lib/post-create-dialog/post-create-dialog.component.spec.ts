import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade, PostFacadeStub } from '@angular-samples/redux/posts/facade';

import { PostCreateDialogComponent } from './post-create-dialog.component';
import { PostCreateDialogComponentPo } from './post-create-dialog.component.po';

jest.mock('@angular-samples/core/uuid', () => ({
  ...jest.requireActual('@angular-samples/core/uuid'),
  uuidv4: jest.fn().mockReturnValue('uuid'),
}));

describe('PostCreateDialogComponent', () => {
  let po: PostCreateDialogComponentPo;
  let fixture: ComponentFixture<PostCreateDialogComponent>;
  let postFacadeMock: PostFacade;
  let matDialogRef: MatDialogRef<PostCreateDialogComponentPo>;

  let createSuccess$: ReplaySubject<Post>;
  let createFailure$: ReplaySubject<unknown>;

  beforeEach(async () => {
    postFacadeMock = mock(PostFacadeStub);
    matDialogRef = mock(MatDialogRef<PostCreateDialogComponentPo>);

    createSuccess$ = new ReplaySubject<Post>(1);
    createFailure$ = new ReplaySubject<unknown>(1);

    when(postFacadeMock.createSuccess$).thenReturn(createSuccess$);
    when(postFacadeMock.createFailure$).thenReturn(createFailure$);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MockModule(MatDialogModule),
        MockModule(MatInputModule),
        MockModule(MatCheckboxModule),
        MockModule(MatFormFieldModule),
        MockModule(MatButtonModule),
      ],
      declarations: [PostCreateDialogComponent],
      providers: [providerOf(PostFacade, postFacadeMock), providerOf(MatDialogRef, matDialogRef)],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCreateDialogComponent);
    po = new PostCreateDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.cancel).toBeTruthy();
    expect(po.create).toBeTruthy();
  });
});
