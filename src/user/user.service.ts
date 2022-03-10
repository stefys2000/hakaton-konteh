import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import {
  LoginUserDto,
  RegisterUserDto,
  UserChangePassDto,
  UserUpdateDto,
} from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login-dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find({
        select: [
          'user_username',
          'user_first_name',
          'user_last_name',
          'user_id',
        ],
        order: { user_id: 'ASC' },
      });
    } catch (error) {
      throw new UnauthorizedException('Unauthorized request');
    }
  }

  async findUserById(user_id: string): Promise<User> {
    const found = await this.userRepository.findOne(user_id);
    if (!found) {
      throw new NotFoundException(`User with ID ${user_id} was not found`);
    }
    return found;
  }

  async register(registerUserDto: RegisterUserDto): Promise<void> {
    const { user_username, user_password, user_first_name, user_last_name } =
      registerUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user_password, salt);
    try {
      const user = this.userRepository.create({
        user_username,
        user_password: hashedPassword,
        user_first_name,
        user_last_name,
      });
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        //duplicate username error code
        throw new ConflictException('Username already exists');
      } else {
        throw new ConflictException(error.code);
      }
    }
  }

  async login(authCredentialsLoginDto: LoginUserDto): Promise<AuthLoginDto> {
    const { user_username, user_password } = authCredentialsLoginDto;
    const user = await this.userRepository.findOne({ user_username });
    if (user && (await bcrypt.compare(user_password, user.user_password))) {
      const payload: JwtPayload = { user_username };
      const accessToken: string = this.jwtService.sign(payload);
      const authLoginDto = new AuthLoginDto();
      authLoginDto.user_first_name = user.user_first_name;
      authLoginDto.user_last_name = user.user_last_name;
      authLoginDto.accessToken = accessToken;
      return authLoginDto;
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  async changePassword(
    userChangePassDto: UserChangePassDto,
    user: User,
  ): Promise<void> {
    const { user_password } = userChangePassDto;
    const salt = await bcrypt.genSalt();
    user.user_password = await bcrypt.hash(user_password, salt);
    await this.userRepository.save(user);
  }

  async updateUser(userUpdateDto: UserUpdateDto, user: User): Promise<void> {
    const { user_username, user_password, user_first_name, user_last_name } =
      userUpdateDto;
    const user_find = await this.userRepository.findOne({
      where: { user_id: user.user_id },
    });
    if (user_find) {
      if (user_password) {
        const salt = await bcrypt.genSalt();
        user_find.user_password = await bcrypt.hash(user_password, salt);
      }
      if (user_username) {
        const foundUsername = await this.userRepository.findOne({
          where: { user_username },
        });
        if (foundUsername) {
          throw new BadRequestException(
            `Korisnik sa korisničkim imenom ${user_username} već postoji`,
          );
        }
        user_find.user_username = user_username;
      }
      if (user_first_name) user_find.user_first_name = user_first_name;
      if (user_last_name) user_find.user_last_name = user_last_name;
      try {
        await this.userRepository.save(user_find);
      } catch (error) {
        throw new BadRequestException(error);
      }
    } else {
      throw new NotFoundException('Korisnik nije pronadjen');
    }
  }
}
