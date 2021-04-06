import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import GamesPage from '@pages/Games';
import ErrorFallback from '@components/ErrorBoundary/ErrorBoundary';
import { initTranslations } from '@utils/translation';
import defaultTheme from './defaultTheme';

initTranslations();

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Wczytywanie...</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThemeProvider theme={defaultTheme}>
            <Switch>
              <Route path="/">
                <GamesPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
}

export default App;
