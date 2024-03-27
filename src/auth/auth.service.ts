import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInfoDto, TokenDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async tokenCreate(userInfo: UserInfoDto): Promise<TokenDto> {
    const payload = { username: userInfo.username, id: userInfo.id };
    const tokenDto = new TokenDto();
    tokenDto.api_token = this.jwtService.sign(payload);
    return tokenDto;
  }
}
