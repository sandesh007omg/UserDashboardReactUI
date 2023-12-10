import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import GlobalStyle from "./Global.style";
import GeneralRoute from "./routes/generalRoute";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallback } from "./services/ErrorBoundary";
import { Navbar } from "./components/Navbar";

function App() {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error("Error caught by error boundary:", error, errorInfo);
  };
  return (
    <GlobalStyle>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
        <BrowserRouter>
          <Navbar />
          <div className="section-content custom-scroll">
            <GeneralRoute />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </GlobalStyle>
  );
}

export default App;
