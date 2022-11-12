import React,{useState} from 'react'
import "./App.css"
const ip=['192.168.1.4','192.168.1.5','192.168.1.6','192.168.1.7','192.168.1.10','192.168.1.11']
const p="# nmap 192.168.0.0/24 \n Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-06 21:00 CET Nmap scan report for Archer.lan (192.168.0.1) Host is up (0.0046s latency). Not shown: 995 closed ports PORT      STATE SERVICE 22/tcp    open  ssh 53/tcp    open  domain 80/tcp    open  http 1900/tcp  open  upnp 20005/tcp open  btx nmap 192.168.0.0/24 10.80.0.0/24";
function visible(){
    console.log("first");
const v=document.getElementById('details');
v.setAttribute("style","opacity:1");
}
const Body = () => {

  const [data,setData]=useState('')
  return (
    <div className='body'>
        <div className='container'>
        <div className='buttons' onClick={visible}>
          {ip.map(name => (<div>
         <button id='v' onClick={()=>setData(name)}>{name}</button>
         <div id='details'>
          <button id="data">{data}</button>
          {p}
          
          </div>
          </div>))}
         
        </div>
        </div>
        </div>
      
        
    
  )
}

export default Body