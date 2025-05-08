import { Route, Switch } from "react-router-dom";

import ProfilePage from "./pages/profilePage";
import GoalPage from "./pages/goalPage";
import HobbyPage from "./pages/hobbyPage";
import NavMenuComponent from "./components/navMenuComponent";

import "./App.css";

function App() {
    return (
        <div>
            <NavMenuComponent></NavMenuComponent>
            <Switch>
                <Route exact path="/" component={ProfilePage} />
                <Route path="/hobby" component={HobbyPage} />
                <Route path="/goal" component={GoalPage} />
            </Switch>
        </div>
    );
}

export default App;
