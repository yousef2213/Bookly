import React, { Component } from 'react'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {BooklyConsumer} from './context/context'

import Navbar from './component/Navbar' //  => Navbar
import Logo from './component/Logo'
import Register from './component/Register'
import Home from './component/Home/index'
import Categories from './component/Categories/index'
import Categories2 from './component/Categories/Categories2'// Categories2
import Categories3 from './component/Categories/Categories3'// Categories3
import MyTickets from './component/MyTickets/index'
import Bookmarked from './component/Bookmarked/container' // bookmarked 1
import Payment from './component/Payment' // Payment
import Default_Page from './component/DefaultPage/Default'
export default class App extends Component {
  render() {
    return (
      <BooklyConsumer>
        {value =>{
          const {Login} = value;
            if(Login === false){
              return(
                <Switch>
                  <Route exact path="/" component={Logo} />
                  <Route exact path="/register" component={Register} />
                  <Route component={Default_Page} />
                </Switch>
              )
            }
            if(Login === true){
              return(
                <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/Event" component={Categories2} />
                    <Route path="/MyTickets" component={MyTickets} />
                    <Route path="/Bookmarked" component={Bookmarked} />
                    <Route path="/Categories-Event" component={Categories3} />
                    <Route component={Default_Page} />
                </Switch>
              </>
              )
            }
            return(
              <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/Event" component={Categories2} />
                    <Route path="/MyTickets" component={MyTickets} />
                    <Route path="/Bookmarked" component={Bookmarked} />
                </Switch>
              </>
            )
        }}
      </BooklyConsumer>
    )
  }
}



// function App() {
//   return (
//     <>
//     <Navbar />
//     <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/register" component={Register} />
//         <Route path="/Categories" component={Categories} />
//         <Route path="/Event" component={Categories2} />
//         <Route path="/MyTickets" component={MyTickets} />
//         <Route path="/Bookmarked" component={Bookmarked} />
//     </Switch>
//     </>
//   );
// }

// export default App;
