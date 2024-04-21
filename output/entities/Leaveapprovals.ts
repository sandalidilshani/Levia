import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RequestLeave } from "./RequestLeave"; // Import RequestLeave directly

@Index("leaveapprovals_pkey", ["approvalId"], { unique: true })
@Entity("leaveapprovals", { schema: "public" })
export class Leaveapprovals {
  @PrimaryGeneratedColumn({ type: "integer", name: "approval_id" })
  approvalId: number;

  @Column("integer", { name: "manager_id", nullable: true })
  managerId: number | null;

  @Column("character varying", {
    name: "approval_status",
    nullable: true,
    length: 20,
  })
  approvalStatus: string | null;

  @Column("timestamp without time zone", {
    name: "date_approved",
    nullable: true,
  })
  dateApproved: Date | null;

  @OneToOne(() => RequestLeave) 
  @JoinColumn()
  request: RequestLeave;
}
