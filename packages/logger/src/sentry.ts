/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const DEFAULT_SENTRY_ENV = 'UNSPECIFIED';
const { SENTRY_DSN, SENTRY_ENV = DEFAULT_SENTRY_ENV } = process.env;

export const initSentry = (options?: Sentry.BrowserOptions) => {
  SENTRY_DSN !== ''
        && Sentry.init({
          dsn: SENTRY_DSN,
          integrations: [new Integrations.BrowserTracing()],
          environment: SENTRY_ENV,
          whitelistUrls: [/nykaafashion\.com/i, /nykaaman\.com/i, /nykaa\.com/i],
          denyUrls: [],
          ignoreErrors: [],
          ...options,
        });
};

interface SentryLogProps {
  error?: any;
  message: string;
  tags?: any;
  extraInfo?: any;
}

export const log = ({
  error, message, tags, extraInfo,
}: SentryLogProps) => {
  Sentry.withScope((scope) => {
    extraInfo && scope.setExtras(extraInfo);
    tags && scope.setTags(tags);

    if (message) {
      Sentry.captureMessage(message, Sentry.Severity.Error);
      return;
    }

    Sentry.captureException(error);
  });
};

interface SentryInfoProps {
  information: any;
  tags: any;
  extraInfo?: any;
}

export const info = ({ information, tags, extraInfo }: SentryInfoProps) => {
  Sentry.withScope((scope) => {
    scope.setLevel(Sentry.Severity.Info);
    extraInfo && scope.setExtras(extraInfo);
    tags && scope.setTags(tags);
    Sentry.captureException(information);
  });
};

export const setCustomScope = (identifier: string, value: string) => {
  Sentry.configureScope((scope) => {
    scope.setTag(identifier, value);
  });
};

export const captureEvent = (exception: Sentry.Event) => {
  Sentry.captureEvent(exception);
};

interface UserOptions{
  id: string;
  username: string;
  email: string;
  ip_address: string;
}

export const setUserScope = (userOptions: UserOptions) => {
  Sentry.configureScope((scope) => {
    scope.setUser(userOptions);
  });
};

export const error = (err: string, customMessage: string) => {
  log({ error: err, message: customMessage });
};


export default Sentry;
