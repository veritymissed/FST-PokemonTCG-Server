import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: []
  })
  favorite_cards: [];

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
    default: UserRole.USER
  })
  role: string;
}
