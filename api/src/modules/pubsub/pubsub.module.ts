import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSub } from 'apollo-server';
import { ChartPubSubResolver } from './chart_pub.resolver';
import { ChartRepository } from './repositories/chart.repository';
import { ChartQueryResolver } from './resolvers/chart.query.resolver';
import { ChartService } from './services/chart.service';
@Module({
    imports: [TypeOrmModule.forFeature([ChartRepository])],
    providers: [
        ChartPubSubResolver,
        ChartQueryResolver,
        ChartService,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        },
    ],
    exports: [],
})
export class PubSubModule { }
