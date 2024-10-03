export const timediffrence=(t1,t2)=>{
    let hours=Number(t2.split(":")[0])-Number(t1.split(":")[0]);
    let minutes=Number(t2.split(":")[1])-Number(t1.split(":")[1]);
    console.log(hours,minutes)

    if(minutes<0) {hours--; minutes=minutes+60;}
    if(hours<0)  {hours=hours+24;}

    if(minutes<10) minutes="0"+minutes;
    if(hours<10)  hours="0"+hours;

    console.log(hours+":"+minutes)
    console.log(t1+" "+t2)
}