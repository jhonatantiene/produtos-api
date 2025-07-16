import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosService],
  controllers: [ProdutosController]
})
export class ProdutosModule {}
