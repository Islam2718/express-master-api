import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn() id!: number;

    @Column() name!: string;
    @Column({ unique: true }) email!: string;
    @Column({ nullable: true }) phone!: string;
    @Column() password!: string;
    @Column() role!: string;

    @Column() phone_number!: string;
    @Column() address!: string;
    @Column() city!: string;
    @Column() state!: string;
    @Column() country!: string;
    @Column() postal_code!: string;

    @Column() facebook_id!: string;
    @Column() google_id!: string;
    @Column() github_id!: string;
    @Column() twitter_id!: string;
    @Column() linkedin_id!: string; 
    
    @Column({ default: true }) status!: boolean;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
}
