import React, {Component} from "react";
import './App.css';
import Header from "./components/Header/header";
import Search from "./components/Main/Search/search";
import Cars from "./components/Main/Cars/cars";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

const App = (props) => {
        return (
            <div className="App">
                <Header/>
                <Search/>
                <Routes>
                    <Route path='/cars'
                           element={<Cars />}/>
                </Routes>
            </div>
        );
    }

const AppContainer = (props) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}
export default AppContainer;
