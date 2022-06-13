import Raven from 'raven-js';


class RavenSetup {
  private static ravenInstance = false;

  public constructor() {
    if (RavenSetup.ravenInstance) {
      return this;
    }
    const { SENTRY_DSN } = process.env;
    this.setting = SENTRY_DSN;
    this.install({});
  }

  private setting = '';

  private install = (options: unknown) => {
    if (RavenSetup.ravenInstance) {
      return this;
    }
    const finalOptions = options || {};
    Raven.config(this.setting, finalOptions).install();
    RavenSetup.ravenInstance = true;

    return RavenSetup;
  };

  private unInstall = () => {
    Raven.config(this.setting).uninstall();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public info = (exc: Error, message: string = '') => {
    // Raven.captureException(exc, {
    //   level: 'info',
    //   extra: {
    //     message,
    //   },
    // });
  };

  public error = (exc: Error | string, message: string = '', options: any = {}) => {
    Raven.captureException(exc, {
      level: 'error',
      extra: {
        message,
        ...options,
      },
    });
  };
}

const ravenInstance = new RavenSetup();

export default ravenInstance;
