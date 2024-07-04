import { ReactNode, useState } from 'react';
import './index.scss';

import {  X } from 'lucide-react';
import { AlertTypes } from '../../../Types';

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description: string
}


const Alert= ({type , icon , title , description} : IProps ) => {
  const [display , setDisplay] = useState(true);
  const handleDisplay = ()=>{
    setDisplay(!display);
  }
  return ( <>
<div className={display? type : 'alert-hidden'}> 
  <div className='alert-header'>
    <div className="alert-title">
   <span> {icon} </span>
      <h4>
        {title}
      </h4>
      </div>
      <span onClick={handleDisplay}><X size={25}/> </span>
    </div>
      <p>{description}</p>
      
</div>    
          </> );
}

export default  Alert;