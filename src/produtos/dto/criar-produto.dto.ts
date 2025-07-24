import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
    @IsString()
    nome: string;
    
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    preco: number;

    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    quantidade: number;

    @IsString()
    descricao: string;

    @IsOptional()
    @IsString()
    imagem?: string;
}