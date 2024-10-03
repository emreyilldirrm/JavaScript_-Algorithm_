export const TwoSums_Challange=(nums,target)=>{
    let RetunVal;

    for (let i = 0; i < nums.length; i++) {
        let num=nums[i];

        let newAR= nums.filter(number=>  number != num );
        
        (newAR[i]+num)==target?RetunVal = i +" " + (i+1):false;   
    }
   return RetunVal?RetunVal:false;
}