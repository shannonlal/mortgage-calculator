import { Logger, Controller, Get } from '@nestjs/common'
import { TermService } from '@mortgage-calculator/calculator-service'
import { Term } from '@mortgage-calculator/models'

@Controller('term')
export class TermController {
  private readonly logger = new Logger(TermController.name)
  constructor(private readonly termService: TermService) {}
  @Get()
  async getTerms(): Promise<Array<Term>> {
    this.logger.log(`Getting List of Terms`)
    try {
      const terms = await this.termService.getTerms()

      return terms
    } catch (err) {
      console.log(`Error.  Change don't swallow error`)
      throw err
    }
  }
}
