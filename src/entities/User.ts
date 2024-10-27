import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ nullable: true })
    phone!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @Column({ default: true })
    status!: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;
}
