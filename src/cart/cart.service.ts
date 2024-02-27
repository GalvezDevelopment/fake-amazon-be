import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Product } from 'src/products/interfaces/product.interface/product.interface';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
    private _cart: Product[];
    
    constructor(private productSrv: ProductsService) {
        this._cart = [];
     }

    async addProduct(productId: string): Promise<void> { 
        const product = await this.productSrv.getById(productId);
        this._cart.push(product);
    }

    getUserCart(): Observable<Product[]> { 
        return of(this._cart);
    }

    removeProduct(productId: string): void {
        const newArr = this._cart.filter(p => p.id !== productId);
        this._cart = JSON.parse(JSON.stringify(newArr));
    }

    payCart(): void {
        this._cart = [];
    }
}
