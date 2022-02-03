import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MortgageSummaryDocument = MortgageSummary & Document;

@Schema()
export class MortgageSummary {

    id: string;

    @Prop({ required: true })
    monthlyPayment: number;

    @Prop({ required: true })    
    creationDate: Date;

    @Prop({ required: true })
    mortgageAmountPerMonth: number;

    @Prop({ required: true })
    termPrincipleAmount: number;

    @Prop({ required: true })
    termInterestAmount: number;

    @Prop({ required: true })
    totalInterestInPeriod: number;

    @Prop({ required: true })
    brokerName: string;

    @Prop({ required: true })
    clientName: string;

    @Prop({ required: true })
    createDate: Date;
}



export const MortgageSummarySchema = SchemaFactory.createForClass(MortgageSummary);