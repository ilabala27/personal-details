import {IsString, IsNotEmpty, IsNumber, MaxLength, IsEmail, IsEnum} from 'class-validator'
import { Gender } from 'src/enum/gender.role';

export class CreateEmployeeDto{
    // @IsString()
    // id: string;
    @IsString()
    first_name: string;
    @IsString()
    last_name: string;
    @IsEnum(Gender)
    gender: Gender;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    date_of_birth: string;
    @IsString()
    department: string;
    @IsString()
    designation: string;
    @IsString()
    address_line1 : string;
    @IsString()
    address_line2 : string;
    @IsString()
    city: string;
    @IsString()
    state: string;
    @IsString()
    country: string;
    @IsNumber()
    pincode: number;

}