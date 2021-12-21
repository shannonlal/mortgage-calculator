import { Logger, Controller } from '@nestjs/common';

@Controller('amortization')
export class AmortizationController {
    private readonly logger = new Logger(AmortizationController.name);
}
