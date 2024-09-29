import * as Sentry from '@sentry/nestjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.rewriteFramesIntegration({
      root: process.env.SENTRY_APP_ROOT || '/',
    }),
  ],
  environment: process.env.NODE_ENV || 'development',
});
