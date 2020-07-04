import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Default() {
    return (
        <DefaultPage className="container-fluid p-0">
            <div className="Default">
                <div className="Default_Banner">
                    <h1 className="text-center">404</h1>
                    <h4 className="text-uppercase text-center mb-0">page not found</h4>
                    <Link className="text-uppercase btn-Default font-main" to="/">return home</Link>
                </div>
            </div>
        </DefaultPage>
    )
}

const DefaultPage = styled.div`
    .Default_Banner{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        font-size: 50px;
    }
    .btn-Default{
        background: #775dff;
        color: #fff;
        font-family: 'Montserrat', sans-serif!important;
        padding: 12px 50px;
        font-size: 14px;
        letter-spacing: 3px;
        border-radius: 5px;
    }
    .btn-Default:hover{
        text-decoration: none;
        color: #fff;
    }
`