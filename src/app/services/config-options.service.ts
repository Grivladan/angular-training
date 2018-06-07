import { Injectable } from '@angular/core';
import { ConfigOptions } from '../model/config-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  setConfigOptions(configOptions: ConfigOptions) {
    this.configOptions = configOptions;
  }

  getConfigOptions() {
    return this.configOptions;
  }
}
