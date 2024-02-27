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

    getAll(start: number = 0, pagination: number = 20): Observable<Product[]> {
        return of(PRODUCTS.slice(0, pagination)).pipe(map(products => products.map(p => p as unknown as Product)));
    }
}
