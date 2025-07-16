import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column('decimal')
    preco: number

    @Column()
    quantidade: number

    @Column()
    descricao: string

    @Column({ nullable: true })
    imagem?: string;
}