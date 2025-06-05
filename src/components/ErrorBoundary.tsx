
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 via-yellow-200 to-blue-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="comic-border-red bg-white p-8 rounded-3xl max-w-md mx-auto text-center"
          >
            <div className="text-6xl mb-4">💥</div>
            <h2 className="comic-heading text-3xl text-red-600 mb-4">OOPS!</h2>
            <p className="comic-text text-gray-800 mb-6">
              Something went wrong! Don't worry, our superhero developers are on it!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-6 py-3 comic-border-red rounded-xl comic-text hover:bg-red-600 transition-colors"
            >
              🔄 Try Again
            </motion.button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
