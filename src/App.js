import React from 'react';
import { NavBar } from './components/navBar/navBar.js';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  CartContext from './context/CartContext.js';
import {CartContainer} from './containers/Cart/Cart.js'

function App() {
    return (<div>
        <CartContext>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ItemListContainer} />
                    /{/*prueba*/}
                    <Route exact path="/ItemListContainer/:id" component={ItemListContainer} />
                    <Route exact path="/Cart" component={CartContainer} />
                    <Route exact path="/ItemDetailContainer/:productoID" component={ItemDetailContainer} />
                </Switch>
            </BrowserRouter>
        </CartContext>


    </div>)
}
export default App;