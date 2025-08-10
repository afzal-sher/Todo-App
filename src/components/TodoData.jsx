import { useEffect,useState } from "react";

export const TodoData = ( ) =>{
     const [timedate, settimedate] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
    
          const formatDate = now.toLocaleDateString();
          const formatTime = now.toLocaleTimeString();
          settimedate(`${formatDate}-${formatTime}`);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    return(
<h2>{timedate}</h2>
    )
}