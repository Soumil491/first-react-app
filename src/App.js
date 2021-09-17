import './App.css';
import HomePage from './pages/home-page/home-page.component.jsx';
import SigninPage from './pages/signin-page/signin.component';
import ShopPage from './pages/shop-page/shop-page.component';
import CartPage from './pages/cart-page/cart-page.component';
import Header from './components/header/header.component';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={SigninPage} />
            <Route exact path="/shoppage" component={ShopPage} />
            <Route exact path="/cartpage" component={CartPage} />
        </div>
    );
}

export default App;
