import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, ɵDomSanitizerImpl } from '@angular/platform-browser';
import { instance, mock, verify, when } from 'ts-mockito';

import { IconMaterialService } from './icon-material.service';

describe('IconService', () => {
  let service: IconMaterialService;
  let domSanitizerMock: DomSanitizer;
  let matIconRegistryMock: MatIconRegistry;

  const NAME_STUB = 'icon';
  const SOURCE_STUB = '<svg></svg>';
  const PATH_STUB = '/path/to/icon.svg';

  beforeAll(() => {
    matIconRegistryMock = mock(MatIconRegistry);
    domSanitizerMock = mock(ɵDomSanitizerImpl);

    service = new IconMaterialService(instance(matIconRegistryMock), instance(domSanitizerMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call methods addSvgIconLiteral bypassSecurityTrustHtml', () => {
    when(domSanitizerMock.bypassSecurityTrustHtml(SOURCE_STUB)).thenReturn(SOURCE_STUB);

    service.add(NAME_STUB, SOURCE_STUB);

    verify(domSanitizerMock.bypassSecurityTrustHtml(SOURCE_STUB)).once();
    verify(matIconRegistryMock.addSvgIconLiteral(NAME_STUB, SOURCE_STUB)).once();
  });

  it('should call methods addSvgIcon and bypassSecurityTrustResourceUrl', () => {
    when(domSanitizerMock.bypassSecurityTrustResourceUrl(PATH_STUB)).thenReturn(PATH_STUB);

    service.addPath(NAME_STUB, PATH_STUB);

    verify(domSanitizerMock.bypassSecurityTrustResourceUrl(PATH_STUB)).once();
    verify(matIconRegistryMock.addSvgIcon(NAME_STUB, PATH_STUB)).once();
  });
});
