import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserInfoDto, TokenDto } from './auth.dto';

@ApiTags('AUTH')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @ApiResponse({ status: 201, type: TokenDto})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async tokenCreate(@Body() userInfo: UserInfoDto): Promise<TokenDto> {
    return this.authService.tokenCreate(userInfo);
  }
}
