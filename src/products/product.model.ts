import * as mongoose from 'mongoose';
//create a schema as a blueprint to the model
export const productShema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});
export class Product {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number) { }
}