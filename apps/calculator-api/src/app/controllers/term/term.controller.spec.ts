import { TermService } from '@mortgage-calculator/calculator-service'
import { Term } from '@mortgage-calculator/models'
import { Test, TestingModule } from '@nestjs/testing'
import { TermController } from './term.controller'

describe('TermController', () => {
  let controller: TermController
  const mockTerms: Array<Term> = [
    {
      label: '1 Year',
      duration: 1,
    },
    {
      label: '2 Years',
      duration: 2,
    },
  ]
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermController],
      providers: [
        {
          provide: TermService,
          useValue: {
            getTerms: jest.fn(() => {
              return Promise.resolve(mockTerms)
            }),
          },
        },
      ],
    }).compile()

    controller = module.get<TermController>(TermController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should get terms', async () => {
    try {
      const terms: Array<Term> = await controller.getTerms()

      expect(terms).toBeDefined()
      expect(terms.length).toBe(2)
    } catch (err) {
      expect(err).toBeUndefined()
    }
  })
})
