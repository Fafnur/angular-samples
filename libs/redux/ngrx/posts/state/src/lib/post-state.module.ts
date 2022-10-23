import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostEffects } from './post.effects';
import { PostFacade } from './post.facade';
import { POST_FEATURE_KEY, postReducer } from './post.reducer';

@NgModule({
  imports: [StoreModule.forFeature(POST_FEATURE_KEY, postReducer), EffectsModule.forFeature([PostEffects])],
  providers: [PostFacade],
})
export class PostStateModule {}
