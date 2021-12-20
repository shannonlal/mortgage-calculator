import { Test, TestingModule } from '@nestjs/testing'
import { TermService } from './term.service'
import { Term } from '@mortgage-calculator/models'

describe('TermService', () => {
  let service: TermService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermService],
    }).compile()

    service = module.get<TermService>(TermService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get 30 terms', async () => {
    try {
      const terms: Array<Term> = await service.getTerms()

      expect(terms).toBeDefined()
      expect(terms.length).toBe(30)
    } catch (err) {
      expect(err).toBeUndefined()
    }
  })

  it('should have first year Single Year Spelling', async () => {
    try {
      const terms: Array<Term> = await service.getTerms()

      expect(terms).toBeDefined()
      expect(terms[0].label).toBe('1 Year')
      expect(terms[0].duration).toBe(1)
    } catch (err) {
      expect(err).toBeUndefined()
    }
  })

  it('should have first year Single Year Spelling', async () => {
    try {
      const terms: Array<Term> = await service.getTerms()

      expect(terms).toBeDefined()
      expect(terms[1].label).toBe('2 Years')
      expect(terms[1].duration).toBe(2)
    } catch (err) {
      expect(err).toBeUndefined()
    }
  })
})
