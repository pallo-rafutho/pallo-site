
import React from 'react';
import './idchecker.css'

function Idc() {
  function cdate(y,m,d){

    if(m<1 || m>12)
    {
        return false;
    }

    if(m===2 && d>29 && (y%4)===0)
    {
        return false;
    }
	if(m===2 && d>28 && (y%4)!==0)
    {
        return false;
    }

    if( (m===1 || m===3 || m===5 || m===7 || m===8 || m===10 || m===12) && d>31)
    {
        return false;
    }
    if( (m===4 || m===6 || m===9 || m===11) && d>30)
    {
        return false;
    }

    return true;

  }

  function gend(g)
	{
	    if(g>4999)
	        return "male";
	    else
	        return "female";
	}

  function checksum( c, chec)
	{
	    let s,a,b;
	    let f=0;
	    
	    
	    for(let i=0;i<=10;i+=2)
	    {
	        s = chec.substring(i,i+1);
	        f += parseInt(s);
	        
	    }

	    
	    for(let i=1;i<=11;i+=2)
	    {
	        let d=0;
	        let t=0;

	        a = chec.substring(i,i+1);
	        t = parseInt(a);
	        t = t*2;
	        if(t>=10)
	        {
	            b= t.toString();
	            t= parseInt(b.substring(0,1));
	            d= parseInt(b.substring(1,2));

	        }

	        f += t + d;
	        d=0;
	        
	    }
	    

	    
	    while(f>9)
	    {
	        f=f-10;
	    }

	    
	    if(( f===0 && c===0) || (10-f===c))
	    {
	        
	        return true;
	        
	    }
	    else 
	    {
	        
	        return false;
	    }


	}
  function check(){
    const txt = document.getElementById('idnum');
    const res = document.getElementById('info');

    let me=txt.value;
	  let yy,mm,dd;
	  let gender, gg;
	  let id;


      yy= me.substring(0, 2);
	    mm= me.substring(2,4);
	    dd= me.substring(4,6);
	    let d=parseInt(dd);
	    let m=parseInt(mm);
	    let y=parseInt(yy);

      gg= me.substring(6,10);
	    let g= parseInt(gg);
	    
	    let che=cdate(y,m,d);
	    if(che===false)
      {
        res.innerHTML ="invalid date id is invalid";
      }
      else
	    {
	        gender= gend(g);

	        id= me.substring(12,13);
	        let c= parseInt(id);

	        let val= checksum(c,me);

	        if(val===false)
	        {
	        	res.innerHTML ="invalid id number";
	        }
	        if(val===true)
	        {
	        	res.innerHTML ="ID number is valid: \n";
	        	res.innerHTML +="\n birthday: "+ d +"/"+m+"/"+y+"\n"; 

	        	res.innerHTML +=" gender \n: "+gender;


	        }
        }
    
  }

  

  return (
    <div className="Idc">
      
      <input className='inp' type="text" id="idnum"></input>
      <input className='but' type="button" value="enter" onClick={check}></input>  

      <p class="output" id="info" className="mac"></p>  
      

             
            
    </div>
  );
}

export default Idc;
