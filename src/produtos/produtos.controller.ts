import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { CreateProdutoDto } from './dto/criar-produto.dto';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Post('cadastrar')
    criar(@Body() produto: CreateProdutoDto): Promise<Produto> {
        return this.produtosService.criar(produto)
    }

    @Get()
    buscarTodos(): Promise<Produto[]> {
        return this.produtosService.buscarTodos()
    }

}
