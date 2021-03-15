import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Home from './component/home';
import Header from './component/header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
        
    </BrowserRouter>
)

export default Routes;