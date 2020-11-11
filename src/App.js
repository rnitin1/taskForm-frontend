import './App.css';
import InputForm from './components/input';
import { Route, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
    <ToastContainer/>
    <Switch>
    <Route exact path="/" component={InputForm}></Route>


</Switch>
</Fragment>
  );
}

export default App;
