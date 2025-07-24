import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { CreateProdutoDto } from './dto/criar-produto.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Post('cadastrar')
    @UseInterceptors(FilesInterceptor('imagem'))
    criar(@UploadedFiles() imagem: Array<Express.Multer.File>, @Body() produto: CreateProdutoDto): Promise<Produto> {
        console.log(imagem)
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
