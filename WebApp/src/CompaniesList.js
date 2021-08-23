import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from 'react-bootstrap'

export default function CompaniesList() {
    return (<>


            <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >
        
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Companies List
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Habib Bank Limited </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Meezan Bank Limited</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Allied Bank Limited</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Askari Bank Limited</Dropdown.Item>     
            </Dropdown.Menu>
            </Dropdown>
            </div>

    
    </>
    )
}
