import { Controller, Get } from '@nestjs/common';
import { TermService  } from '@mortgage-calculator/calculator-service';
import { Term } from '@mortgage-calculator/models';

@Controller('term')
export class TermController {

    constructor(private readonly termService: TermService) {}
    @Get()
    async getData() : Promise<Array<Term>> {
      try{
        const terms = await this.termService.getTerms();

        return terms;
      }catch ( err ){
          console.log( `Error.  Change don't swallow error`);
          throw err;
      }
    }

}
