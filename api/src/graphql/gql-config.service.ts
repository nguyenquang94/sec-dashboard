import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { UpperCaseDirective } from './directives/UpperCaseDirective';
import { ApolloComplexityPlugin } from './plugins/ApolloComplexityPlugin';

export type GraphQLContext = {
    req: Request;
    res: Response;
};

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions {
        return {
            fieldResolverEnhancers: ['guards', 'filters', 'interceptors'],
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            plugins: [new ApolloComplexityPlugin(250)],
            context: ({ req, res, connection }: { req: Request; res: Response; connection: any }): GraphQLContext => {
                if (connection) {
                    return { req: connection.context, res };
                } else {
                    return { req, res };
                }
            },
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
        };
    }
}
