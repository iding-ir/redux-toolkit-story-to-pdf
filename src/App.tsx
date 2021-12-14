import { HashRouter as Router } from "react-router-dom";

import "./localization";
import Pages from "./components/Pages/Pages";
import Providers from "./components/Providers/Providers";

function App() {
  return (
    <Router>
      <Providers>
        <Pages />
      </Providers>
    </Router>
  );
}

export default App;
