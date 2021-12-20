import { Controller, Get } from '@nestjs/common';

@Controller('term')
export class TermController {
    @Get()
    getData() {
      return `{
          label:hello
      }`;
    }

}
