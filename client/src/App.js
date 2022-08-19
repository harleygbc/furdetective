import { useEffect } from "react";
// import { Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./styles/App.css";
// import "./styles/dasboard/assets/css/bootstrap.min.css";
import "./styles/dasboard/assets/css/animate.css";
import "./styles/dasboard/assets/css/style.css";
import "./styles/dasboard/assets/plugins/select2/css/select2.min.css";
// import "./styles/dasboard/assets/css/dataTables.bootstrap4.min.css";
import "./styles/dasboard/assets/plugins/fontawesome/css/fontawesome.min.css";
import "./styles/dasboard/assets/plugins/fontawesome/css/all.min.css";

// import "./styles/dasboard/assets/js/jquery.dataTables.min.js";
// import "./styles/dasboard/assets/js/jquery.slimscroll.min.js";
import "./styles/dasboard/assets/js/script.js";
// import "./styles/dasboard/assets/plugins/select2/js/select2.min.js";

// import "./styles/dasboard/assets/js/jquery-3.6.0.min.js"
// import "./styles/dasboard/assets/js/feather.min.js";

// import "./styles/dasboard/assets/js/bootstrap.bundle.min.js"

import Dashboard from "./pages/Dashboard/index";
import AddPet from "./pages/Pets/AddPet";
import NavigationBar from "components/NavigationBar/NavigationBar";
import Sidebar from "components/Sidebar/Sidebar";
import PetList from "pages/Pets/PetList";
import AddUser from "pages/User/AddUser";
import OwnershipTransfer from "pages/OwnershipTransfer/OwnershipTransfer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>
      <NavigationBar />
      <Route path="/new-pet" component={AddPet} exact />
      <Route path="/" component={Dashboard} exact />
      <Route path="/pet-list" component={PetList} exact />
      <Route path="/new-user" component={AddUser} exact />
      <Route path="/transfer-ownership" component={OwnershipTransfer} exact />

      <Sidebar />
    </Router>
  );
}

export default App;
