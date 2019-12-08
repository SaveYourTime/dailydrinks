import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Modal from './components/Modal/Modal';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import AddButton from './components/Shared/AddButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      loading: true,
      editMode: false,
      orders: [],
    };
  }

  componentDidMount() {
    const orders = JSON.parse(window.localStorage.getItem('orders'));
    orders && this.setState({ orders });
    this.setState({ loading: false });
  }

  toggleModalHandle = (editMode = false) => {
    this.setState({ toggle: !this.state.toggle, editMode });
  }

  addOrder = (item, orderIndex, history) => {
    const tempOrders = [...this.state.orders];
    if (orderIndex) {
      tempOrders[orderIndex].items.push(item);
      return this.setState({ toggle: false, orders: tempOrders }, () => window.localStorage.setItem('orders', JSON.stringify(tempOrders)));
    }
    const number = tempOrders.reduce((prev, curr) => Math.max(prev, curr.number), 0) + 1;
    tempOrders.push({
      number,
      date: new Date(Date.now()).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      items: [item]
    });
    this.setState({ toggle: false, orders: tempOrders }, () => window.localStorage.setItem('orders', JSON.stringify(tempOrders)));
    history.push(`/order/${tempOrders.length - 1}`);
  }

  removeOrder = (orderIndex) => {
    const orders = this.state.orders.filter((order, index) => index !== orderIndex);
    this.setState({ orders }, () => window.localStorage.setItem('orders', JSON.stringify(orders)));
  }

  editItemClick = (orderIndex, itemIndex, history) => {
    history.push(`/order/${orderIndex}?item=${itemIndex}`);
    this.toggleModalHandle(true);
  }

  editItem = (orders) => {
    this.setState({ orders, toggle: false }, () => window.localStorage.setItem('orders', JSON.stringify(orders)));
  }

  removeItem = (orderIndex, removeIndex) => {
    const tempOrders = [...this.state.orders];
    tempOrders[orderIndex].items = tempOrders[orderIndex].items.filter((item, index) => index !== removeIndex);
    this.setState({ orders: tempOrders }, () => window.localStorage.setItem('orders', JSON.stringify(tempOrders)));
  }

  render() {
    const { loading, toggle, orders, editMode } = this.state;

    return (
      <div className="App">
        {loading ||
          <Router>
            <Switch>
              <Route path="/order/:id">
                <Order
                  orders={orders}
                  editItemClick={this.editItemClick}
                  removeItem={this.removeItem}
                />
              </Route>
              <Route path="/">
                <>
                  <Header>Daily Drinks</Header>
                  <Home
                    removeOrder={this.removeOrder}
                    orders={orders}
                  />
                </>
              </Route>
            </Switch>
            {toggle &&
              <Modal
                confirm={this.addOrder}
                editItem={this.editItem}
                editMode={editMode}
                orders={orders}
                toggleModalHandle={this.toggleModalHandle}
              />}
          </Router>
        }
        <AddButton onClick={() => this.toggleModalHandle()} />
      </div>
    );
  }
}

export default App;
