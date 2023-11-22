import { Injectable } from "@nestjs/common";
import { Product } from "./product.module";
@Injectable()
export class ProductsService {

  private  products: Product[] = [];
    insertProduct(title: string, description: string, price: number) {
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts(){
        return [...this.products];//make a copy of the array by spread operator or I can use .slice()
    }
}