import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  Relation
  
} from "typeorm";
import { Contact } from "./Contact";
import { App } from "./App";
import { Organization } from "./Organization";
import { RequestLeave } from "./RequestLeave";

@Index("plazeruser_email_key", ["email"], { unique: true })
@Index("plazeruser_pkey", ["userid"], { unique: true })
@Index("plazeruser_username_key", ["username"], { unique: true })
@Entity("plazeruser", { schema: "public" })
export class Plazeruser {
  @PrimaryGeneratedColumn({ type: "integer", name: "userid" })
  userid: number;

  @Column("character varying", {
    name: "username",
    nullable: true,
    unique: true,
    length: 50,
  })
  username: string | null;

  @Column("character varying", { name: "upassword", length: 50 })
  upassword: string;

  @Column("character varying", { name: "ufname", nullable: true, length: 50 })
  ufname: string | null;

  @Column("character varying", { name: "ulname", nullable: true, length: 50 })
  ulname: string | null;

  @Column("character varying", {
    name: "addressl1",
    nullable: true,
    length: 100,
  })
  addressl1: string | null;

  @Column("character varying", {
    name: "addressl2",
    nullable: true,
    length: 100,
  })
  addressl2: string | null;

  @Column("character varying", {
    name: "addressl3",
    nullable: true,
    length: 100,
  })
  addressl3: string | null;

  @Column("character varying", {
    name: "email",
    nullable: true,
    unique: true,
    length: 100,
  })
  email: string | null;

  @Column("character varying", { name: "skills", nullable: true, length: 255 })
  skills: string | null;

  @Column("date", { name: "dob", nullable: true })
  dob: string | null;

  @Column("character varying", { name: "gitrepo", nullable: true, length: 255 })
  gitrepo: string | null;

  @Column("character varying", { name: "role", nullable: true, length: 50 })
  role: string | null;

  @Column("integer", { name: "total_leaves", nullable: true })
  totalLeaves: number | null;

  @Column("integer", { name: "available_leaves", nullable: true })
  availableLeaves: number | null;

  @OneToMany(() => Contact, (contact) => contact.plazeruser)
  contacts: Contact[];

  @ManyToMany(() => App, (app) => app.plazerusers)
  apps: App[];



  @OneToMany(() => RequestLeave, (requestLeave) => requestLeave.plazeruser)
  requestLeave:Relation< RequestLeave[]>;

  @ManyToMany(() => Organization)
  @JoinTable()
  organizations: Organization[];
}
