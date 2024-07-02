import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {

  }

  init() {
    this.addSvgIcon('add-task-icon', 'icons/add-task-icon.svg');
    this.addSvgIcon('trash-icon', 'icons/trash-icon.svg');
    this.addSvgIcon('check-mark-icon', 'icons/check-mark-icon.svg');
  }

  addSvgIcon(name: string, path: string) {
    this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(path));
    return this;
  }
}
