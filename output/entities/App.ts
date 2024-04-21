import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Organization } from "./Organization";
import { Plazeruser } from "./Plazeruser";

@Index("app_pkey", ["appid"], { unique: true })
@Entity("app", { schema: "public" })
export class App {
  @PrimaryGeneratedColumn({ type: "integer", name: "appid" })
  appid: number;

  @Column("character varying", {
    name: "apptitle",
    nullable: true,
    length: 100,
  })
  apptitle: string | null;

  @Column("character varying", {
    name: "repolink",
    nullable: true,
    length: 255,
  })
  repolink: string | null;

  @Column("character varying", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

 

  @ManyToMany(() => Plazeruser, (plazeruser) => plazeruser.apps)
  @JoinTable({
    name: "memapp",
    joinColumns: [{ name: "appid", referencedColumnName: "appid" }],
    inverseJoinColumns: [{ name: "memberid", referencedColumnName: "userid" }],
    schema: "public",
  })
  plazerusers: Plazeruser[];
}
