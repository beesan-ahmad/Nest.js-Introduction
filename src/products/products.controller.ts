import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('products')//filter with requests that start with /products

export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number
    ) {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);
        return { id: generatedId };
    }
    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }
    @Get(':id')
    GetProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }
}