import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from 'src/products/interfaces/product.interface/product.interface';
import { CartService } from './cart.service';
import { AddProductCartDto } from './dto/add-product-cart.dto/add-product-cart.dto';

@Controller('cart')
export class CartController {

    constructor(private _cart: CartService) { }


    @Post()
    addProduct(@Body() { productId }: AddProductCartDto): void {
        this._cart.addProduct(productId);
    }

    @Get()
    getAll(): Observable<Product[]> {
        return this._cart.getUserCart();
    }
}
