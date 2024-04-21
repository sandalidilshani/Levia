import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { App } from "./App";
import { Contact } from "./Contact";
import { Plazeruser } from "./Plazeruser";

@Index("organization_orgemail_key", ["orgemail"], { unique: true })
@Index("organization_pkey", ["orgid"], { unique: true })
@Entity("organization", { schema: "public" })
export class Organization {
  @PrimaryGeneratedColumn({ type: "integer", name: "orgid" })
  orgid: number;

  @Column("character varying", { name: "orgname", nullable: true, length: 100 })
  orgname: string | null;

  @Column("character varying", {
    name: "orgaddressl1",
    nullable: true,
    length: 100,
  })
  orgaddressl1: string | null;

  @Column("character varying", {
    name: "orgaddressl2",
    nullable: true,
    length: 100,
  })
  orgaddressl2: string | null;

  @Column("character varying", {
    name: "orgaddressl3",
    nullable: true,
    length: 100,
  })
  orgaddressl3: string | null;

  @Column("character varying", {
    name: "orgemail",
    nullable: true,
    unique: true,
    length: 100,
  })
  orgemail: string | null;



  @OneToMany(() => Contact, (contact) => contact.org)
  contacts: Contact[];


 
}
