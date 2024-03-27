import { ApiProperty } from '@nestjs/swagger';

export class HeaderDialogueInfoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  accessKey: string;

  @ApiProperty()
  speakerCnt: string;

  @ApiProperty()
  speaker: string[];

  @ApiProperty()
  contentCnt: string;
}

export class HeaderDto {
  @ApiProperty()
  dialogueInfo: HeaderDialogueInfoDto;
}

export class BodyContentDto {
  @ApiProperty()
  content: string;
}

export class TextSummarizationDto {
  @ApiProperty({ type: HeaderDto })
  header: HeaderDto;

  @ApiProperty({ type: BodyContentDto })
  body: BodyContentDto;
}

export class TextSummarizationResponseDto {
  @ApiProperty()
  summary: string;
}