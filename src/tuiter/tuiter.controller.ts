import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tuiter')
export class TuiterController {
  @Get()
  getTuiters(): string {
    return 'esto es un tuit';
  }
  @Get(':id')
  getTuit(@Param('id') id: string): string {
    return `esto es el id por parametro ${id}`;
  }

  @Post()
  createtuit(@Body('message') message:string) {
    return `El mensaje del Tuie es: ${message}`;
  }
}
