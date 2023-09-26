import { PieChart, Pie, Tooltip } from 'recharts';


const Statistics = () => {

   const data = [
    {name:"Total Donation", value:370},
    {name:"Your Donation", value:200},
   ];

   

    return (
        <div className='App flex justify-center items-center'>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#FF444A"
            label
          />
          <Tooltip />
        </PieChart>
            
            
        </div>


        
              
              
              


    );
};

export default Statistics;