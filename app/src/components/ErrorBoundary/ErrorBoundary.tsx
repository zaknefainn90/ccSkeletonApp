import React, { FC } from 'react';

interface Props {
  error: Error;
}

const ErrorFallback: FC<Props> = ({ error }: Props) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{error.message}</pre>
  </div>
);

export default ErrorFallback;
