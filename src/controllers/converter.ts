import axios, { AxiosError } from 'axios';
import APIResponse from "../models/API-response";
import ConverterError from '../models/converter-error';
import { RequestCurrency, ResponseCurrency } from '../models/currency';
import REFERENCE_CURRENCY from '../settings/referenceCurrency';

class Converter {
    private currentExchangeRate: APIResponse[] = [];

    private currentExchangeDate: Date | null;

    constructor() {
        this.currentExchangeDate = null;
        this.setCurrentExchangeRate();
    };

    private async setCurrentExchangeRate() {
        const apiUrl = process.env.API_URL || '';
        this.currentExchangeRate = await axios.get(
                apiUrl,
                { timeout: 10000 }
            )
            .then(res => res.data)
            .catch((err: AxiosError) => {
                throw { message: err.message, code: 500 };
            });

        this.currentExchangeRate.push(REFERENCE_CURRENCY);

        this.currentExchangeDate = new Date(this.currentExchangeRate[0]?.Date || Date.now());
    };

    async convert(changedCurrency: RequestCurrency): Promise<ResponseCurrency[]> {
        try {
            if (this.currentExchangeDate!.toISOString().slice(0, 10) < new Date().toISOString().slice(0, 10)) {
                await this.setCurrentExchangeRate();
            };
            
            const changedCurrencyRate = this.currentExchangeRate.filter(
                    (rate: APIResponse) => rate.Cur_Abbreviation === changedCurrency.abbreviation
                )[0];

            const referenсeAmount = changedCurrency.amount * changedCurrencyRate.Cur_OfficialRate / changedCurrencyRate.Cur_Scale;
            
            return this.currentExchangeRate.reduce(
                (acc: ResponseCurrency[], currency: APIResponse) => {
                    acc.push({
                        abbreviation: currency.Cur_Abbreviation,
                        amount: referenсeAmount / currency.Cur_OfficialRate * currency.Cur_Scale,
                        name: currency.Cur_Name,
                    });

                    return acc;
                }, []);
        } catch (err) {
            throw this.errorHandler(changedCurrency, err as Error);
        }
    };

    private errorHandler(currency: RequestCurrency, err: Error): ConverterError {
        if (currency?.abbreviation === undefined  || currency?.amount === undefined) {
            return { message: 'Bad request', code: 400 };
        }

        return { message: err.message, code: 500 };
    };
};

const converter = new Converter();

export default converter;
