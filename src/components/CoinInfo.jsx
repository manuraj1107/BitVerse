import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import Chart from 'chart.js/auto';
import {HistoricalChart} from "./styles/api";
import {
    CircularProgress,
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core";
import {Line} from "react-chartjs-2";
import {chartDays} from './styles/data';
import SelectButton from './styles/SelectButton';


const CoinInfo = () => {

    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState(1);
    const fetchHistoricalData = async() => {
        const {data} = await axios.get(HistoricalChart(days));
        setHistoricalData(data.prices);
    };

    useEffect(() => {
     fetchHistoricalData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: "dark",
        },
    });

const useStyles = makeStyles((theme) => ({
container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
        width :"100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
    },
}



}));

const classes = useStyles();
  return (
    <ThemeProvider theme= {darkTheme}>
      <div className={classes.container}>
      {/* {button} */}
      {
          !historicalData ? (
              <CircularProgress
              style={{color: "#9AE6B4"}}
              size={250}
              thickness={1}
              />
          ): (
            <>
              <Line
              data={{
                  labels:historicalData.map((coin) => {
                      let date = new Date(coin[0]);
                      let time =
                      date.getHours() > 12 
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`; 

                      return days===1?time:date.toLocaleDateString();
                  }),

                  datasets: [
                      {
                          data:historicalData.map((coin)=>coin[1]),
                          label: `Price ( Past ${days} Days )`,
                          borderColor: "#9AE6B4",

                      },
                  ],
              }}
              options={{
               elements: {
                   point: {
                       radius: 1,
                   },
               },   
              }}
              />
              <div
              style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
              }}
              >
              {chartDays.map((day)=>(
                  <SelectButton
                  key={day.value}
                  onClick={()=>setDays(day.value)}
                  selected={day.value === days}
                  >{day.label}</SelectButton>
              ))}
              </div>
            </>  
          )
      }
      
      </div>
    </ThemeProvider>
  )
}

export default CoinInfo;