import "./homepage.css";
import { useState } from "react";
import { Pagination } from '@mantine/core';

export default function Homepage(){

    //Pagination
    const [activePage,setPage] = useState(1);
    const [recordPerPage, setRecordPerPage] = useState(5);

    const [jobs,setJobs] = useState([{
        title:"Blockchain intern",
        company:"Binance",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern3",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern4",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern5",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern6",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern7",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern8",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern9",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    },{
        title:"Solidity intern10",
        company:"Consensys",
        imgPath:"./binance.png",
        location:"Remote"
    }])

    const lastIndex = activePage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const currentRecords = jobs.slice(firstIndex,lastIndex);

    //Get total number of jobs
    function getTotalJobs(){

        let count =0;
        jobs.map(obj=>{
            count++;
            
        })
        return count;
    }


    function element(title,company,imgPath,location,index){
        return(
     
            <div className="job-box" key={index}>
                <div className="job-first">
                    <div className="job-logo">
                        <img src={imgPath} alt="logo"/>
                    </div>

                    <div className="job-info">
                        <div className="title">
                            <span>{title}</span>
                        </div>
                        <div className="company">
                            <span>{company}</span>
                        </div>
                    </div>
                </div>

                <div className="location">
                    <h5>{location}</h5>
                </div>
            </div>
            

        );

    }

    const content = currentRecords.map((obj,i)=>{
        return (
            <>
                {element(obj.title,obj.company,obj.imgPath,obj.location,i)}
                <br/>
            </>
        )
    })
    console.log(activePage);


    return(
        <div className="homepage">
            <div className="job-container ">

                {content}

                <Pagination page={activePage} onChange={setPage} total={Math.ceil(getTotalJobs()/5)}/>
            </div>


        </div>

    )
}