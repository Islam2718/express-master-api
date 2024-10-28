import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Application {
    @PrimaryGeneratedColumn() id!: number;

    @Column() user_id!: number;

    @Column() name!: string;
    @Column({ unique: true }) email!: string;
    @Column({ nullable: true }) phone!: string;    
    @Column() description!: string;
    @Column() logo!: string;
    @Column() website!: string;
    @Column() address!: string;
    @Column() city!: string;
    @Column() state!: string;
    @Column() country!: string;
    @Column() postal_code!: string;

    @Column() facebook_id!: string;
    @Column() google_id!: string;
    @Column() instagram_id!: string;
    @Column() twitter_id!: string;
    @Column() linkedin_id!: string;

    @Column() type!: string;
    @Column() marchant_id!: number;
    @Column({ default: true }) status!: boolean;

    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
