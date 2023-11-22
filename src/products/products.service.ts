import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";
@Injectable()
export class ProductsService {

    private products: Product[] = [];
    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];//make a copy of the array by spread operator or I can use .slice()
    }
    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => prod.id === productId);
        if (!product) {
            throw new NotFoundException('product not found');
        }
        return { ...product };
    }
}