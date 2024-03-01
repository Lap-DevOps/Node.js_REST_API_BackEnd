import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @ApiOperation({ summary: 'Create user' })
    @ApiOkResponse({ status: 201, type: User })
    @Post()
    async create(@Body() userdto: CreateUserDto) {

        return this.usersService.createUser(userdto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiOkResponse({ status: 200, type: [User] })
    @Get()
    async getAll() {
        return this.usersService.getAllUsers();
    }
}
