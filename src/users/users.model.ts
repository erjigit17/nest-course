import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript" 
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'email address'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '12345678', description: 'User password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string; 

  @ApiProperty({example: 'true', description: 'Banned user or not'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Hate speech', description: 'Ban reason'})
  @Column({type: DataType.STRING,allowNull: true})
  banReaso: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

