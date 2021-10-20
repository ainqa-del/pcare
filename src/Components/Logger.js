import React from "react";
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container, Row, Col, Div, BackgroundImage, Paper, H6, TextInput, } from "qdm-component-library";
import Typography from '@mui/material/Typography';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import SearchBar from "material-ui-search-bar";




export default function Logger() {
  const [value, setValue] = React.useState();

  
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

<KeyboardBackspaceOutlinedIcon style={{
          backgroundColor: "",
          height: "",
          marginLeft:"19px",
          width: "20px",
          marginTop: "15px",marginBottom:"-35px"
         }}  onclick = {window.history.back()}/>    

<Typography variant="h6" component="div" color="#oooooo" marginLeft="8px"  gutterBottom  style={{ marginTop: "9px", marginLeft: "50px",marginBottom:"-34px" ,fontFamily:"lato" }} >
            
            Loggers
          </Typography>

          < SearchBar  style={{ marginTop: "1px", marginLeft:"1000px",width:"179px",marginBottom:"-35px"}}
          
          value={value}

          onChange={(e) => setValue(e.target.value)}

    onRequestSearch={() => Logger(value)}/>

          <Paper style={{
          backgroundColor: "#ooob",
          height: "400px",
          width: "1200px",
          marginLeft:"23px",
          marginTop: "50px",
          borderRadius: "20px",
          boxShadow:"3px"

        }}>
          <p> Paragraphs are the building blocks of papers. 
            Many students define paragraphs 
            in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of
             sentences that support one main idea. 
             In this handout,we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph </p>


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
            <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Donald Trump </Stack>

          </Paper>
        </Paper>
      </BackgroundImage>
    </div>
  )
}
