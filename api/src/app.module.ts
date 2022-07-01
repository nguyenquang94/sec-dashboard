import { Module, MiddlewareConsumer, NestModule, RequestMethod, NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction } from 'express';
import { moduleMetadata } from './module.metadata';
// Entity
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        next();
    }
}

export function logger(req: Request, res: Response, next: NextFunction) {
    // console.log(`Request...`);
    next();
}

@Module(moduleMetadata)
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({
            method: RequestMethod.ALL,
            path: '*',
        });
    }
}
