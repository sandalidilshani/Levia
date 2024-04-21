import { Column, Entity, Index } from "typeorm";

@Index("plazeradmin_pkey", ["pusername"], { unique: true })
@Entity("plazeradmin", { schema: "public" })
export class Plazeradmin {
  @Column("character varying", { primary: true, name: "pusername", length: 50 })
  pusername: string;

  @Column("character varying", { name: "ppassword", length: 50 })
  ppassword: string;
}
