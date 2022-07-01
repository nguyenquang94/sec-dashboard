import './dotenv-config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import helmet from 'helmet';
import compression from 'compression';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { UserInputError } from 'apollo-server';
import { json } from 'body-parser';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { urlencoded } from 'express';
import colors from 'colors';
colors.disable();
const PORT = parseInt(process.env.PORT ?? '3000', 10);
const allowOriginList = '*';
async function bootstrap() {
    // await initRbac();
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: process.env.NODE_ENV === 'production' ? false : ['error', 'debug', 'warn'],
        cors: {
            origin: (requestOrigin, cb) => {
                cb(null, true);
            },
            optionsSuccessStatus: 200,
        },
        bodyParser: true,
    });
    app.enableCors();
    app.use(cookieParser());
    app.use('/graphql/visualization', voyagerMiddleware({ endpointUrl: '/graphql' }));

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            disableErrorMessages: true,
            validateCustomDecorators: false,
            dismissDefaultMessages: true,
            exceptionFactory: (errors) => {
                const errData: Record<string, any> = {};
                errors.map((v) => {
                    errData[v.property] = v.constraints;
                });
                throw new UserInputError('Validation failed', errData);
            },
        }),
    );
    app.use(json({ limit: '200mb' })); //The default limit defined by body-parser is 100kb
    app.use(urlencoded({ extended: true, limit: '200mb' }));
    app.use(helmet());
    app.use(compression());
    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    await app.listen(PORT);
    console.info(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// });
