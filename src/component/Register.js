import React from 'react'
import {BsEye} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {BooklyConsumer} from '../context/context'
import styled from 'styled-components'

export default function Register() {
    return (
        <BooklyConsumer>
            {value =>{
                const {
                    SeeLineRegister,
                    ChangeSeeLineRegister,
                    HandelSeePasswordRegister
                } = value;
                return(
                    <RegisterComponent resgister_Line={SeeLineRegister} className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-none d-md-block mx-auto p-0 col-logo"></div>
                            <div className="col-lg-6 col-md-6 col-sm-10 col-12 mx-auto align-self-center py-3 px-5">
                                <form className="form-sign p-5">
                                    <h4 className="textSign">Register</h4>
                                     {/* User Name */}
                                     <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="email-Sign">Full Name</label>
                                        <input type="text" className="form-control" placeholder="typed your name here..." id="email-Sign" aria-describedby="emailHelp" />
                                    </div>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="email-Sign">Email</label>
                                        <input type="email" className="form-control" placeholder="typed email here..." id="email-Sign" aria-describedby="emailHelp" />
                                    </div>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="email-Sign">Phone Number</label>
                                        <input type="number" className="form-control" placeholder="typed your phone here..." id="email-Sign" aria-describedby="emailHelp" />
                                    </div>
                                    {/* Password */}
                                    <div className="form-group position-relative">
                                        <label className="font-weight-bold" htmlFor="password-Sign">Password</label>
                                        <input type="password" className="form-control" placeholder="typed password here..." id="password-Register" />
                                        <div className="See-icon" onClick={HandelSeePasswordRegister}>
                                            <BsEye className="see" onClick={ChangeSeeLineRegister} />
                                            <span className="span-icon-see" onClick={ChangeSeeLineRegister}></span>
                                        </div>
                                    </div>
                                    
                                    <button type="submit" className="btn mt-3 btn-sign w-100">Sign Up</button>
                                    <Link to="/" className="btn btn-white btn-reg w-100 mt-3">Sign In Now</Link>
                                </form>
                            </div>
                        </div>
                    </RegisterComponent>
                )
            }}
        </BooklyConsumer>
    )
}


const RegisterComponent = styled.div`
    .textSign{
        font-family: 'Montserrat', sans-serif;
        font-size: 23px;
        font-weight: bolder;
        text-transform: capitalize;
        color: #000000;
        padding-bottom: 20px;
    }
    .See-icon{
        position: absolute;
        top: 37px;
        right: 13px;
    }
    .see{
        color: #645dd5;
        cursor: pointer;
    }
    .span-icon-see{
        position: absolute;
        top: 12px;
        transform: rotate(45deg);
        right: -1px;
        width: 17px;
        height: 2px;
        background: #605bd2;
        display: ${props => props.resgister_Line ? "none" :"block"};
    }
    .btn-sign{
        background: #605bd2!important;
        color: #fff!important;
        font-size: 14px!important;
        font-weight: 600!important;
        font-family: 'Montserrat', sans-serif!important;
        letter-spacing: 1px;
    }
    .btn-reg{
        color: #605bd2!important;
        background-color: #fcfcfc!important;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600!important;
        font-size: 14px!important;
    }
    .form-check-label{
        font-size: 12px;
        font-weight: 500;
    }
    .forget-p{
        font-size: 12px;
        font-weight: 500;
        color: #605bd2;
    }
    .forget-p:hover{
        text-decoration: none;
    }
    .form-sign{
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 0.75);
        -moz-box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 0.75);
        box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 0.75);
    }
    .img-shape{
        cursor: pointer;
    }
`