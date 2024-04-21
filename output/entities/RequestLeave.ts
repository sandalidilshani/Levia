import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation
} from "typeorm";
import { Leaveapprovals } from "./Leaveapprovals";
import { Plazeruser } from "./Plazeruser";

@Index("request_leave_pkey", ["leaveid"], { unique: true })
@Entity("request_leave", { schema: "public" })
export class RequestLeave {
  @PrimaryGeneratedColumn({ type: "integer", name: "leaveid" })
  leaveid: number;

  @Column("character varying", {
    name: "leavereason",
    nullable: true,
    length: 255,
  })
  leavereason: string | null;

  @Column("timestamp without time zone", { name: "leavestart", nullable: true })
  leavestart: Date | null;

  @Column("timestamp without time zone", { name: "leaveend", nullable: true })
  leaveend: Date | null;

  @Column("character varying", {
    name: "leavestatus",
    nullable: true,
    length: 50,
  })
  leavestatus: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 255,
  })
  comments: string | null;

 

  @ManyToOne(() => Plazeruser, (plazeruser) => plazeruser.requestLeave)
  @JoinColumn()
  plazeruser: Relation <Plazeruser>;
}
