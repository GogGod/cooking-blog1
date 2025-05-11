import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Category from './pages/Category';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/style.css';
import './assets/css/responsive.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/category/:category" component={Category} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

<link rel="stylesheet" href="assets/css/style.css"></link>