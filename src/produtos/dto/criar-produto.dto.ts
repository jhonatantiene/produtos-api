import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
    @IsString()
    nome: string;

    @IsNumber()
    preco: number;

    @IsNumber()
    quantidade: number;

    @IsString()
    descricao: string;

    @IsOptional()
    @IsString()
    imagem?: string;
}