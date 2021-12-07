import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: []
  })
  favorite_cards: [];
}
