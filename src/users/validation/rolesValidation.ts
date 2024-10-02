import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RoleValidationPipe implements PipeTransform {
  readonly allowedRoles = ['INTERN', 'ENGINEER', 'ADMIN'];

  transform(value: any) {
    if (!value) {
      return value; // Optional, return if it's undefined.
    }
    value = value.toUpperCase();
    if (this.allowedRoles.indexOf(value) === -1) {
      throw new BadRequestException(`${value} is not a valid role`);
    }
    return value;
  }
}
