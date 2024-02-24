import { Injectable } from '@nestjs/common';
import { Observable, lastValueFrom, map, of } from 'rxjs';
import PRODUCTS from '../../db/products.json';
import { Product } from './interfaces/product.interface/product.interface';


@Injectable()
export class ProductsService {
    getById(id: string): Promise<Product> {
        const product = PRODUCTS.find(p => p.id === id);
        return lastValueFrom(of(product as unknown as Product));
    }

    getAll(): Observable<Product[]> {
        return of(PRODUCTS).pipe(map(products => products.map(p => p as unknown as Product)));
    }
}
