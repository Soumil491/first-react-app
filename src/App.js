import './App.css';
import HomePage from './pages/home-page/home-page.component.jsx';
import {Route} from 'react-router-dom';
import SignIn from './pages/signin-page/signin.component.jsx';
import Header from './components/header/header.component.jsx';
import Cart from './pages/cart-page/cart-page.component.jsx';
// import rotateFunction from '../src/redux/test-redux-withUI';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/cart" component={Cart}></Route>
      {/* <Route exact path="/redux" component={rotateFunction}></Route> */}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
    </div>
  );
}

export default App;