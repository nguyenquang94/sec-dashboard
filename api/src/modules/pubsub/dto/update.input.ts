import { InputType, registerEnumType } from '@nestjs/graphql';

@InputType()
export class UpdateValueInput {
    type: KeyTypeEnum;
    value: number;
}

export enum KeyTypeEnum {
    ORANGE = 'ORANGE',
    BLUE = 'BLUE',
    GRAY = 'GRAY',
    BLACK = 'BLACK',
}

registerEnumType(KeyTypeEnum, {
    name: 'KeyTypeEnum',
});
