import { ApiProperty } from '@nestjs/swagger';
import { UpdateContactDto } from './update-contact.dto';
export class UpdateCustomerDto {
  @ApiProperty({ description: 'customer name', example: 'John Doe' })
  readonly name?: string;
  @ApiProperty({
    type: UpdateContactDto,
  })
  readonly contact?: UpdateContactDto;
}
