import React from 'react'
import Navigations from './Navigations'
import {Dropdown, Card,Button} from 'react-bootstrap'


export default function Broker(props) {

    return (
        <div>
            
            <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px",marginRight:"50px",marginLeft:"50px"}} >
            
        
            <Card bg='Info'>
            <Card.Header style={{display:'flex',justifyContent:"center", alignItems:"center", width:"70rem"}} >{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>{props.teri}, pakistan</Card.Title>
                <Card.Text>
               Member Company: {props.company} 
                </Card.Text>
                
                <Card.Text>
                    Membership Number: {props.number}
                </Card.Text>
                
                <Card.Text>
                Email: {props.email}
                </Card.Text>

                <Card.Text>
                Cellphone: {props.cell}
                </Card.Text>

                <Card.Text>
                Office Address: {props.address}
                </Card.Text>

                <Card.Text>
                Territory: {props.teri}
                </Card.Text>


                <Button variant="primary" href="mailto:ali.akhan@live.com" >Contact Broker</Button>
            </Card.Body>
            </Card>

            </div>



            
       </div>
    )
}
