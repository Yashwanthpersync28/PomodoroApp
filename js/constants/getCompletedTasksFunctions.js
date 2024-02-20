//to filter the data and get completed tasks of today date
export const getCompletedTasksToday = (data) => {
    const today = new Date().toISOString().split('T')[0];
    return data.filter(item => item.completed && item.completedDate === today);
  };
//to filter out today tasks only and not completed tasks
export const getTasksToday= (data) => { 
  const today = new Date().toISOString().split('T')[0];
  console.log('todaybndfj',today);
  return data.filter(item =>item.Duedate === today && !item.completed);
}
//to get tomorrow tasks
export const getTasksTomorrow=(data)=>{
  const Tomorrow=new Date()
  Tomorrow.setDate(Tomorrow.getDate() + 1);
  return data.filter((item)=>item.Duedate===Tomorrow.toISOString().split('T')[0] && !item.completed)
}
//to get completed tasks tomorrow but completed today only
export const getCompletedTasksTomorrow = (data) => {
  const Tomorrow=new Date()
  Tomorrow.setDate(Tomorrow.getDate() + 1);
  return data.filter((item)=>item.completed && item.completedDate===Tomorrow.toISOString().split('T')[0])
};
//to get completed tasks from yesterday
  export const getCompletedTasksYesterday = (data) => {
    const yesterday=new Date()
    yesterday.setDate(yesterday.getDate() - 1);
    return data.filter((item)=>item.completed && item.completedDate===yesterday.toISOString().split('T')[0])
  };
    //to get the total focus time of the data
   export  const calculateFocusTime = (tasks) => {
        return tasks.reduce((total, task) => total + task.focusTime, 0);
      };

  // //to calculate focus time in seconds,minutes,hours
 export const formatTime = (totalFocusTime) => {
        if (totalFocusTime < 60) {
          return `${totalFocusTime}s`;
        } else if (totalFocusTime < 3600) {
          const minutes = Math.floor(totalFocusTime / 60);
          const remainingSeconds = totalFocusTime % 60;
          return `${minutes}m ${remainingSeconds}s`;
        } else {
          const hours = Math.floor(totalFocusTime / 3600);
          const remainingMinutes = Math.floor((totalFocusTime % 3600) / 60);
          const remainingSeconds = totalFocusTime % 60;
          return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
        }
      };    

      //search functionality for recomended tasks
      export const GetRecomendedTasks=(data,InputText)=>{
            return data.filter(task => task.Taskname.toLowerCase().includes(InputText.toLowerCase()));
      }


      //to get data for this week
      export const getTasksThisWeek = (data,thisweek) => {
        const today = new Date();
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Calculate end of the week
      
        const todayISO = today.toISOString().split('T')[0];
        const endOfWeekISO = endOfWeek.toISOString().split('T')[0];
      if(thisweek){
        return data.filter(item => {
          const itemDueDate = new Date(item.Duedate);
          return itemDueDate >= today && itemDueDate <= endOfWeek && !item.completed;
        })}
        else{
        return data.filter(item => {
          const itemDueDate = new Date(item.Duedate);
          return  itemDueDate > endOfWeek && !item.completed;
        })
      }
      };
      //to filter the data and get completed tasks of today date
export const getCompletedTasks = (data) => {
  return data.filter(item => item.completed);
};

export const getTodayCompletedfocusTime=(data)=>{
    const focustime=calculateFocusTime(data)
    const finalfocustime=formatTime(focustime)
    return finalfocustime

}

export const getCompletedTasksThisWeekOrTwoWeeks = (data, weeks) => {
  const today = new Date();
  const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
  const endOfTwoWeeks = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (13 - today.getDay()));

  let endDate;
  if (weeks === 1) {
      endDate = endOfWeek;
  } else if (weeks === 2) {
      endDate = endOfTwoWeeks;
  } else {
      throw new Error('Unsupported number of weeks. Supported values are 1 and 2.');
  }

  return data.filter(item => {
      const completedDate = new Date(item.completedDate);
      return item.completed && completedDate >= startOfWeek && completedDate <= endDate;
  });
};


// export const getCompletedTasksThisMonth = (data) => {
//   const today = new Date();
//   const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//   const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1);

//   return data.filter(item => {
//       const completedDate = new Date(item.completedDate);
//       return item.completed && completedDate >= startOfMonth && completedDate <= endOfMonth;
//   });
// };

export const getCompletedTasksThisMonth = (data) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return data.filter(item => {
      const completedDate = new Date(item.completedDate);
      return item.completed && completedDate.getMonth() === currentMonth && completedDate.getFullYear() === currentYear;
  });
};
