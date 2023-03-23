import {PartialType} from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './Create.Emp.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto){}