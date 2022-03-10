import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { LoginUserDto, RegisterUserDto, UserChangePassDto, UserUpdateDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login-dto';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    getAllUsers(): Promise<User[]>;
    findUserById(user_id: string): Promise<User>;
    register(registerUserDto: RegisterUserDto): Promise<void>;
    login(authCredentialsLoginDto: LoginUserDto): Promise<AuthLoginDto>;
    changePassword(userChangePassDto: UserChangePassDto, user: User): Promise<void>;
    updateUser(userUpdateDto: UserUpdateDto, user: User): Promise<void>;
}
