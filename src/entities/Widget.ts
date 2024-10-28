import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Widget {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;
    @Column() application_id!: number;
    @Column() section_id!: number;

    @Column() title!: string;
    @Column() sub_title!: string;
    @Column() content!: string;
    @Column() thumb!: string;
    @Column() cover_photo!: string;
    @Column() background_image!: string;
    @Column() backgruound_color!: string;
    @Column() font_color!: string;

    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
