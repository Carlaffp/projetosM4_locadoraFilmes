import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movie")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column()
  duration: number;

  @Column()
  price: number;
}

export default Movie;
