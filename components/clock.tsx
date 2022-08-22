import * as React from 'react';
// tsdrpfc
import { useEffect,useState } from 'react';
import Circle from './circle';

export interface IAppProps {
}


export default function Clock (props: IAppProps) {
    const [hour,setHour] = useState(0)
    const [minute,setMinute] = useState(0)
    const [seconds,setSeconds] = useState(0)
    const [pm,setPm] = useState(true)


    useEffect(()=>{
        setInterval(()=>{
            let h: number = new Date().getHours(),
             m: number = new Date().getMinutes(),
             s: number = new Date().getSeconds();
            
             if(h >= 12){
                setPm(true);
                h=h-12;
             }
             else{
                setPm(false);
             }

             h = h ? h : 12
             setHour(h);
             setMinute(m);
             setSeconds(s);
        },1000)
    },[])

  return (
    <div className='flex'>
      <div className='flex'> 
      <Circle color="text-[#11CAFD]" percentage={hour} hour /> 
      <Circle color="text-[#11CAFD]" percentage={minute}  /> 
      <Circle color="text-[#11CAFD]" percentage={seconds} /> 
      </div>
      <br/>
      <div>
      <div className='font-bold ${pm ? "opacity-10" : ""}'>AM</div>
      <div className='font-bold ${pm ? "" : "opacity-10"}'>PM</div>
      </div>
    </div>
  );
}
