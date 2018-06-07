import { Component, ViewChild } from '@angular/core';
import { Product } from './product/model/product';
import { CartListComponent } from './cart-list/cart-list.component';
import { Optional } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptions } from './model/config-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentTime: string;

  constructor(@Optional() constantsService: ConstantsService,
              @Optional() configService: ConfigOptionsService,
              private localStorageService: LocalStorageService) {

    if (!!configService) {
      configService.setConfigOptions(new ConfigOptions(1, 'admin', 'admin@admin.com'));
    } else {
      console.log('ConfigService not initialized');
    }

    if (!!constantsService) {
      console.log(constantsService.getConst());
    }
  }

  @ViewChild(CartListComponent) cart: CartListComponent;
  onBuy($event: Product) {
    console.log('Product was added');
    this.cart.addProductToCart($event);
  }
}
