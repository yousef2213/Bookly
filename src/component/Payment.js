import React from 'react'
import {MdAccessTime} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {Link} from 'react-router-dom'
import Lap from '../image/laptop2.jpeg'
import Circle1 from '../image/2.png'
import Circle2 from '../image/3.png'
import styled from 'styled-components'
import Favorites from './Categories/Favorites'

export default function books2() {
    return (
        <BookmarkedWrapper className="container-fluid">
            <div className="row">
                <div className="col-10 mt-3">
                    <h6 className="text-capitalize pb-3 pl-2 font-main font-weight-bold">Payment Methods</h6>
                </div>
            </div>
            <div className="row">
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 p-3 b-book">
                        <div className="d-flex justify-content-around">
                            <h6>Ezzat Ahmed</h6>
                            <img src={Circle1} width="18" height="18" className="align-self-center cursor" alt=""/>
                        </div>
                        <div>
                            <h6 className="text-center books2-h6">**** **** **** 2223</h6>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn-books2">Delete</button>
                            <button className="btn-trick">Edit</button>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 book-padding">
                        <div className="d-flex justify-content-around">
                            <h6>Ezzat Ahmed</h6>
                            <img src={Circle2} width="18" height="18" className="align-self-center cursor" alt=""/>
                        </div>
                        <div>
                            <h6 className="text-center books2-h6 mb-0">**** **** **** 2223</h6>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 book-padding">
                        <div className="d-flex justify-content-around">
                            <h6>Ezzat Ahmed</h6>
                            <img src={Circle2} width="18" height="18" className="align-self-center cursor" alt=""/>
                        </div>
                        <div>
                            <h6 className="text-center books2-h6 mb-0">**** **** **** 2223</h6>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relativ e">
                    <div className="client mt-1 book-padding">
                        <div className="d-flex justify-content-around">
                            <h6>Ezzat Ahmed</h6>
                            <img src={Circle2} width="18" height="18" className="align-self-center cursor" alt=""/>
                        </div>
                        <div>
                            <h6 className="text-center books2-h6 mb-0">**** **** **** 2223</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mt-3">
                    <h6 className="text-capitalize pb-3 pl-2 font-main font-weight-bold">Upcoming Events</h6>
                </div>
            </div>
            <div className="row pt-4">
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 p-2">
                        <img src={Lap} className="img-tickets align-self-center rounded" width="90" height="80" alt=""/>
                        <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">QR Code</button>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 p-2">
                        <img src={Lap} className="img-tickets align-self-center rounded" width="90" height="80" alt=""/>
                        <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">QR Code</button>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 p-2">
                        <img src={Lap} className="img-tickets align-self-center rounded" width="90" height="80" alt=""/>
                        <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">QR Code</button>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative">
                    <div className="client mt-1 p-2">
                        <img src={Lap} className="img-tickets align-self-center rounded" width="90" height="80" alt=""/>
                        <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">QR Code</button>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Favorites />
        </BookmarkedWrapper>
    )
}
const BookmarkedWrapper = styled.div`
    .link-name-event{
        color: #212529;
        font-weight: bold;
        padding-left: 100px;
    }
    .link-name-event:hover{
        text-decoration: none;
        color: #000;
    }
`