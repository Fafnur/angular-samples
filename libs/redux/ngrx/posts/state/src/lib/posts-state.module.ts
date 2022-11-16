import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostApiModule } from '@angular-samples/redux/posts/api';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import { PostEffects } from './post.effects';
import { NgrxPostFacade } from './post.facade';
import { POST_FEATURE_KEY, postReducer } from './post.reducer';

/**
 * Ngrx feature store for posts entities.
 */
@NgModule({
  imports: [PostApiModule, StoreModule.forFeature(POST_FEATURE_KEY, postReducer), EffectsModule.forFeature([PostEffects])],
  providers: [
    // Provide NgrxPostFacade like as PostFacade.
    {
      provide: PostFacade,
      useClass: NgrxPostFacade,
    },
  ],
})
export class PostsStateModule {}
