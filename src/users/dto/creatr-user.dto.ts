import { ApiProperty } from "@nestjs/swagger";



export class CreateUserDto {
  @ApiProperty({example: 'user@email.com', description: 'email address'})
  readonly email: string;
  @ApiProperty({example: '12345678', description: 'user password'})
  readonly password: string;
}