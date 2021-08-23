import React, {useEffect,useState}from 'react'
import Navigations from './Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'
import  CompaniesList  from "./CompaniesList";
import BarChart from './BarChart'
import {Dropdown,ListGroup,ListGroupItem,Card, DropdownButton} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Mzn from './Images/Meezan.png'
import honda from './Images/Atlas-Honda-logo.png'
import fatim from './Images/121.jpg'
import atk  from './Images/atck.png'
import hbll  from './Images/bbl.png'
import kasb from './Images/KASB.png'
import del from './Images/del.png'
import jsbl  from './Images/jsbl.png'
import kapco from './Images/kapco.jpg'
import dewaan from './Images/Dewan.png'
import background from './Images/comp.jpg'


export default function Dashboard() {
    


    const history=useHistory()
    
    const [value,setValue]=useState('');
    const [valpred,pred]=useState('');
    

    const handleSelect=(e)=>{
      console.log(e)
      console.log("Abubakar")
        setValue(e)

        if(e=="Mezn")
        {
         
            console.log(valpred)
            history.push('./Meezan')
        }

        if(e=="Habib")
        {
         
            console.log(valpred)
            history.push('./HBL')
        }
        if(e=="Attock")
        {
         
            console.log(valpred)
            history.push('./Attock')
        }
        if(e=="Atlas")
        {
         
            console.log(valpred)
            history.push('./Honda')
        }
        if(e=="Fatim")
        {
         
            console.log(valpred)
            history.push('./Fatima')
        }
        
        if(e=="del")
        {
         
            console.log(valpred)
            history.push('./del')
        }
        
        if(e=="jsbl")
        {
         
            console.log(valpred)
            history.push('./jsbl')
        }
        
        if(e=="kapco")
        {
         
            console.log(valpred)
            history.push('./kapco')
        }
        
        if(e=="dcl")
        {
         
            console.log(valpred)
            history.push('./dcl')
        }
        
        if(e=="kasb")
        {
         
            console.log(valpred)
            history.push('./kasb')
        }
    }


    return (
        <>
        <Navigations/>

        <div style={{backgroundColor: 'rgba(0,0,0,0.8)',backgroundImage: `url(${background})`,height:'200vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
        

        <h1 class="display-4" style={{ opacity:"initial",marginRight:"50px",marginLeft:"50px",color:"white",textAlign:"center",textJustify:"auto",backgroundColor: 'rgba(0,0,0,0.8)',borderRadius: '10px'}} >

        cOMPANIES Dashboard

        </h1>


        <div>
                
        </div>
        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >

            
        <DropdownButton
            alignRight
            title="Companies"
            id="dropdown-menu-align-center"
            onSelect={handleSelect}

    
        >
              <Dropdown.Item eventKey="Habib">Habib Bank Limited</Dropdown.Item>
              <Dropdown.Item eventKey="Fatim">Fatima Fertilizer</Dropdown.Item>
              <Dropdown.Item eventKey="Mezn">Meezan Bank Limited</Dropdown.Item>
              <Dropdown.Item eventKey="Atlas">Atlas Honda Motors</Dropdown.Item>
              <Dropdown.Item eventKey="Attock">Attock Petroleum</Dropdown.Item>
              <Dropdown.Item eventKey="kapco">KAPCO</Dropdown.Item>
              <Dropdown.Item eventKey="jsbl">JS Bank Limited</Dropdown.Item>
              <Dropdown.Item eventKey="dcl">Dewaan Cement Limited</Dropdown.Item>
              <Dropdown.Item eventKey="del">Dawood Equities Limited</Dropdown.Item>
              <Dropdown.Item eventKey="kasb">Kazim ali shah bukhari </Dropdown.Item>
                    
        </DropdownButton>


            </div>

        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginRight:"5px", marginTop:"30px", marginBottom:"30px"}}>        


        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={Mzn} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Meezan Bank Limited </h5> </Card.Title>
        <Card.Text>
        Meezan Bank is the largest Pakistani Islamic commercial bank which is a subsidiary of 
        Kuwaiti company Noor Financial.
        </Card.Text>
        </Card.Body>
        </Card>


        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={honda} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Honda Atlas Motors </h5> </Card.Title>
        <Card.Text>Atlas Honda, formerly known as Atlas Autos, is a Pakistani motorcycle manufacturer owned by Atlas Group 
            and Honda Motor.
        </Card.Text>
        </Card.Body>
        </Card>



        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={atk} style={{height:"9rem"}}/>
        <Card.Body>
        <Card.Title><h5>Attock Petroleum</h5> </Card.Title>
        <Card.Text>Attock Petroleum Limited is Pakistani oil marketing company which is a subsidiary
             of the UK-domiciled company.
        </Card.Text>
        </Card.Body>
        </Card>



        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={fatim} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Fatima Fertilizers </h5> </Card.Title>
        <Card.Text>
        Fatima Fertilizer Company Limited is the first and the only green field project which has materialized 
        under in     2001.
        </Card.Text>
        </Card.Body>
        </Card>


        <Card border="success" style={{ width: '18rem',marginRight:"5px", height:"30rem", outlineColor:"red" }}>
        <Card.Img variant="top" src={hbll} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Meezan Bank Limited </h5> </Card.Title>
        <Card.Text>Habib Bank Limited abbreviated as HBL, is a Pakistani multinational bank based 
            in Habib Bank Plaza, Karachi, Pakistan
        </Card.Text>
        </Card.Body>
        </Card>

        </div>



        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginRight:"5px", marginTop:"30px", marginBottom:"30px"}}>        


        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={kasb} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Khadim Ali Shah Bukhari </h5> </Card.Title>
        <Card.Text>
        KASB Bank was a Pakistani bank which was founded by Khadim Ali Shah Bukhari. 
        The bank was headquartered in Karachi, Pakistan It is worked under the KASB Group of Companies
        </Card.Text>
        </Card.Body>
        </Card>


        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={kapco} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>KAPCO </h5> </Card.Title>
        <Card.Text> The Kot Addu Power Company (KAPCO) is a Pakistani power company owns, operates, and maintains a multi-fuel fired power plant in Kot Addu, District Muzaffargarh, Punjab, Pakistan.[1]
        It produces 1,600 MW of electricity. In, 2005, the company was formally listed on the stock exchanges of Pakistan.
        </Card.Text>
        </Card.Body>
        </Card>



        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={dewaan} style={{height:"9rem"}}/>
        <Card.Body>
        <Card.Title><h5>Deewan Cement</h5> </Card.Title>
        <Card.Text>The Yousuf Dewan Companies is a conglomerate company based in Karachi, Pakistan It is currently owned by the former Sindh Finance Minister Dewan Mohammad Yousuf Farooqui It is previously known as Dewan Mushtaq Group.
        </Card.Text>
        </Card.Body>
        </Card>



        <Card border="success" style={{ width: '18rem', marginRight:"5px", height:"30rem" }}>
        <Card.Img variant="top" src={del} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>Fatima Fertilizers </h5> </Card.Title>
        <Card.Text>
        Fatima Fertilizer Company Limited is the first and the only green field project which has materialized 
        under in     2001.
        </Card.Text>
        </Card.Body>
        </Card>


        <Card border="success" style={{ width: '18rem',marginRight:"5px", height:"30rem", outlineColor:"red" }}>
        <Card.Img variant="top" src={jsbl} style={{height:"9rem"}} />
        <Card.Body>
        <Card.Title><h5>JS Bank Limited </h5> </Card.Title>
        <Card.Text>JS Bank Limited (JSBL)  is a Pakistani commercial bank and is based in Karachi, Pakistan. JS Bank is a prominent, 
            majority-owned subsidiary of Jahangir Siddiqui Group, with total revenue of around 562 million as of December 2018.
        </Card.Text>
        </Card.Body>
        </Card>

        </div>
        
        </div>
        
        
        </>
    )
}
