import dotenv, { config } from "dotenv";

dotenv.config();

let Config={}

export const baseurl= "https://apinifi.sit.ainqaplatform.in"



export const __keyClockLogin__ = `${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}`;



export const urls=`${__keyClockLogin__}/api/v1/orgUserSignIn`

Config.url=`${process.env.REACT_APP_BASE_URL_PROTOCAL}://${process.env.REACT_APP_BASE_URL_HOST}:${process.env.REACT_APP_BASE_URL_PORT}`;




export default Config;