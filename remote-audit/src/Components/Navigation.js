import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {AuthPage} from "../Pages/AuthPage/AuthPage";
import {RegisterPage} from "../Pages/AuthPage/RegisterPage";
import {CompanyRegisterCard} from "./AuthPageComponents/CompanyRegisterCard";
import {AuditorRegisterCard} from "./AuthPageComponents/AuditorRegisterCard";
import {AuditorMainPage} from "../Pages/AuditorPages/AuditorMainPage";
import {AuditorStaffPage} from "../Pages/AuditorPages/AuditorStaffPage";

export const Navigation = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/register/auditor" render={({})=><AuditorRegisterCard />} />
                    <Route path="/register/company" render={({})=><CompanyRegisterCard />} />
                    <Route path="/register" render={({})=><RegisterPage />} />
                    <Route path="/companies" render={({})=><AuditorMainPage />} />
                    <Route path="/staff" render={({})=><AuditorStaffPage />} />
                    <Route path="/" render={({ match })=><AuthPage />} />
                </Switch>
            </Router>
        </div>
    )
}