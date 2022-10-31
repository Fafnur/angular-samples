import { NgModule } from '@angular/core';
import { EffectsNgModule } from '@ngneat/effects-ng';

import { PostApiModule } from '@angular-samples/redux/posts/api';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import { PostEffects } from './post.effects';
import { AkitaPostFacade } from './post.facade';
import { PostQuery } from './post.query';
import { PostStore } from './post.store';

@NgModule({
  imports: [PostApiModule, EffectsNgModule.forFeature([PostEffects])],
  providers: [
    PostStore,
    PostQuery,
    {
      provide: PostFacade,
      useClass: AkitaPostFacade,
    },
  ],
})
export class PostsStateModule {
  // TODO: Dirty fix for emulate OnInitEffects
  constructor(postFacade: PostFacade) {
    postFacade.load();
  }
}
