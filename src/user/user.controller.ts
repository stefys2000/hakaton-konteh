import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  LoginUserDto,
  RegisterUserDto,
  UserChangePassDto,
} from './dto/user.dto';
import { AuthLoginDto } from './dto/auth-login-dto';
import { GetUser } from './get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto): Promise<AuthLoginDto> {
    return this.userService.login(loginUserDto);
  }

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto): Promise<void> {
    return this.userService.register(registerUserDto);
  }

  @Patch('/changePass')
  // @UseGuards(AuthGuard())
  changePassword(
    @Body() userChangePassDto: UserChangePassDto,
    @GetUser() user: User,
  ): Promise<void> {
    return this.userService.changePassword(userChangePassDto, user);
  }
}
