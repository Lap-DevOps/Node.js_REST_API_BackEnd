import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';


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
    @Roles("USER")
    @UseGuards(RolesGuard)
    @Get()
    async getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ summary: 'Add user role' })
    @ApiOkResponse({ status: 200, type: User })
    @Roles("USER")
    @UseGuards(RolesGuard)
    @Post("/role")
    async addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({ summary: 'Ban user' })
    @ApiOkResponse({ status: 200, type: User })
    @Roles("USER")
    @UseGuards(RolesGuard)
    @Post("/ban")
    async ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }



}
