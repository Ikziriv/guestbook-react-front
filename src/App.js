import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import CenterButton from "./components/CenterButton.js";
import { toast } from "react-toastify";
import Guest from "./pages/Guest/Index";
import GuestEdit from "./pages/Guest/Edit";
import Home from "./pages/Home/Index";
import "./css/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

toast.configure();
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <div className="App">
              <div className="bg-gray-200 w-full h-screen antialiased leading-none relative z-0">
                <CenterButton />

                <PoseGroup>
                  <RouteContainer
                    key={location.pathname}
                    className="flex flex-wrap"
                  >
                    <Switch location={location}>
                      <Route exact path="/" children={<Home key="home" />} />
                      <Route path="/guest" children={<Guest key="guest" />} />
                      <Route
                        path="/guest/edit/:id"
                        children={<GuestEdit key="guestedit" />}
                      />
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              </div>
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
