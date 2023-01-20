import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupDto } from './dto/signup.dto';
import { User } from './models/users.model';
import { SigninDto } from './dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from './models/role.enum';
import { Roles } from './roles.decorador';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.CREATED)
  public async signup(@Body() signupDto: SignupDto): Promise<User> {
    return this.usersService.signup(signupDto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  public async signin(@Body() signinDto: SigninDto): Promise<{
    name: string;
    registration: string;
    sexo: string;
    jwtToken: string;
    email: string;
  }> {
    return this.usersService.signin(signinDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
