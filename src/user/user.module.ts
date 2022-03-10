import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'awdawdwad',
      signOptions: {
        expiresIn: 28800,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [UserController],
  providers: [JwtStrategy, UserService],
  exports: [JwtStrategy, PassportModule, UserService],
})
export class UserModule {}
