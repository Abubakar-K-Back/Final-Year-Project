import React from 'react'
import Navigations from './Navigations'
import {Dropdown, Card,Button} from 'react-bootstrap'
import Broker from './Broker'
import background from './Images/loginpageimage.jpg'

export default function BrokerList(props) {



    
    return (
        <div style={{ backgroundImage: `url(${background})`,height:'730vh',  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}>

<Navigations/>

<h1 class="display-4" style={{ opacity:"initial",marginRight:"50px",marginLeft:"50px",marginTop:"200px",color:"white",textAlign:"center",textJustify:"auto",backgroundColor: 'rgba(0,0,0,0.8)',borderRadius: '10px'}} >

Contact Brokers
</h1>

                <Broker
                    name={"Mr. Muhammad Shahzad Haider Zaidi"}
                    company={"128 Securities (Pvt) Ltd"}
                    email={"ali.akhan@live.com"}
                    cell={"0336-2198579"}
                    address={"Room # M-12, Mezzanine Floor, LSE Plaza. 19- Khayaban-e-Aiwan- e-Iqbal, Lahore."}
                    teri={"Lahore"}

                />

            
            <Broker
                    name={"Mr. Muhammad zahid Ali Habib"}
                    company={"Aba Ali Habib Securities (Pvt) Ltd"}
                    email={"zahid@abaalihabib.com"}
                    cell={"	0300-8259270	"}
                    address={"	Suit No 419, 419-A, 421, 4th Floor, Pakistan Stock Exchange Building, Stock Exchange Road, Karachi."}
                    teri={"karachi"}

                />

            <Broker
                    name={"	Mr. Syed Muhammad Umer Abbasi"}
                    company={"Abbasi & Company (Pvt) Ltd"}
                    email={"umar@abbasiandcompany.com"}
                    cell={"0321-4643434"}
                    address={"42-Shahrah-e-Quaid-e-Azam, Lahore."}
                    teri={"lahore"}

                />

            <Broker
                    name={"Mr. Asif Baig Mirza"}
                    company={"ABM Securities (Pvt) Ltd"}
                    email={"abm_securities@hotmail.com"}
                    cell={"	0300-8421766"}
                    address={"Office No. 506, 5th Floor, LSE Plaza, 19-Khayaban-e-Aiwan-e- Iqbal, Lahore."}
                    teri={"lahore"}

                />


            <Broker
                    name={"	Mr. Muhammad Ali"}
                    company={"ACM Global (Pvt) Ltd"}
                    email={"m.aliibrahim9@gmail.com	"}
                    cell={"0300-8263707"}
                    address={"G-31,Ground Floor, Main PSX Building, Stock Exchange Road, Karachi"}
                    teri={"karachi"}

                />
                <Broker
                    name={"	Mr. Amin Yousuf"}
                    company={"AKY Securities (Pvt) Ltd"}
                    email={"commoditytraders2014@gmail. com	"}
                    cell={"	0332-9233118"}
                    address={"Room No. 48, 1st Floor, PSX Building Stock Exchange Road, Karachi."}
                    teri={"karachi"}

                />
                <Broker
                    name={"Mr. Aftab Q. Munshi"}
                    company={"Al Habib Capital Markets (Pvt) Ltd"}
                    email={"aftab.munshi@ahcml.com"}
                    cell={"	0333-3537038"}
                    address={"GF-01, Techno City, Hasrat Mohani Road, Karachi"}
                    teri={"karachi"}

                />
                <Broker
                    name={"	Mr. Noman"}
                    company={"Adam Securities Ltd"}
                    email={"noman_adrd@yahoo.com"}
                    cell={"0302-8267744"}
                    address={"Room No. 806-814, 8th Floor Stock Exchange Building, Stock Exchange Road, Karachi."}
                    teri={"karachi"}

                />
                <Broker
                    name={"	Mr. Muhammad Nadeem Ejaz"}
                    company={"	Adeel & Nadeem Securities (Pvt) Ltd"}
                    email={"adeelnadeem123@hotmail.com"}
                    cell={"0300-8448281"}
                    address={"adeelnadeem123@hotmail.com"}
                    teri={"lahore"}

                />
                <Broker
                    name={"MR.Muhammad Farid Alam"}
                    company={"AKD Securities Ltd"}
                    email={"info@akdsecurities.net"}
                    cell={"	0300-8280942"}
                    address={"602, Continental Trade Centre, Block-8 Clifton, Karachi."}
                    teri={"karachi"}

                />



            
       </div>
    )
}
