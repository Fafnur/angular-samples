import { NgModule } from '@angular/core';

import { PostApiService } from './post-api.service';

/**
 * Module for provide post API service
 */
@NgModule({
  providers: [PostApiService],
})
export class PostApiModule {}
