import { ModuleMetadata } from '@nestjs/common/interfaces';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GqlConfigService } from './graphql/gql-config.service';

import { AuthenticationError } from 'apollo-server-express';
import { UpperCaseDirective } from './graphql/directives/UpperCaseDirective';
import { PubSubModule } from './modules/pubsub/pubsub.module';
import { typeORMConfig } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

export const moduleMetadata: ModuleMetadata = {
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(process.cwd(), 'webapp'),
        }),
        TypeOrmModule.forRoot(typeORMConfig),
        GraphQLModule.forRootAsync({
            useFactory: async () => ({
                path: '/graphql',
                uploads: {
                    maxFieldSize: 100 * 1000000, // 100MB
                    maxFileSize: 50 * 1000000, // 50 MB
                    maxFiles: 20,
                },
                playground: true,
                debug: true,
                installSubscriptionHandlers: true,
                autoSchemaFile: true,
                schemaDirectives: {
                    upper: UpperCaseDirective,
                },
                subscriptions: {
                    // get headers
                    keepAlive: 30000,
                    onConnect: async (connectionParams: any, context: any) => {
                        console.log('co user connect');
                    },
                },
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                // plugins: [new ApolloComplexityPlugin(250)],
                context: ({ req, res, payload, connection }: any) => ({ req, res, payload, connection }),
                resolverValidationOptions: {
                    requireResolversForResolveType: false,
                },
            }),
        }),
        PubSubModule,
    ],
    controllers: [AppController],
    providers: [AppService, GqlConfigService],
};
