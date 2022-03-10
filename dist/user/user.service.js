"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_repository_1 = require("./user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const auth_login_dto_1 = require("./dto/auth-login-dto");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async getAllUsers() {
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
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Unauthorized request');
        }
    }
    async findUserById(user_id) {
        const found = await this.userRepository.findOne(user_id);
        if (!found) {
            throw new common_1.NotFoundException(`User with ID ${user_id} was not found`);
        }
        return found;
    }
    async register(registerUserDto) {
        const { user_username, user_password, user_first_name, user_last_name } = registerUserDto;
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
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.ConflictException(error.code);
            }
        }
    }
    async login(authCredentialsLoginDto) {
        const { user_username, user_password } = authCredentialsLoginDto;
        const user = await this.userRepository.findOne({ user_username });
        if (user && (await bcrypt.compare(user_password, user.user_password))) {
            const payload = { user_username };
            const accessToken = this.jwtService.sign(payload);
            const authLoginDto = new auth_login_dto_1.AuthLoginDto();
            authLoginDto.user_first_name = user.user_first_name;
            authLoginDto.user_last_name = user.user_last_name;
            authLoginDto.accessToken = accessToken;
            return authLoginDto;
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    async changePassword(userChangePassDto, user) {
        const { user_password } = userChangePassDto;
        const salt = await bcrypt.genSalt();
        user.user_password = await bcrypt.hash(user_password, salt);
        await this.userRepository.save(user);
    }
    async updateUser(userUpdateDto, user) {
        const { user_username, user_password, user_first_name, user_last_name } = userUpdateDto;
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
                    throw new common_1.BadRequestException(`Korisnik sa korisničkim imenom ${user_username} već postoji`);
                }
                user_find.user_username = user_username;
            }
            if (user_first_name)
                user_find.user_first_name = user_first_name;
            if (user_last_name)
                user_find.user_last_name = user_last_name;
            try {
                await this.userRepository.save(user_find);
            }
            catch (error) {
                throw new common_1.BadRequestException(error);
            }
        }
        else {
            throw new common_1.NotFoundException('Korisnik nije pronadjen');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map