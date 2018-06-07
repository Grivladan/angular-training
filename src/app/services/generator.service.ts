import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private static charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  constructor(private length: number) { }

  generateString(): string {
    let text = '';
    for (let i = 0; i < this.length; i++) {
      text += GeneratorService.charSet.charAt(Math.floor(Math.random() *
                                                 GeneratorService.charSet.length));
    }

    return text;
  }
}
