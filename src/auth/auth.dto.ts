import { ApiProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;
}

export class TokenDto {
  @ApiProperty()
  api_token: string;
}
