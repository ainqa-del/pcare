import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  BackgroundImage, Paper } from "qdm-component-library";
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/material/styles';


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '14px',
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
        marginTop: theme.spacing(-8),
        marginLeft: theme.spacing(15),
        // color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#000000',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',

        },
    }),
);

const CustomButtonRoot = styled('span')(`
  background-color: #00205C;
  padding: 6px 25px;
  border-radius: 25px;
  margin-left: 1140px;
  margin-bottom: -400px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);

  &:hover {
    background-color: #00205C;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`);

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1.5),
    },
    '& .MuiInputBase-input': {
        borderRadius: 25,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 12,
        height: 6,
        width: 160,
        marginLeft: 950,
        marginBottom: 3,
        padding: '10px 12px',

        // Use the system font instead of the default Roboto font.
        fontFamily: [
            
            'Roboto'
        ].join(','),
    },
}));


const columns = [
    { field: 'id', headerName: 'id ', width: 95 },
    { field: 's.no', headerName: 'S.No ', width: 95 },
    { field: 'long url', headerName: 'Long URL', width: 150 },
    { field: 'short url', headerName: 'Short URL', width: 150 },
    { field: 'client key', headerName: 'Client Key', type: 'string', width: 130, },
    { field: 'project id', headerName: 'Project ID', sortable: false, width: 160, },
    { field: 'Validity', headerName: 'Validity', width: 120 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'action', headerName: 'Action', width: 170 },

];

const rows = [
    { id: 1,sno:1, Shorturl: 'http://ertgfgere4', longurl: 'http://jsdfygsisdhksdvsk.....', clientkey: 363453, projectid: 'gfsjhsj', Validity: '2days',status:'true' },
    { id: 2, sno:2,shorturl: 'http://ertgfgere4', longurl: 'http://jsdfygsisdhksdvsk.....', clientkey: 425332, projectid: 'gfsjhsj', Validity: '3days',status:'true'  },
    { id: 3, sno:3,shorturl: 'http://ertgfgere4', longurl: 'http://jsdfygsisdhksdvsk.....', clientkey: 4553635, projectid: 'gfsjhsj', Validity: '6days' ,status:'true' },
    { id: 4, sno:4,shorturl: 'http://ertgfgere4', longurl: 'http://jsdfygsisdhksdvsk.....', clientkey: 1635432, projectid: 'gfsjhsj', Validity: '2days' ,status:'true' },
]


export default function DataTable() {
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
                    <Box>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                            </InputLabel>
                            <BootstrapInput placeholder="Search" id="bootstrap-input" />
                            <CustomButton style={{
                                marginTop: "-32px",
                                borderRadius: "20px",
                            }}>+Add</CustomButton>
                        </FormControl> </Box>

                    <div style={{ height: 440, width: '95%', marginTop: '22px', marginLeft: '30px', borderRadius: '30px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            style={{ borderRadius: '20px', borderColor: '#CECECE' ,marginTop:"12px"}}
                        />
                    </div>
                </Paper>
                <Paper style={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    height: "120px",
                    width: "1257px",
                    marginTop: "-510px",
                    marginLeft: "-1260px",
                }}>
                    <img src={Anqlogo} alt="anqlogo.svg" style={{ marginTop: "10px", marginLeft: "-3px" }} />

                    <Box sx={{ width: '20%', marginLeft: '-10px', }}>
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
                        marginTop: "-100px",
                    }}>
                        <Stack direction="row" spacing={2} >
                            <Avatar sx={{ width: 45, height: 45, marginLeft: "4.5px", marginTop: "4.5px" }} variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Stack>
                        <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Sathish Rakin</Stack>
                    </Paper>
                </Paper>
            </BackgroundImage>
        </div>
    );
}


