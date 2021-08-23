import React ,{ useEffect,useState } from 'react'
import {Bar,Line,Bubble,Radar,Doughnut,HorizontalBar} from 'react-chartjs-2'
import Hbl_true from './Datasets/true.csv'
import Hbl_pred from './Datasets/pred.csv'
import * as d3 from 'd3';



const Barchart=(props)=> {


    const [hblTrue, setHblTrue] = useState([])
    const [hblPred, setHblPred] = useState([])
    const [dates,setDates] = useState([])

    var hbl_true=[]
    var hbl_pred=[]
    var date=[]
    var pie_true=[]
    

    var truehbl=[]
    var truedates=[]
    var predhbl=[]
    var a=-50
    var stddev=0
    var true_mean=0
    var pred_mean=0
    var mean_diff=0
    useEffect(()=>{


        d3.csv(props.true).then(data=>{

            // hbl_true=data.slice(0,99)
           
            data.slice(a).forEach(element => {

                hbl_true.push(element.True)
                date.push(element.Date)
                
            });
            date=data.slice(a)
            

        })

        d3.csv(props.preds).then(data=>{

            

            data.slice(a).forEach(element => {
                hbl_pred.push(element.Predicted)
            });
        })

    },)

    pred_mean=hbl_pred.reduce((a, b) => a + b, 0)
    true_mean=hbl_true.reduce((a, b) => a + b, 0)
    console.log(pred_mean,true_mean)




    return <div>
        <div className="block-example border border-primary" style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px",width:"1300px",height:"1500"}} >
    
    {/* this is a Line Chart */}
    <div>
    <Line
    height={400}
    width={1300}
    options={{maintainAspectRatio:false}}
    data={{
        labels:date,
        datasets:[
            {
                label: 'True Prices',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgb(0, 61, 102)',
                borderWidth: 0,
                pointRadius:2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:hbl_true,
                fill:false,
                showLine:false
            },
            {
                label: 'Predicted Prices',
                data:hbl_pred,
                fill:false,
                pointRadius:0,
                backgroundColor: 'green',
                borderColor: 'rgb(26, 163, 255)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                
            }
        ]
    }}
    />
    </div>
    <div>



</div>
    </div>
    <div className="block-example border border-primary" style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px",width:"1300px",height:"1500"}} >
    
    {/* this is a Line Chart */}
    <div>
    <Bar
    height={400}
    width={1300}
    options={{maintainAspectRatio:false}}
    data={{
        labels:date,
        datasets:[
            {
                label: 'True Prices',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgb(0, 61, 102)',
                borderWidth: 0,
                pointRadius:2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:hbl_true,
                fill:false,
                showLine:false
            },
            {
                label: 'Predicted Prices',
                data:hbl_pred,
                fill:false,
                pointRadius:0,
                backgroundColor: 'green',
                borderColor: 'rgb(26, 163, 255)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                
            }
        ]
    }}
    />
    </div>
    <div>



</div>
    
    </div>



    <div className="block-example border border-primary" style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px",width:"1300px",height:"1500"}} >
    
    {/* this is a Line Chart */}
    <div>
    <HorizontalBar
    height={400}
    width={1300}
    options={{maintainAspectRatio:false}}
    type={"horizontalBar"}

    data={{
        labels:date,
        datasets:[
            {
                label: 'True Prices',
                backgroundColor: 'rgb(255, 102, 102)',
                borderColor: 'rgb(0, 61, 102)',
                borderWidth: 0,
                pointRadius:2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:hbl_true,
                fill:false,
                showLine:false
            },
            {
                label: 'Predicted Prices',
                data:hbl_pred,
                fill:false,
                pointRadius:0,
                backgroundColor: 'green',
                borderColor: 'rgb(26, 163, 255)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                
            }
        ]
    }}
    />
    </div>
    <div>



</div>
    
    </div>

    <div className="block-example border border-primary" style={{display:'flex',justifyContent:"center", alignItems:"center",marginTop:"50px",width:"1300px",height:"1500"}} >
    
    {/* this is a Line Chart */}
    <div>
    <Bar
    height={400}
    width={1300}
    options={{maintainAspectRatio:false}}
    data={{
        labels:date,
        datasets:[
            
            {
                label: 'True Prices',
                backgroundColor: 'rgb(255, 102, 102)',
                borderColor: 'rgb(0, 61, 102)',
                borderWidth: 0,
                pointRadius:2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:hbl_true,
                fill:false,
                showLine:false
            }
            ,
            {
                label: 'Predicted Prices',
                data:hbl_pred,
                fill:false,
                pointRadius:0,
                backgroundColor: 'green',
                borderColor: 'rgb(26, 163, 255)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                type:'line'
                
            }
            
        ]
    }}
    />
    </div>
    <div>



</div>
    
    </div>

   

    </div>



}
export default Barchart