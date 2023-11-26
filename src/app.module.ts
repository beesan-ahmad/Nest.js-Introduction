import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://abumfarrehb:9cSZK*f92R$useK@cluster0.e4ymxbb.mongodb.net/nestjs-demo?retryWrites=true&w=majority'

  ),
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
