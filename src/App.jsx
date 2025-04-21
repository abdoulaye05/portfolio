import Router from "./components/Router";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
