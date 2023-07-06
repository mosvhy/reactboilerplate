import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

const Home = lazy(()=>import("./pages/Home"));

const PageNotFound = lazy(()=>import("./pages/Error/PageNotFound"));

const TopBar = lazy(()=>import("./components/TopBar"));
const Loading = lazy(()=>import("./components/Loading"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('BOUNDARY',error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <BrowserRouter>
          <TopBar />
          <Container className="mt-5">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
