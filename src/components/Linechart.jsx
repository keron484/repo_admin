import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,  LineController,  LineElement,PointElement, LinearScale, 
    Title,
    DoughnutController,
    ArcElement,
    BarController,
    BarElement,
    Tooltip,
    Legend,
    Decimation,
    CategoryScale } from 'chart.js';
 ChartJS.register(LineController, LineElement, PointElement, CategoryScale,  Decimation,  LinearScale, Legend, Title, DoughnutController, ArcElement, BarController, BarElement, Tooltip);
function Linechart(){
    return(
        <>
         <div className="graph-box w-100 d-flex flex-row align-items-center justify-content-center">
                {
                  <Line 
                  data={{
                      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
                      datasets: [{
                          label: 'My First Dataset',
                          data: [500, 59, 80, 81, 56, 55, 40],
                          fill: true,
                          borderColor: '#FB6E6E',
                          tension: 0.1,
                          backgroundColor: '#FB6E6E'
                      }]
                  }}
                  options={{
                      scales: {
                          y: {
                              grid: {
                                  display: false
                              }
                          },
                         x:{
                            grid: {
                               display: false
                            }
                         }
                      }
                  }}
              />
                }
                </div>
        </>
    )
}
export default Linechart;