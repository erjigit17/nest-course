import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript" 
import { User } from "src/users/users.model";
import { UserRoles } from "src/roles/user-roles.model"

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'The unique value of the user role'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'Administrator', description: 'Role description'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string; 

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

