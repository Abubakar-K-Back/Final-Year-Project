import React,{useState} from 'react'
import Navigations from './Navigations'
import 'bootstrap/dist/css/bootstrap.min.css'
import background from "./Images/fin.jpg";
import { color } from 'd3';



export default function Main() {



    return (
        <>
        <Navigations/>
        <div style={{backgroundColor: 'rgba(0,0,0,0.8)',backgroundImage: `url(${background})`,height:'200vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <div style={{display:'flex',justifyContent:"center", alignItems:"center"}}>

            <h1 class="display-4" style={{ opacity:"initial",marginRight:"50px",marginLeft:"50px",marginTop:"200px",color:"white",textAlign:"center",textJustify:"auto",backgroundColor: 'rgba(0,0,0,0.8)',borderRadius: '10px'}} >

                   Stock Market Index Prediction Using Time Series Analysis 

            </h1>

            </div>
 
            <div style={{display:'flex',justifyContent:"center", alignItems:"center"}}>

            <h1 class="display-5" style={{ opacity:"initial",marginRight:"50px",marginLeft:"50px",marginTop:"350px",color:"white",textAlign:"center",textJustify:"auto",backgroundColor: 'rgba(0,0,0,0.4)',borderRadius: '10px'}} >

                About Us

                <h3 style={{color:"white",textAlign:"center"}}>
                    we are a financial institute who help investors to invest in stock market, we applied advance
                    data science techniques to predict the stock market of 10 most robust companies.
                    we have applie time series analysis to predict the future stocks of companies
                    we have done 10 years of data training and predict upto 30 days of data with 
                    Average accuracy of more then 90 percent
                    so let us help you to invest in companies at perfect time and perfect cost.

                </h3>                 
            </h1>

            
            

            </div>


            <h1 class="display-5" style={{ opacity:"initial",marginRight:"50px",marginLeft:"50px",marginTop:"200px",color:"white",textAlign:"center",backgroundColor: 'rgba(0,0,0,0.4)',borderRadius: '10px'}} >
                Contact Us
            <h4 style={{color:"white",textAlign:"center"}}>
                    
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" style={{marginRight:"5px"}}>
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                            :  Support@SSTH.com
                    </p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style={{marginRight:"5px"}}>
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                             : 004435343123
                    </p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style={{marginRight:"5px"}}>
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                            : www.facebook.com/SSTH
                    </p>


                </h4>
            </h1>

        </div>
        
        </>
    )
}
