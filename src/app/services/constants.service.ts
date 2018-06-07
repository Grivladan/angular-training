import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  getConst() {
    return AppInfo;
  }
}

export const AppInfo = {
  application: 'TaskManager',
  version: '1.0'
};
