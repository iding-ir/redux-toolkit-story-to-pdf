import { HashRouter as Router } from "react-router-dom";

import "../../localization";
import Pages from "../Pages/Pages";
import Providers from "../Providers/Providers";

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
