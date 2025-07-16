import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutosService {
    constructor(@InjectRepository(Produto) private readonly produtoRepo: Repository<Produto>) { }

    async criar(produto: Partial<Produto>): Promise<Produto> {
        return this.produtoRepo.save(produto)
    }
    
    async buscarTodos(): Promise<Produto[]> {
        return this.produtoRepo.find()
    }

    async buscarPorId(id: number): Promise<Produto | null> {
        const resultado = await this.produtoRepo.findOneBy({ id });
        if (!resultado) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`)
        }
        return resultado
    }
}
