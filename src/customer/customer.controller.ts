import { Body, Controller, HttpCode } from '@nestjs/common';
import{Get,Param,Query} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
constructor(private readonly customerService: CustomerService) {}
    // @Get()
    // getAll(@Query()  paginationQuery): any {
    //     const { page, limit } = paginationQuery;
    //     return this.customerService.findAll(page, limit);
    //    return {'msesage': 'Hello World', 'status': 200, 'data': ['page', page, 'limit', limit]};
    //     // return {'msesage': 'Hello World', 'status': 200, 'data': []};
    // }
//@HttpCode(500)
    @Get('all')
    getAllCustomers(): any {
        return this.customerService.findAll();
    }

    @Get('create')
    create(@Body() createCustomerDto: any): any {
        return this.customerService.create(createCustomerDto);
    }

    @Get('/:id')
    getOne(@Param('id') id: string): any {
        return this.customerService.findOne(id);
    }

    @Get('update/:id')
    update(@Param('id') id: string, @Body() UpdateCustomerDto: UpdateCustomerDto): any {
        return this.customerService.update(id, UpdateCustomerDto);
    }

    @Get('remove/:id')
    remove(@Param('id') id: string): any {
        return this.customerService.remove(id);
    }

}
