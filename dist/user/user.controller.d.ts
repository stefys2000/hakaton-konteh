import { UserService } from './user.service';
import { User } from './user.entity';
import { LoginUserDto, RegisterUserDto, UserChangePassDto, UserUpdateDto } from './dto/user.dto';
import { AuthLoginDto } from './dto/auth-login-dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    login(loginUserDto: LoginUserDto): Promise<AuthLoginDto>;
    register(registerUserDto: RegisterUserDto): Promise<void>;
    changePassword(userChangePassDto: UserChangePassDto, user: User): Promise<void>;
    updateUser(userUpdateDto: UserUpdateDto, user: User): Promise<void>;
}
