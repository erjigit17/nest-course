import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript" 

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'email address'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '12345678', description: 'user password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string; 

  @ApiProperty({example: 'true', description: 'banned user or not'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'hate speech', description: 'ban reason'})
  @Column({type: DataType.STRING,allowNull: true})
  banReaso: string;
}

