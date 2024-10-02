import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';
import { Role } from '../users/dto/create-user.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: Role) {
    if (role) {
      this.databaseService.employee.findMany({ where: { role } });
    }
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
