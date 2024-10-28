import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class SocialLink {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;
    @Column() application_id!: number;

    @Column() title!: string;
    @Column() icon!: string;
    @Column() thumb!: string;
    @Column() linkUrl!: string;

    @Column({ type: 'boolean', default: true }) target!: string;    
    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
