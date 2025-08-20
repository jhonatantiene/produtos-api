import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Produto } from "src/produtos/produto.entity"

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'tramway.proxy.rlwy.net',
    port: 14613,
    username: 'root',
    password: 'uaQWeWQaHEmpgTudaGbZQKiFLZCxBHpc',
    database: 'railway',
    entities: [Produto],
    autoLoadEntities: true,
    synchronize: true
}