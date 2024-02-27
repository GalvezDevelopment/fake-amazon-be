import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface/product.interface';
import { ProductsService } from './products.service';
import { PaginateProduct } from './dto/paginate-products.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsSrv: ProductsService) { }

    @Get()
    list(@Query() pagination: PaginateProduct): Observable<Product[]> {
        return this.productsSrv.getAll(pagination.start, pagination.end);
    }
}
