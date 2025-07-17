import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Produto } from "src/produtos/produto.entity"

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    entities: [Produto],
    autoLoadEntities: true,
    synchronize: true
}