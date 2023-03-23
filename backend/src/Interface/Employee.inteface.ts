import { Document } from "mongoose";
import { Gender } from "src/enum/gender.role";

export class IEmployee extends Document{
    // readonly id: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly gender: Gender;
    readonly email: string;
    readonly date_of_birth: string;
    readonly department: string;
    readonly designation: string;
    readonly address_line1 : string;
    readonly address_line2 : string;
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly pincode: number;


}