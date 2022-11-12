import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { PostApiModule } from '@angular-samples/redux/posts/api';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import { PostQuery } from '../post.query';
import { PostStore } from '../post.store';
import { PostEffects } from './post.effects';
import { AkitaNgrxPostFacade } from './post.facade';

/**
 * Post state with Akita and Ngrx Effects
 */
@NgModule({
  imports: [PostApiModule, EffectsModule.forFeature([PostEffects])],
  providers: [
    PostStore,
    PostQuery,
    {
      provide: PostFacade,
      useClass: AkitaNgrxPostFacade,
    },
  ],
})
export class PostsStateWithNgrxModule {}
