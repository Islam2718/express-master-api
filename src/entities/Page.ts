import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Page {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;
    @Column() application_id!: number;

    @Column() title!: string;
    @Column() sub_title!: string;
    @Column() slug!: string;
    @Column() content!: string; 
    @Column() meta_keyword!: string;
    @Column() meta_description!: string;
    @Column() thumb!: string;

    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
