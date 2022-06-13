// libs
import React, { ErrorInfo } from 'react';
import { logger } from '@nykaa/logger';

// components
import ErrorPage from '../ErrorPage';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    if (logger) {
      logger.error(info.componentStack.toString(), error.message, {
        tags: { type: error.name, module: 'pdp-sdk' },
      });
    }
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorPage kind="5XX" />;
    }

    return children;
  }
}

export default ErrorBoundary;
