import React, { useState } from "react";
import './Sidebar.css';
const Sidebar  =()=>
{
  const [isExpended, setExpendState]=useState(false);
  const menuItems =[
   {
    text: "Dashboard"
   },
   {
    text:"User"
   },
   {
    text:"Players"
   },
   {
    text:"Team"
   },

  ];
  return(
   <div  className={ isExpended ? "sidenavcontainer" : "sidenavcontainer-NX"}>
    <div  ClassName="nav-upper">
    <div  ClassName="nav-heading">
    { isExpended && <div ClassName="nav-brand">
    <h1>Show</h1>
    </div>}
  <button className={ isExpended ? "submit submit-in" : " submit submit-out"} onClick={()=>setExpendState(!isExpended)}>
  <span></span>
  <span></span>
  <span></span>
  </button>
<div className="nav-menu"> {menuItems.map(({text})=>
  <a href="" className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
  <img  src="" alt=""/>
  { isExpended && <p>{text}</p>}
  {! isExpended && <div className="tooltip">{text}</div>}
  </a>
  )}

</div>
</div>
</div>
   </div>

 );
};
export default Sidebar;