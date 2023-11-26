import * as mongoose from 'mongoose';
//create a schema as a blueprint to the model
export const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});
export interface Product {

         id: string;
         title: string;
         description: string;
         price: number; 
}