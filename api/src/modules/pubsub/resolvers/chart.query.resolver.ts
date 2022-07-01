import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChartPubSubResolver } from '../chart_pub.resolver';
import { UpdateValueInput } from '../dto/update.input';
import { ChartEntity } from '../entities/chart.entity';
import { ChartService } from '../services/chart.service';

@Resolver()
export class ChartQueryResolver {
    constructor(
        private readonly chartService: ChartService,
        private readonly chartPubSubResolver: ChartPubSubResolver,
    ) { }
    @Query(() => ChartEntity, {
        name: 'chart',
        description: 'Get current chart data',
    })
    chart() {
        return this.chartService.chart();
    }

    @Mutation(() => ChartEntity, {
        name: 'updateChart',
        description: 'Get current chart data',
    })
    async updateChart(@Args('input') input: UpdateValueInput) {
        const res = await this.chartService.updateChart(input);
        this.chartPubSubResolver.updateChart(res);
        return res;
    }
}
