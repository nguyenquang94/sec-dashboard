import { Inject } from '@nestjs/common';
import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { ChartEntity } from './entities/chart.entity';
import { UPDATE_DATA } from './type.interface';

@Resolver(() => ChartEntity)
export class ChartPubSubResolver {
    constructor(@Inject('PUB_SUB') private pubSub: PubSubEngine) { }
    updateChart(chart: ChartEntity) {
        this.pubSub.publish(UPDATE_DATA, { data: chart });
    }

    @Subscription((returns) => ChartEntity, {
        resolve: (value) => {
            return value?.data;
        },
    })
    private updateDataChart() {
        return this.pubSub.asyncIterator(UPDATE_DATA);
    }
}
