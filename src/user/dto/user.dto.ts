import {
  IsNotEmpty,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  user_username: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too week',
  })
  user_password: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  user_first_name: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  user_last_name: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  user_username: string;

  @IsNotEmpty()
  user_password: string;
}

export class UserChangePassDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too week',
  })
  user_password: string;
}

export class UserUpdateDto {
  @IsNotEmpty()
  @IsUUID()
  user_id: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  user_username: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too week',
  })
  user_password: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  user_first_name: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  user_last_name: string;
}
