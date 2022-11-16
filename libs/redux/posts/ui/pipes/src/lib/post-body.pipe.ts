import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from '@angular-samples/redux/posts/common';

/**
 * Pipe for transform \n to <br>
 */
@Pipe({
  name: 'postBody',
})
export class PostBodyPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(post: Post, sanitizeBeforehand?: boolean): string {
    let result: string | null;
    const textParsed = post.body.replace(/(?:\r\n|\r|\n)/g, '<br>');

    if (sanitizeBeforehand) {
      result = this.sanitizer.sanitize(SecurityContext.HTML, textParsed);
    } else {
      result = textParsed;
    }

    return result ?? '';
  }
}
