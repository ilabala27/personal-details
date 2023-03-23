import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "src/enum/gender.role";



@Schema({timestamps: true})
export class PersonalDetails{

    // @Prop({required: true})
    // id: string

    @Prop({required: true})
    first_name: string;

    @Prop({required: true})
    last_name: string;

    @Prop({required: true, enum: Gender})
    gender: Gender;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    date_of_birth: string;

    @Prop({required:true})
    department: string;

    @Prop({required: true})
    designation: string;

    @Prop({required: true})
    address_line1 : string;

    @Prop({nullable: true})
    address_line2 : string;

    @Prop({required: true})
    city: string;

    @Prop({required: true})
    state: string;

    @Prop({required: true})
    country: string;

    @Prop({required: true})
    pincode: number;

  
}
export const PersonalDetailsSchema = SchemaFactory.createForClass(PersonalDetails)
