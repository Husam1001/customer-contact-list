import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto {
  @ApiProperty({
    description: 'customer email address',
    example: 'abc@gmail.com',
  })
  readonly email?: string;
  @ApiProperty({
    description: 'customer phone number',
    example: '+91-1234567890',
  })
  readonly phone?: string;
  @ApiProperty({
    description: 'customer mobile number',
    example: '+91-1234567890',
  })
  readonly mobile?: string;
}
