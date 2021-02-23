import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column("decimal", { precision: 10, scale: 2 })
    value: number;
    @Column()
    date: Date;
}