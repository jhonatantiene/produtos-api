import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Produto } from "src/produtos/produto.entity"

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'produtos_db',
    entities: [Produto],
    synchronize: true
}