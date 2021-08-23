import React from 'react'
import Navigations from '../Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'
import BarChart from '../BarChart'
import {Dropdown, Card,Button} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';

import Hbl_true from '../Datasets/APL_true.csv'
import Hbl_pred from '../Datasets/APL_pred.csv'
import { useHistory } from 'react-router-dom'
import blur from '../Images/blur.jpg'

export default function Attock() {
    const history=useHistory()

   
   
    function Back()
    {
        history.push('./Dashboard')
    }
   
    return (
        <>
    

    <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >
    <Button onClick={Back}>Back to Dashboard</Button>    
    </div>
        
        <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px"}} >
        <h2>
            Attock Petroleum Limited        
            </h2>        
        </div>

            <div style={{display:'flex',justifyContent:"center", alignItems:"center",marginRight:"30px"}}>        
        
        <BarChart
        preds={Hbl_pred}
        true={Hbl_true}
        />
        </div>
        


        
        </>
    )
}
