import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';


@ApiTags('users')
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
    // @UseGuards(JwtAuthGuard)
    @Roles("USER")
    @UseGuards(RolesGuard)
    @Get()
    async getAll() {
        return this.usersService.getAllUsers();
    }
}
