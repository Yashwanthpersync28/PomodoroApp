//to filter the data and get completed tasks of today date
export const getCompletedTasksToday = (data) => {
    const today = new Date().toISOString().split('T')[0];
    return data.filter(item => item.completed && item.completedDate === today);
  };
//to filter out today tasks only and not completed tasks
export const getTasksToday= (data) => { 
  const today = new Date().toISOString().split('T')[0];
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
  Tomorrow.setDate(Tomorrow.getDate() - 1);
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