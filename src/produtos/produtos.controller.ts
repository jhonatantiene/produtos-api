import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get(':id')
    async buscarPorId(@Param('id') id: string): Promise<Produto | null> {
        return this.produtosService.buscarPorId(Number(id))
    }

    @Get()
    buscarTodos(): Promise<Produto[]> {
        return this.produtosService.buscarTodos()
    }

}
