import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './Dto/Create.Emp.dto';
import { UpdateEmployeeDto } from './Dto/Update.emp';
import { IEmployee } from './Interface/Employee.inteface';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('PersonalDetails')private  employeeModel: Model<IEmployee>){}
  
  async create(createEmployeeDto: CreateEmployeeDto): Promise<IEmployee>{
    const newEmployee =  await new this.employeeModel(createEmployeeDto);
    return newEmployee.save();
  }

  async Update( id: string,updateEmployeeDto:UpdateEmployeeDto): Promise<IEmployee>{
    const existingEmployee = await  this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, {new: true});
    if(!existingEmployee){
      throw new NotFoundException("Employee not found!!");
    }
    return existingEmployee;
  }

  async findAll(): Promise<IEmployee[]>{
    const employeeData = await this.employeeModel.find();
    if(!employeeData){
      throw new NotFoundException("Employee data not found!!!");
    }
    return employeeData;
  }

  async getById(id: string): Promise<IEmployee>{
    const existingEmployee = await this.employeeModel.findById(id).exec();
    if(!existingEmployee){
      throw new NotFoundException("Employee  Id not found!!");
    }
    return existingEmployee;
  }

  async delete(id: string): Promise<IEmployee> {
    const deletedEmp = await this.employeeModel.findByIdAndDelete(id);
   if (!deletedEmp) {
     throw new NotFoundException(`Student #${id} not found`);
   }
   return deletedEmp;
}
}


