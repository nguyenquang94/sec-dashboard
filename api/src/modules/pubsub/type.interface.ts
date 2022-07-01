import { ChartEntity } from './entities/chart.entity';

export const UPDATE_DATA = 'UPDATE_DATA';

export type UpdateRoomType = {
    data: ChartEntity;
};
