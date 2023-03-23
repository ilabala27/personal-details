import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './app.controller';
import { EmployeeService } from './app.service';
import { PersonalDetailsSchema } from './schema/emp.schema';



@Module({
  imports: [(MongooseModule.forRoot('mongodb://127.0.0.1/sample')),
  MongooseModule.forFeature([{name: 'PersonalDetails', schema: PersonalDetailsSchema}]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class AppModule {}
//link close
