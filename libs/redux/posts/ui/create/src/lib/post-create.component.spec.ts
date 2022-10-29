import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';

import { PostCreateComponent } from './post-create.component';
import { PostCreateComponentPo } from './post-create.component.po';
import { PostCreateDialogComponent } from './post-create-dialog/post-create-dialog.component';
import { PostCreateDialogModule } from './post-create-dialog/post-create-dialog.module';

describe('PostCreateComponent', () => {
  let po: PostCreateComponentPo;
  let fixture: ComponentFixture<PostCreateComponent>;
  let matDialogMock: MatDialog;

  beforeEach(async () => {
    matDialogMock = mock(MatDialog);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
        MockModule(MatDialogModule),
        MockModule(PostCreateDialogModule),
      ],
      declarations: [PostCreateComponent],
      providers: [providerOf(MatDialog, matDialogMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCreateComponent);
    po = new PostCreateComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.create).toBeTruthy();
  });

  it('should show form', () => {
    fixture.detectChanges();

    po.click();

    verify(matDialogMock.open(PostCreateDialogComponent, deepEqual({ disableClose: true, width: '600px' }))).once();
  });
});
