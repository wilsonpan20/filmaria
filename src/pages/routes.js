import { BrowserRouter,Route,Switch } from "react-router-dom";
import Header from '../components/Header';
import Home from './Home';


const Routes =()=> {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route  exect path="/" component={Home}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;