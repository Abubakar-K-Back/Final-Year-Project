import {React,Component} from 'react'
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import {Form,Card,Button,li,Nav,Navbar,FormControl} from 'react-bootstrap'
import 'bootswatch/dist/lux/bootstrap.css';
import { Route, Switch, Redirect,BrowserRouter as Router,Link } from 'react-router-dom';
import Main from './Main'
import Login from './Login'
import { auth } from "../src/firebase"


export default class Navigations extends Component {
  constructor()
  {
      super()

          this.state={

              usernow:"",
              showalert:true
          }

  }

  showme=true
  componentDidMount()
  {

      if(!auth.currentUser)
      {
        this.setState({showalert:true})
        console.log("No User ",this.state.showalert)
      }
      if(auth.currentUser)
      {
        this.setState({showalert:false})
        console.log("Yes User ",this.state.showalert)
      }


  }


  render() {

    
    var Logout=()=>
    {

      auth.signOut().catch(error=>console.log(error))
      this.setState({showalert:true})
      console.log("User Logged out.....")
  
      
    }

    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Stock Market Index Prediction</Navbar.Brand>
      <Nav className="mr-auto"  
>
          
          <Nav.Link href="/">Home</Nav.Link>
          
          <Nav.Link href="/Login">Login</Nav.Link>
  
          <Nav.Link href="/SignUp" >Become a Member</Nav.Link>
          
          <Nav.Link href="/Dashboard" disabled={this.props.disbale}>Dashboard</Nav.Link>
  
          <Nav.Link href="/Broker" disabled={this.props.disbale} >Brokers</Nav.Link>
  


  
  
      </Nav>
    </Navbar>
      )
  
    
  }
}



// function Logout()
// {

//     //auth.signOut()
// }
// export default function Navigations() {
  
  

//     return (
        
//     <Navbar bg="dark" variant="dark">
//     <Navbar.Brand>Stock Market Index Prediction</Navbar.Brand>
//     <Nav className="mr-auto">
        
//         <Nav.Link href="/">Home</Nav.Link>
        
//         <Nav.Link href="/Login">Login</Nav.Link>

//         <Nav.Link href="/SignUp" >Become a Member</Nav.Link>
        
//         <Nav.Link href="/Pricing">Pricing</Nav.Link>
        
//         <Nav.Link href="/Dashboard">Dashboard</Nav.Link>

//         <Nav.Link href="/Broker">Brokers</Nav.Link>

//         <Button onClick={Logout()} >Logout</Button>

        

//     </Nav>
//   </Navbar>
//     )
// }
