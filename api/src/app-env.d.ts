/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly PORT: string;
        readonly DATABASE_PORT?: string;
        readonly DATABASE_HOST?: string;
        readonly DATABASE_USER?: string;
        readonly DATABASE_PASSWORD?: string;
        readonly DATABASE_NAME?: string;
        readonly DATABASE_SYNC?: 'true' | 'false';
        readonly DATABASE_LOGGING?: 'true' | 'false';

        // Common
        readonly BASE_URL?: string;

        // Jwt

        readonly JWT_SECRET?: string;

        // Amazon
        readonly AWS_SES_SENDER_EMAIL?: string;
        readonly AWS_SNS_REGION?: string;
        readonly AWS_SES_REGION?: string;
        readonly AWS_ACCESS_KEY_ID?: string;
        readonly AWS_SECRET_KEY_ACCESS: string;

        readonly AWS_S3_REGION?: string;
        readonly AWS_S3_BUCKET_NAME?: string;

        // Quickblox
        readonly QB_APP_ID: string;
        readonly QB_AUTH_KEY: string;
        readonly QB_AUTH_SECRET: string;
        readonly QB_ACCOUNT_KEY: string;

        readonly OTP_EXPRIED_TIME?: string;

        // Kakao
        readonly KAKAO_ADMIN_KEY?: string;
        readonly KAKAO_REST_API_KEY?: string;
    }
}

declare namespace Express {
    interface User {
        id: string;
        name: string;
        userId: string;
    }
}
