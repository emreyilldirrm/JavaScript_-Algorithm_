export const countminutes = (str)=>{
    console.log(str)
    let clock=[]
    let clock1 ={}
    let clock2 ={}
    let time1=str.split("-")[0]
    let time2=str.split("-")[1]

    clock1.hours=parseInt(time1.split(":")[0])
    clock2.hours=parseInt(time2.split(":")[0])

    
    clock1.minute=parseInt(time1.split(":")[1].slice(0,2))
    clock2.minute=parseInt(time2.split(":")[1].slice(0,2))

    clock1.meridian=time1.slice(-2)
    clock2.meridian=time2.slice(-2)

    console.log(clock=[clock1,clock2])  

    let result=0;
    let minute=0;
    
    if(clock1.meridian==clock2.meridian){
       minute= (clock2.hours*60+clock2.minute) - (clock1.hours*60+clock1.minute);
       return minute>0?minute: 24*60+minute
        
    }else{
        minute= (clock2.hours*60+clock2.minute) - (clock1.hours*60+clock1.minute);
       return 12*60+minute
    }
}