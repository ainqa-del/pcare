import React from "react";
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import Httpp from './Httpp.png'
import health from './health.png'
import sessions from './sessions.png'
import metrics  from './metrics.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container, Row, Col, Div, BackgroundImage, Paper, H6, TextInput, } from "qdm-component-library";
import DonutChart from "react-donut-chart";
import Spline from './Spline'
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '19px',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: '#00205C',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(12.5),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-1.5),
    // color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#000000',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',

    },
  }),
);

Chart.register(ChartDataLabels);

const data = {
  name: 'React',
  labels: ['Cache', 'Process', 'Available',],
  datasets: [
    {
      label: 'JOBS',
      data: [40, 30, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],

      hoverOffset: 8,
      options: {
        legend: {

          position: "bottom",

          align: "start"

        }
      }
    },

  ],

};

const option = {
  maintainAspectRatio: true,
  responsive: true,
  legend: false,
  cutout: '60%',
  plugins: {
    datalabels: {
      display: false,
      color: 'white',
    },
    legend: {
      display: true, position: "bottom"
    },
    labels: {
      value: "percentage",
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}

export default function Dashboard() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackgroundImage
        key={"0"}
        backgroundPosition="0% 0%"
        backgroundPositionX="center"
        backgroundPositionY="center"
        backgroundRepeat="no-repeat"
        backgroundRepeatX="no-repeat"
        backgroundRepeatY="no-repeat"
        backgroundPosition='center'
        inLineStyles="[object Object]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 0px)",
        }}
        id={"signIn-BackgroundImage"}>
        <Paper style={{
          backgroundColor: "#FFFFFF",
          height: "510px",
          width: "1250px",
          marginTop: "110px",
          borderRadius: "20px",

        }}>
          <Paper style={{
            backgroundColor: "#56C38E",
            marginLeft: "22px",
            marginTop: "20px",
            marginBottom: "px",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}> <Typography variant="h6" component="div" color="#ffffff" marginLeft="5px"  gutterBottom  style={{ marginTop: "3px", marginLeft: "20px"  }} >
            
          Health
        </Typography>
        <img src={health} alt="health.png" style={{ marginTop: "3px", marginLeft: "20px",position: "absolute",

 }} />
        

            </Paper>
          <Paper style={{
            marginLeft: "325px",
            marginTop: "-77.5px",
            backgroundColor: "#5AA4ED",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}> <Typography variant="h6" component="div" color="#ffffff" gutterBottom  style={{ marginTop: "3px", marginLeft: "20px"  }}   >
          Http
        </Typography>
          <img src={Httpp} alt="Httpp.png" style={{ marginTop: "3px", marginLeft: "20px",position: "absolute",

}}  />
          </Paper>
          <Paper style={{
            marginLeft: "628px",
            marginTop: "-77.5px",
            backgroundColor: "#E75252",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}><Typography variant="h6" component="div" color="#ffffff" gutterBottom     style={{ marginTop: "3px", marginLeft: "20px"  }}  >
          Sessions
        </Typography>
          <img src={sessions} alt="sessions.png" style={{ marginTop: "3px", marginLeft: "20px",position: "absolute",

}}  />
          </Paper>
          <Paper style={{
            marginLeft: "930.5px",
            marginTop: "-77.5px",
            backgroundColor: "#F1A53D",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}><Typography variant="h6" component="div" color="#ffffff" gutterBottom    style={{ marginTop: "3px", marginLeft: "20px"  }}   >
          Metrics
        </Typography>
          <img src={metrics} alt="metrics.png" style={{ marginTop: "3px", marginLeft: "20px"}} />
          </Paper>
          <Paper style={{
            backgroundColor: "#494B64",
            marginTop: "-6.5px",
            marginLeft: "22px",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>5</Paper>
          <Paper style={{
            marginLeft: "325px",
            marginTop: "-77.5px",
            backgroundColor: "#036FA0",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>6</Paper>
          <Paper style={{
            marginLeft: "628px",
            marginTop: "-77.5px",
            backgroundColor: "#80A3DB",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>7</Paper>
          <Paper style={{
            marginLeft: "930.5px",
            marginTop: "-77.5px",
            backgroundColor: "#EEBDDD",
            height: "70px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>8</Paper>

          <Paper style={{
            marginLeft: "22px",
            marginTop: "-9px",
            backgroundColor: "",
            height: "320px",
            width: "650px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

          }}>


            <Spline />


          </Paper>
          <Paper style={{
            marginLeft: "680px",
            marginTop: "-328px",
            backgroundColor: "",
            height: "320px",
            width: "550px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
            <div style={{ width: '306px', marginLeft: '230px' }}>

              <Doughnut
                data={data}
                options={option}
              />
            </div>


          </Paper>
        </Paper>
        <Paper style={{
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          height: "120px",
          width: "1257px",
          marginTop: "-510px",
          marginLeft: "-1260px",
        }}>
          <img src={Anqlogo} alt="anqlogo.svg" style={{ marginTop: "15px", marginLeft: "-3px" }} />

          <Box sx={{ width: '20%' }}>
            <Box >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example">
                <StyledTab label="Dashboard" />
                <StyledTab label="Leader Board" />
              </StyledTabs>
            </Box>
          </Box>


          <Paper style={{
            background: "white",
            height: "55px",
            width: "200px",
            marginLeft: "1050px",
            borderRadius: "10px",
            marginTop: "-105px",

          }}>
            <span>     </span>
            <Stack direction="row" spacing={2} >
              <Avatar sx={{ width: 45, height: 45, marginLeft: "4.5px", marginTop: "4.5px" }} variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Sathish Rakin</Stack>

          </Paper>
        </Paper>
      </BackgroundImage>
    </div>
  )
}
