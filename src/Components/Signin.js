import React from "react";
import backgroundImage from './d1.png'
import Anqlogo from './anqlogo.svg'
import { baseurl } from "./urlconst"
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    // Avatar,
    Div,
    Button,
    BackgroundImage,
    Paper,
    H6,
    TextInput,
} from "qdm-component-library";
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            password: "",
            error: "",
        };
    }

    changeState = (key, value) => {
        console.log(key, value);
        this.setState({
            [key]: value,
        });
    };

    onSubmit = (e) => {
        const baseurls = process.env.REACT_APP_BASE_URL
        var temp = {
            "username": this.state.emailId,
            "password": this.state.password
        }
        var converter = btoa(JSON.stringify(temp))
        console.log("converted", converter)
        var data = converter;
        var configs = {
            method: 'post',
            url: `${baseurl}/api/v1/orgUserSignIn`,
            headers: {
                'Content-Type': 'text/plain'
            },
            data: data
        };
        

        
        axios(configs)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    styles = {
        labelStyle: {
            color: "#6F6F6F",
            fontSize: "12px",
            marginBottom: "7px",
            fontStyle: "lato",
        },
    };

   
    render() {
        return (
            <div id={"signIn-parent-div"}>
                <Container
                    key={"0"}
                    name="container"
                    fluid={true}
                    style={{
                        backgroundColor: "",
                        height: "100vh",
                        padding: "0px",
                    }}
                    id={"signIn-Container"}
                >
                    <Row
                        key={"0"}
                        alignItems="stretch"
                        direction="row"
                        justify="flex-start"
                        spacing=""
                        style={{ backgroundColor: "#ffffff", height: "" }}
                        id={"signIn-Row"}
                    />

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
                        id={"signIn-BackgroundImage"}

                    >
                        <img src={Anqlogo} alt="anqlogo.svg" style={{ marginBottom: "550px", marginRight: "335px" }} />
                        <Paper
                            key={"0"}
                            children="Paper"
                            variant="elevation"
                            elevation="1"
                            style={{
                                width: "318px",
                                height: "441px",
                                left: "561px",
                                marginRight: "500px",
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                padding: "32px",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                                borderradius: "20px",
                                display: "",
                            }}
                            id={"signIn-Paper"}
                        >
                            <H6
                                name="Sign In"
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "500",
                                    color: "#101010",
                                    width: "110px",
                                    height: "43px",
                                    marginRight: "160px",
                                    marginTop: "30px",
                                    top: "344px",
                                    fontStyle: "lato",
                                    fontWeight: 'bold',
                                    textalign: "center",
                                    lineHeight: "43px",
                                    color: "#000000"
                                }}
                                id={"signIn-H6-Sign-In"}
                            />
                            <H6
                                className="pc_regular"
                                key={"1"}
                                name="Please enter details below to continue"
                                style={{
                                    fontSize: "12px",
                                    width: "256px",
                                    height: "25px",
                                    color: "#A0A0A0",
                                    fontStyle: "lato",
                                    marginBottom: "17px",
                                    marginTop: "10px",
                                    fontfamily: "Lato",
                                    left: "592px",
                                    top: "395px",
                                    lineHeight: "17px"
                                }}
                                id={"signIn-H6-Sign-in-registered"}
                            />
                            <TextInput
                                isRequired={true}
                                label="Email"
                                placeholder="Registered email"
                                labelStyle={this.styles.labelStyle}
                                style={{
                                    margin: "auto",
                                    marginTop: "7px",
                                    marginBottom: "19px",
                                    borderColor: "E1E1E1C",
                                    borderRadius: "25px",
                                    fontSize: "10px",
                                    fontStyle: "lato",
                                    height: "23px",
                                    width: "234",
                                    display: "flex",
                                    align: "center"
                                }}
                                hoverColor="#0071F2"
                                value={this.state.emailId}
                                onChange={(e) => this.changeState("emailId", e.target.value)}
                                id={"signIn-H6-Email-Id-registered"}
                            />
                            <Div style={{ position: "relative" }}>
                                <TextInput
                                    isRequired={true}
                                    type="password"
                                    label="Password"
                                    placeholder="valid password"
                                    labelStyle={this.styles.labelStyle}
                                    style={{
                                        margin: "auto",

                                        marginBottom: "10px",
                                        borderColor: "E1E1E1C",
                                        borderRadius: "25px",
                                        fontSize: "10px",
                                        height: "23px",
                                        width: "234",
                                        display: "flex",
                                        align: "center"
                                    }}
                                    hoverColor="#0071F2"
                                    value={this.state.password}
                                    onChange={(e) =>
                                        this.changeState("password", e.target.value)
                                    }
                                    id={"signIn-H6-User-Password-registered"}
                                />
                                <Div style={{ position: "", right: 0, top: 0 }}>
                                    <H6
                                        style={{
                                            ...this.styles.labelStyle,
                                            color: "rgb(0, 113, 242)",
                                            cursor: "pointer",
                                            fontStyle: "lato",
                                            fontweight: "600",
                                            fontSize: "12px",
                                            lineHeight: "14px",
                                            marginLeft: "155px",
                                            color: "#00205C"
                                        }}
                                        id={"signIn-H6-User-forgotPassword"}
                                    >
                                        Forgot Password?
                                    </H6>
                                </Div>
                            </Div>
                            {this.state.error && (
                                <H6
                                    name={this.state.error}
                                    style={{
                                        fontSize: "12px",
                                        color: "red",
                                        textAlign: "left",
                                        fontStyle: "lato",
                                    }}
                                    id={"signIn-H6-error"}
                                />
                            )}
                            <Button
                                className="pc_medium"
                                disabled={this.props.oraganizationSignin?.loading}
                                type="button"
                                name="Sign In"
                                style={{
                                    margin: "auto",
                                    marginTop: "35px",
                                    width: "126px",
                                    top: "603px",
                                    display: "flex",
                                    justifyContent: "center",
                                    fontStyle: "lato",
                                    fontSize: "14px",
                                    lineHeight: "6px",
                                    backgroundColor: "#00205C",
                                    borderRadius: "25px",
                                    height: "23px",
                                }}
                                id={"signIn-button-handlesendOtp"}
                                onClick={(e) => this.onSubmit(e)}

                            />
                        </Paper>

                    </BackgroundImage>
                </Container>

            </div>
        );
    }
}


export default SignIn

