import { Injectable } from '@nestjs/common';
import { KeyTypeEnum, UpdateValueInput } from '../dto/update.input';
import { ChartRepository } from '../repositories/chart.repository';
import moment from 'moment';
@Injectable()
export class ChartService {
    constructor(private readonly chartRepository: ChartRepository) { }

    updateChart = async (input: UpdateValueInput) => {
        const currentValue = await this.chart();
        let newValue;
        if (input.type === KeyTypeEnum.ORANGE) {
            newValue = { ...currentValue, orange: input.value, updatedAt: moment().format() };
        }
        if (input.type === KeyTypeEnum.GRAY) {
            newValue = { ...currentValue, gray: input.value, updatedAt: moment().format() };
        }
        if (input.type === KeyTypeEnum.BLACK) {
            newValue = { ...currentValue, black: input.value, updatedAt: moment().format() };
        }
        if (input.type === KeyTypeEnum.BLUE) {
            newValue = { ...currentValue, blue: input.value, updatedAt: moment().format() };
        }
        return this.chartRepository.save(newValue);
    };
    chart = async () => {
        const data = await this.chartRepository.find();
        return data?.length ? data[0] : null;
    };
}
