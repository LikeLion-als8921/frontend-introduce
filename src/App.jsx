import "./App.css";
import ProfilePage from "./pages/profilePage";
import GoalPage from "./pages/goalPage";
import HobbyPage from "./pages/hobbyPage";
import NavMenuComponent from "./components/navMenuComponent";

function App() {
    return (
        <div className="App">
            <NavMenuComponent></NavMenuComponent>
            <HobbyPage></HobbyPage>
        </div>
    );
}

export default App;
