import {  AlertOctagon, BellRing, CornerLeftUpIcon, ScrollText} from "lucide-react";
import Alert from "./Components/UI/Alert/Alert";





const App= () => {
  return ( <>
  <Alert type={'alert-upgrade'} 
  icon={< BellRing size={25} /> } 
  title={'Upgrade Your Plan'}
  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis, molestiae iusto perferendis eaque, totam quisquam enim similique alias voluptates nostrum impedit fugiat maiores, quibusdam dolorum quas reprehenderit omnis inventore.'/>
  <Alert type={'alert-note'} 
  icon={< ScrollText size={25} /> } 
  title={'Note'}
  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis, molestiae iusto perferendis eaque, totam quisquam enim similique alias voluptates nostrum impedit fugiat maiores, quibusdam dolorum quas reprehenderit omnis inventore.'/>
  <Alert type={'alert-error'} 
  icon={< AlertOctagon size={25} /> } 
  title={'Something went wrong'}
  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis, molestiae iusto perferendis eaque, totam quisquam enim similique alias voluptates nostrum impedit fugiat maiores, quibusdam dolorum quas reprehenderit omnis inventore.'/>
  <Alert type={'alert-order'} 
  icon={< CornerLeftUpIcon size={25} /> } 
  title={'Your Order has been confimred'}
  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis, molestiae iusto perferendis eaque, totam quisquam enim similique alias voluptates nostrum impedit fugiat maiores, quibusdam dolorum quas reprehenderit omnis inventore.'/>
  
          </> );
}

export default  App;