import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { GridMode } from './grid.util';

export const LAYOUT_SHORT_TYPES_MAP = {
  [Breakpoints.Handset]: Breakpoints.Handset,
  [Breakpoints.HandsetPortrait]: Breakpoints.HandsetPortrait,
  [Breakpoints.HandsetLandscape]: Breakpoints.HandsetLandscape,
  [Breakpoints.Tablet]: Breakpoints.Tablet,
  [Breakpoints.TabletPortrait]: Breakpoints.TabletPortrait,
  [Breakpoints.TabletLandscape]: Breakpoints.TabletLandscape,
  [Breakpoints.Web]: Breakpoints.Web,
  [Breakpoints.WebPortrait]: Breakpoints.WebPortrait,
  [Breakpoints.WebLandscape]: Breakpoints.WebLandscape,
  [GridMode.Handset]: Breakpoints.Handset,
  [GridMode.Tablet]: Breakpoints.Tablet,
  [GridMode.Web]: Breakpoints.Web,
};

@Injectable({
  providedIn: 'root',
})
export class GridService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  up(types: string | string[]): Observable<boolean> {
    const observeTypes = Array.isArray(types) ? types.map((type) => LAYOUT_SHORT_TYPES_MAP[type]) : LAYOUT_SHORT_TYPES_MAP[types];

    return this.breakpointObserver.observe(observeTypes).pipe(map((breakpoints) => breakpoints.matches));
  }
}
