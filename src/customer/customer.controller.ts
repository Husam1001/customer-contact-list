import { Body, Controller, Delete, HttpCode, Patch, Put } from '@nestjs/common';
import { Get, Param, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiResponse({
    status: 200,
    description: 'List of customers',
    type: CreateCustomerDto,
    isArray: true,
  })
  @Get('all')
  getAllCustomers(): any {
    return this.customerService.findAll();
  }

  @ApiBody({
    description: 'Customer Info required to create a new customer',
    type: CreateCustomerDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: CreateCustomerDto,
  })
  @Put('create')
  create(@Body() createCustomerDto: CreateCustomerDto): any {
    return this.customerService.create(createCustomerDto);
  }

  //   @ApiParam({
  //     name: 'Customer ID',
  //     type: 'string',
  //   })
  @ApiResponse({
    status: 200,
    description: 'The record founded',
    type: CreateCustomerDto,
  })
  @ApiNotFoundResponse({ status: 404, description: 'Customer not found.' })
  @Get('/:id')
  getOne(@Param('id') id: string): any {
    return this.customerService.findOne(id);
  }
  //   @ApiParam({
  //     name: 'Customer ID',
  //     type: 'string',
  //   })
  @ApiBody({
    description: 'Customer Info required to update a customer',
    type: UpdateCustomerDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully Updated.',
    type: CreateCustomerDto,
  })
  @ApiNotFoundResponse({ status: 404, description: 'Customer not found.' })
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateCustomerDto: UpdateCustomerDto,
  ): any {
    return this.customerService.update(id, UpdateCustomerDto);
  }

  //   @ApiParam({
  //     name: 'Customer ID',
  //     type: 'string',
  //   })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateCustomerDto,
  })
  @ApiNotFoundResponse({ status: 404, description: 'Customer not found.' })
  @Delete('remove/:id')
  remove(@Param('id') id: string): any {
    return this.customerService.remove(id);
  }
}
