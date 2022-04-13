import { ApiProperty } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class CreateCustomerDto {
  @ApiProperty({ description: 'customer name', example: 'John Doe' })
  readonly name: string;
  @ApiProperty({
    type: CreateContactDto,
  })
  readonly contact: CreateContactDto;
}
