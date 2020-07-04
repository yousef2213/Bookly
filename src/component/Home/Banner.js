import React from 'react'
import Banner_1 from '../../image/home/img1.jpeg'
import Banner_2 from '../../image/home/img2.jpg'
import Banner_3 from '../../image/home/img3.jpeg'
import {Link} from 'react-router-dom'
import Img from '../../image/laptop2.jpeg'
import Img2 from '../../image/ext.png'
import {MdAccessTime} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import FavoriteCategories from './FavoriteCategories'
import {AiFillHeart} from 'react-icons/ai'
import styled from 'styled-components'

export default function Banner() {
    return (
        <BannerWrapper className="container-fluid">
            <div className="row py-4">
                <div className="col-md-6 col-lg-8 col-sm-10 mx-auto widh">
                    <h6 className="text-capitalize pb-1 font-main font-weight-bold">featured events</h6>
                    {/* Start */}
                    <div id="carouselExampleCaptions" className="carousel slide banner position-relative" data-ride="carousel">
                    <AiFillHeart className="align-self-center p-2 fav-ico mr-2 icon-heart" width="50" height="50" />
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active position-relative">
                                <img src={Banner_1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block po-abs-banner">
                                    <h3 className="text-left text-uppercase ">apple special events</h3>
                                    <p className="pb-5 text-left">October 30, San Fransisco</p>
                                </div>
                            </div>
                            <div className="carousel-item position-relative">
                                <img src={Banner_2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block po-abs-banner">
                                    <h3 className="text-left text-uppercase">apple special events</h3>
                                    <p className="mb-5 text-left">October 30, San Fransisco.</p>
                                </div>
                            </div>
                            <div className="carousel-item position-relative">
                                <img src={Banner_3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block po-abs-banner">
                                    <h3 className="text-left text-uppercase">apple special events</h3>
                                    <p className="pb-5 text-left">October 30, San Fransisco.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End */}
                </div>
                <div className="col-md-6 col-lg-4 col-sm-10 mx-auto px-3 pt-0">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-capitalize font-main font-weight-bold">My Tickets</h6>
                        <Link to="/MyTickets" className="view-all">view all</Link>
                    </div>
                    {/* Client 1 */}
                    <div className="d-flex justify-content-between client mt-2 p-2">
                        <img src={Img} className="icon-main align-self-center" width="60" height="60" alt=""/>
                        <div>
                            <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                        </div>
                        <img src={Img2} className="icon-main align-self-center p-2 mr-2" width="40" height="40" alt=""/>
                    </div>
                     {/* Client 2 */}
                     <div className="d-flex justify-content-between client mt-2 p-2">
                        <img src={Img} className="icon-main align-self-center" width="60" height="60" alt=""/>
                        <div>
                            <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                        </div>
                        <img src={Img2} className="icon-main align-self-center p-2 mr-2" width="40" height="40" alt=""/>
                    </div>
                     {/* Client 3 */}
                     <div className="d-flex justify-content-between client mt-2 p-2">
                        <img src={Img} className="icon-main align-self-center" width="60" height="60" alt=""/>
                        <div>
                            <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                        </div>
                        <img src={Img2} className="icon-main align-self-center p-2 mr-2" width="40" height="40" alt=""/>
                    </div>
                     {/* Client 4 */}
                     <div className="d-flex justify-content-between client mt-2 p-2">
                        <img src={Img} className="icon-main align-self-center" width="60" height="60" alt=""/>
                        <div>
                            <Link to="/Event" className="text-capitalize mb-0 link-name-event">ul-ux design event 2020</Link>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                        </div>
                        <img src={Img2} className="icon-main align-self-center p-2 mr-2" width="40" height="40" alt=""/>
                    </div>
                </div>
            </div>
            <FavoriteCategories />
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    .banner{
        border-radius: 10px!important;
        height: 100%;
        overflow: hidden;
    }
    .po-abs-banner{
        top: 40%;
        left: 10%;
    }
    .widh{
        height: 370px;
    }
    .icon-main{
        background: #775dff;
        border-radius: 4px;
    }
    .link-name-event{
        color: #212529;
        font-weight: bold;
    }
    .link-name-event:hover{
        text-decoration: none;
        color: #000;
    }
    .fav-ico{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
        cursor: pointer;
    }
`