import { EntityRepository } from 'typeorm';
import { CommonRepository } from '../../common/common.repository';
import { ChartEntity } from '../entities/chart.entity';

@EntityRepository(ChartEntity)
export class ChartRepository extends CommonRepository<ChartEntity> { }
