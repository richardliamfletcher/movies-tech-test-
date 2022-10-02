import { useEffect, useState } from "react";
import { TimeSeriesObjectType } from "../Components/Types";

function TimeSeries() {
    const timeSeriesUrl = 'https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data';
    const [timeSeriesData, setTimeSeriesData] = useState([]);

    // time series bit
    useEffect(() => {
        fetch(timeSeriesUrl)
        .then((response) => response.json())
        .then((data) => {
            setTimeSeriesData(data);
        });
    },[]);

    return(
        <>
            {
                timeSeriesData.map((timeSeriesObject: TimeSeriesObjectType) => {
                    var date = new Date(timeSeriesObject.timestamp * 1000);
            
                    return(
                    <div className= "time-series-item">
                        <div>
                            {date.toLocaleDateString("en-GB")}
                        </div>
                        <div>
                            {timeSeriesObject.value}
                        </div>
                    </div>);
                })
            }
        </>
    )
  };
  
export default TimeSeries;