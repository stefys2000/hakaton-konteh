import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { ConfigService } from '@nestjs/config';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: 'awdawdwad',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload) {
    const { user_username } = payload;
    const user: User = await this.userRepository.findOne({ user_username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
