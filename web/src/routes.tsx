import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PalindricNumbers from "./pages/PalindromicsPage";
import CashierPage from "./pages/CashierPage";
import VehiclesPage from "./pages/VehiclesPage";
import CepPage from "./pages/CepPage";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/D1" component={PalindricNumbers} />
        <Route path="/D2" component={CashierPage} />
        <Route path="/D3" component={VehiclesPage} />
        <Route path="/D4" component={CepPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
