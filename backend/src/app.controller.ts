import { Body, Controller, Post, Res, HttpStatus, Param, Put, Get, Delete,Response} from '@nestjs/common';
import { response } from 'express';
import { EmployeeService } from './app.service';
import { CreateEmployeeDto } from './Dto/Create.Emp.dto';
import { UpdateEmployeeDto } from './Dto/Update.emp';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Res() response, @Body() createEmployeeDto: CreateEmployeeDto) {
    try {
      const newEmployee = await this.employeeService.create(createEmployeeDto);
      return response.status(HttpStatus.CREATED).json({
      message: 'Employee has been created successfully',
      newEmployee,});
   } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: 400,
      message: 'Error: employee not created!',
      error: 'Bad Request'
   });
   }
  }
  @Put('/:id')
async updateEmp(@Res() response,@Param('id') id: string,
@Body() updateEmployeeDto: UpdateEmployeeDto) {
  try {
   const existingEmployee = await this.employeeService.Update(id, updateEmployeeDto);
  return response.status(HttpStatus.OK).json({
  message: 'Employee has been successfully updated',
  existingEmployee,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getEmployeeAll(@Res() response) {
try {
  const EmployeeData = await this.employeeService.findAll();
  return response.status(HttpStatus.OK).json({
  message: 'All Employee data found successfully',EmployeeData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}

@Get('/:id')
async getEmployee(@Res() response, @Param('id') id: string) {
 try {
    const existingEmployee= await
this.employeeService.getById(id);
    return response.status(HttpStatus.OK).json({
    message: 'Employee found successfully',existingEmployee,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Delete('/:id')
async deleteEmployee(@Res() response, @Param('id') id: string){
  try {
    const existingEmployee = await this.employeeService.delete(id);
    return response.status(HttpStatus.OK).json({
      message: 'Employee data deleted successfully', existingEmployee
    })
  } catch (error) {
    return response.status(error.status).json(error.response);
  }
}



}
