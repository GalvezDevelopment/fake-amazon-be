import { Controller, Get, StreamableFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsSrv: ProductsService) {}

    @Get()
    list(): Observable<Product[]> {
        return this.productsSrv.getAll();
    }
}
