import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Slider {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;
    @Column() application_id!: number;

    @Column() name!: string;
    @Column() location_code!: string;

    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
