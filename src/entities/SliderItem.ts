import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class SliderItem {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;
    @Column() application_id!: number;
    @Column() slider_id!: number;

    @Column() title!: string;
    @Column() sub_title!: string;
    @Column() content!: string;
    @Column() link_url!: string;  
    @Column() thumb!: string;
    @Column({ type: 'boolean', default: true }) target_blank!: boolean;

    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}