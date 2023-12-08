import { FallbackProps } from "react-error-boundary";

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>Error: {error?.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
