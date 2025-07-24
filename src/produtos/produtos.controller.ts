import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { CreateProdutoDto } from './dto/criar-produto.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Post('cadastrar')
    @UseInterceptors(FileInterceptor('imagem', {
        storage: diskStorage({
            destination: './imagem', // pasta onde vai salvar
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                cb(null, filename);
            }
        }),
    }))
    criar(@UploadedFile() imagem: Express.Multer.File, @Body() produto: CreateProdutoDto): Promise<Produto> {
        produto.imagem = imagem.filename
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
