import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Organization } from "./Organization";
import { Plazeruser } from "./Plazeruser";

@Index("contact_pkey", ["contactid"], { unique: true })
@Entity("contact", { schema: "public" })
export class Contact {
  @PrimaryGeneratedColumn({ type: "integer", name: "contactid" })
  contactid: number;

  @Column("character varying", {
    name: "contactno",
    nullable: true,
    length: 20,
  })
  contactno: string | null;

  @ManyToOne(() => Organization, (organization) => organization.contacts)
  org: Organization;

  @ManyToOne(() => Plazeruser, (plazeruser) => plazeruser.contacts)
  plazeruser: Promise<Plazeruser>
}
