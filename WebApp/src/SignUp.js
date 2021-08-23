
import React,{createRef, useRef,useState} from 'react'
import {Form,Card,Button,li,Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigations from './Navigations'
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import background from "./Images/loginpageimage.jpg";
import { auth } from "../src/firebase"

import { Component } from 'react'

export default class SignUp extends Component {

    constructor()
    {
        super()

            this.state={
                error:"",
                email:"",
                password:"",
                confirmp:"",
                variant:"",
                showalert:false
            }
        
    }







    render() {

      var submitted=()=>
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
            if(!this.state.confirmp)
            {
                this.setState({error:"please write confirm password."})
                
                this.setState({variant:"danger"})
                this.setState({showalert:true})
            
                return
            }
            if(this.state.password !== this.state.confirmp)
            {
                this.setState({error:"password do not match"})
                
                this.setState({variant:"danger"})
                this.setState({showalert:true})
            
                
                return
            }

            //Authorization
            auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then(data=>{
                console.log(data)
                this.setState({error:"Welcome",variant:"success"})
            }).catch(error=>{
                this.setState({error:error.code,variant:"danger"})
            })
        

            
            




            console.log(this.state)
    
        }

    

        return (
            <div style={{ backgroundImage: `url(${background})`,height:'100vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}>
        <Navigations/>
        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"170px"}}>
                    <Card className="w-50 h-100 ">
                        <Card.Body className="w-100">
                            <h2 className="text-centre bold mt3 mb3">
                                Sign Up
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

                                <Form.Group id='confirmpassword'>
                                    <Form.Label>
                                        Confirm Password
                                    </Form.Label>
                                    <Form.Control type="password" onChange={e=>this.setState({confirmp:e.target.value})} value={this.state.confirmp} placeholder="Confirm Password"></Form.Control>
                                </Form.Group>
                            </Form>
                            <Button type="submit" className="btn-success w-100" onClick={submitted} >
                                Submit 
                            </Button>
                        </Card.Body>
                        

                        <Alert variant={this.state.variant} show={this.state.showalert} className="w-100 text-centre mt-2 mb3" >{this.state.error}</Alert>
                        <h5 style={{display:'flex',justifyContent:"center", alignItems:"center"}}>Already Have a account? Sign In</h5>
                        
                    </Card>

                    </div>     
        </div>
        )
    }
}








