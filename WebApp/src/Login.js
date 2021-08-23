import React,{useRef,useState,Component} from 'react'
import {Form,Card,Button,li,Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigations from './Navigations'
import background from "./Images/loginpageimage.jpg";
import { auth } from "../src/firebase"




export default class Login extends Component {
    
    constructor()
    {
        super()

            this.state={
                user:"",
                error:"",
                email:"",
                password:"",
                confirmp:"",
                variant:"",
                showalert:false,
                login:false
            }
        
    }

componentDidMount()
{

    auth.onAuthStateChanged( user=>{

    
        if(!user)
        {
            this.setState({login:true})
        }

        
    if(user)
    {
        this.setState({login:false})
    }
    });
}



    render() {

      var submitted=async ()=>
        {
            console.log("form submitted")

            console.log(this.state.error)

            if(!this.state.email)
            {
                this.setState({error:"please write email."})
                
                this.setState({variant:"danger"})
                this.setState({showalert:true})
            
                return
            }
            
            if(!this.state.password)
            {
                this.setState({error:"please write password."})
                
                this.setState({variant:"danger"})
                this.setState({showalert:true})
            
                return
            }
           
        

            
            await auth.onAuthStateChanged( user=>{

                this.setState({user:user})
            });



              if(!this.state.user)
              {

            // //Authorization
                    await auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(data=>{
                        console.log(data)
                        this.setState({error:"Successfully Logged In",variant:"success",showalert:true})
                    }).catch(error=>{
                        this.setState({error:error.code,variant:"danger",showalert:true})
                    })
                    this.setState({login:false})

              }
              else
              {

                this.setState({login:false})
                this.setState({error:"User Already Logged In",variant:"danger",showalert:true})
                  
              }

        

            
            



            


            
            console.log(this.state)
    
        }
        var logout=()=>{

            auth.signOut()
            this.setState({login:true})
        }

    

        return (
            <div style={{ backgroundImage: `url(${background})`,height:'100vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}>
        
        <Navigations disbale={this.state.login}/>
        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"170px"}}>

                    <Card className="w-50 h-100 ">
                        <Card.Body className="w-100">
                            <h2 className="text-centre bold mt3 mb3">
                                Login 
                            </h2>
                            <Form>
                                <Form.Group id='email'>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder="Email Address"></Form.Control>
                                </Form.Group>

                                <Form.Group id='password'>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" onChange={e=>this.setState({password:e.target.value})} value={this.state.password}   placeholder="Password"></Form.Control>
                                    
                                </Form.Group>

                            </Form>
                            <Button type="submit" className="btn-success w-100" onClick={submitted} >
                                Submit 
                            </Button>
                            <Button disabled={this.state.login} onClick={logout} > Logout </Button>

                        </Card.Body>
                        

                        <Alert variant={this.state.variant} show={this.state.showalert} className="w-100 text-centre mt-2 mb3" >{this.state.error}</Alert>
                        <h5 style={{display:'flex',justifyContent:"center", alignItems:"center"}}>Already Have a account? Sign In</h5>
                        
                    </Card>

                    </div>     
        </div>
        )
    }

}




// export default function Login() {
//     const emailRef=useRef() 
//     const passwordref=useRef()   

//     return (

//         <div style={{ backgroundImage: `url(${background})`,height:'100vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}>
//         <Navigations/>
//         <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"170px"}}>
//                     <Card  className="mr4 ml4 w-50 space-left2" >
//                         <Card.Body className="mr4 ml4 w-100">
//                             <h2 className="text-centre bold mt3 mb3">
//                                 Login
//                             </h2>
//                             <Form>
//                                 <Form.Group id='email'>
//                                     <Form.Label>
//                                         Email
//                                     </Form.Label>
//                                     <Form.Control type="email" ref={emailRef} placeholder="Email Address"></Form.Control>
//                                 </Form.Group>

//                                 <Form.Group id='password'>
//                                     <Form.Label>
//                                         Password
//                                     </Form.Label>
//                                     <Form.Control type="password" ref={passwordref} placeholder="Password"></Form.Control>
//                                 </Form.Group> 
//                             </Form>
//                             <Button type="submit" className="btn-success w-100">
//                                 Login
//                             </Button>
//                         </Card.Body>

//                         <h5 style={{display:'flex',justifyContent:"center", alignItems:"center"}} >Dont have a Account? 
//                         Sign Up
                        
//                         </h5>
//                     </Card>

//         </div>
//         </div>
//     )
// }
