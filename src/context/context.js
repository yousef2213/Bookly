import React, { Component, createContext } from 'react'
import Img3 from '../image/3.png'
import Img2 from '../image/2.png'

const BooklyContext = createContext();

class BooklyProvider extends Component {

    state = {
        testImg: false,
        src1 : Img3,
        src2 : Img2,
        text: false,
        Login: false,
        register: false,
        SeeLineLogin: false,
        SeeLineRegister: false,
        Users: []
    }
    ChangeSeeLineLogin = () =>{
        this.setState({
            SeeLine: !this.state.SeeLine
        })
    }
    ChangeSeeLineRegister = () =>{
        this.setState({
            SeeLineRegister: !this.state.SeeLineRegister
        })
    }

    handelClick= (e) =>{
        e.preventDefault();
        let Email = document.querySelector("#email-Sign").value;
        let Password = document.querySelector("#password-Sign").value;
        let User = {
            Email,
            Password
        };
        if(Email === "Super@super.com" && Password === "1234"){
            this.setState({
                Users: User,
                Login: true
            })
        }
        if(Email !== "Super@super.com"){
            alert("Please Sign in")
        }   
    }
    CHangeImgKeepMeSign = () =>{
        this.setState({
            testImg: !this.state.testImg
        })
        if(this.state.testImg === false){
            document.querySelector('.img-shape').src = this.state.src2
        }else{
            document.querySelector('.img-shape').src = this.state.src1
        }
    }

    HandelSeePasswordLogin = () =>{
        this.setState({
            text: !this.state.text
        })
        let Password = document.querySelector("#password-Sign");
        if(this.state.text === false ){
            Password.type = "text"
        }
        if(this.state.text === true ){
            Password.type = "password"
        }
    }
    HandelSeePasswordRegister = () =>{
        this.setState({
            register: !this.state.register
        })
        let Password = document.querySelector("#password-Register");
        if(this.state.register === false ){
            Password.type = "text"
        }
        if(this.state.register === true ){
            Password.type = "password"
        }
    }

    render() {
        return (
            <BooklyContext.Provider value={{
                ...this.state,
                handelClick: this.handelClick,
                HandelSeePasswordLogin: this.HandelSeePasswordLogin,
                CHangeImgKeepMeSign: this.CHangeImgKeepMeSign,
                ChangeSeeLineLogin: this.ChangeSeeLineLogin,
                ChangeSeeLineRegister: this.ChangeSeeLineRegister,
                HandelSeePasswordRegister: this.HandelSeePasswordRegister
            }}>
                {this.props.children}
            </BooklyContext.Provider>
        )
    }
}

const BooklyConsumer = BooklyContext.Consumer;

export {BooklyProvider,BooklyConsumer}