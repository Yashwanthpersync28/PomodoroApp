import { useSelector } from "react-redux";

const Taskdetails=useSelector((state)=>state.user.userTasks.userTask)

export const GetUpdatedAttachement=(id,filename,values)=>{
    
    return Taskdetails.map(event => {
        if(values){
            if (event.id === id) {
               return {
                   ...event,
                  attachement: filename,  
                  };
               }
            }
       else{
           if (event.id === id) {
               return {
                   ...event,
                   attachement: filename,   
               };
             }
          }
        
    });
}