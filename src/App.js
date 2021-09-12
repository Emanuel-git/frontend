import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchUser from "./pages/SearchUser";
import UserPage from './pages/UserPage';

import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SearchUser} />
                <Route path="/users/" exact component={SearchUser} />
                <Route path="/users/:user" component={UserPage} />
            </Switch>
        </BrowserRouter>
        
        <GlobalStyles />
        </>
    );
}

export default App;
