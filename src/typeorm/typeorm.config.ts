import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'locahost',
    port: 3396,
    username: 'root',
    password: '1234',
    database: 'MYSQL80',
    entities: [],
    synchronize: true
}