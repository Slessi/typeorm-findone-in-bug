import { Column, createConnection, Entity, In, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class MyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public myField!: number;
}

createConnection({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "123",
    database: "typeorm-test",
    synchronize: true,
    logging: ["error"],
    entities: [MyEntity],
}).then(c =>
    c.getRepository(MyEntity).findOne(1, {
        where: {
            myField: In([2, 3]),
        },
    }),
);
