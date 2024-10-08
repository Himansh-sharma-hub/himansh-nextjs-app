import React  from 'react'

const Achievementslist =[
  {
    metric: "Projects",
    value: "500+",
  },
  {
    metric: "users",
    value: "20+",
  },
  {
    metric:"awards",
    value:"0",

  },
  {
    metric: "years",
    value:"2+",
  },
];
const AchievementsSection=() =>{
  return(
    <div className= "py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353f] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
      
      {
        Achievementslist.map((achievement,index) =>
        {
           return(
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
              <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
           );
 }  )}
      
  
      </div>
    </div>
  )
}
export default AchievementsSection 