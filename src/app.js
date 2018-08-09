import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard compoonent
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense compoonent
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense compoonent
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help compoonent
    </div>
);

const routes = (
    <BrowserRouter>
        <div> 
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));