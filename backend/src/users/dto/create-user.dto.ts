import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'qEJ6s@example.com', description: 'User email'})
    @IsString({message: 'Email must be a string'})
    @IsEmail({}, {message: 'Incorrect email'})x
    readonly email: string;

    @ApiProperty({example: '12345', description: 'User password'})
    @IsString({message: 'Password must be a string'})
    @Length(4, 16, {message: 'Password must be between 4 and 16 characters'})
    readonly password: string;
}