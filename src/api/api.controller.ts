import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  TextSummarizationDto,
  TextSummarizationResponseDto,
} from './api.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('API')
@Controller()
export class ApiController {
  constructor() {}

  @Post('summarization')
  @ApiResponse({ status: 201, type: TextSummarizationResponseDto })
  async summarize(
    @Body() textSummarizationDto: TextSummarizationDto,
  ): Promise<TextSummarizationResponseDto> {
    const textSummarizationResponseDto = new TextSummarizationResponseDto();
    textSummarizationResponseDto.summary = 'This is a summary';
    return textSummarizationResponseDto;
  }

  @Post('objectDetection')
  async objectDetection(): Promise<any> {
    return {};
  }
}