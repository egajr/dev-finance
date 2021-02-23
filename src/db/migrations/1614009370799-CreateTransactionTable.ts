import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactionTable1614009370799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.createTable(new Table({
            name: "transactions",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: false,
                },
                {
                    name: "value",
                    type: "decimal(10,2)",
                    isNullable: false
                },
                {
                    name: "date",
                    type: "date",
                    isNullable: false
                }
            ]
        }), true);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.dropTable("movies");
    }
}