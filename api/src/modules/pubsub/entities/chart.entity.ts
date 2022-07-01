import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/graphql/types/common.interface.entity';
import { snowflake } from 'src/helpers/common';
import { Column, DeepPartial, Entity } from 'typeorm';
@ObjectType({
    implements: [Node],
})
@Entity({
    name: 'charts',
})
export class ChartEntity implements Node {
    @Field(() => ID)
    @Column('bigint', {
        primary: true,
        unsigned: true,
    })
    id: string;

    @Column({ nullable: false, default: 0 })
    orange: number;

    @Column({ nullable: false, default: 0 })
    blue: number;

    @Column({ nullable: false, default: 0 })
    gray: number;

    @Column({ nullable: false, default: 0 })
    black: number;

    @Column({ name: 'created_at' })
    createdAt: string;

    @Column({ name: 'updated_at' })
    updatedAt: string;

    constructor(partial: DeepPartial<ChartEntity>) {
        Object.assign(this, {
            id: snowflake.nextId().toString(),
            ...partial,
        });
    }
}
