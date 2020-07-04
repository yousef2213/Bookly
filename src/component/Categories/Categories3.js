import React from 'react'
import Links from '../Links'
import Image from '../../image/Categories/image.jpeg'
import Image2 from '../../image/Categories/image2.jpeg'
import Image3 from '../../image/Categories/image3.jpeg'
import HeartImg from '../../image/heart.png'
import Lap from '../../image/laptop2.jpeg'
import styled from 'styled-components'
export default function Categories3() {
    return (
        <>
            <Categories3Wrapper className="container-fluid">
                <div className="row py-4">
                    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto widh">
                        <h6 className="text-capitalize pb-1 font-main font-weight-bold">featured events</h6>
                        {/* Start */}
                        <div id="carouselExampleCaptions" className="carousel slide banner position-relative" data-ride="carousel">
                            <img src={HeartImg} className="fav-ico" width="50" alt="Favorite" />
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active position-relative">
                                    <img src={Image} className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block po-abs-banner">
                                        <h2 className="text-left font-main text-uppercase ">UI-UX Design event 2020</h2>
                                        <p className="pb-5 text-left">October 30, San Fransisco</p>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative">
                                    <img src={Image2} className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block po-abs-banner">
                                        <h2 className="text-left font-main text-uppercase ">UI-UX Design event 2020</h2>
                                        <p className="mb-5 text-left">October 30, San Fransisco.</p>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative">
                                    <img src={Image3} className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block po-abs-banner">
                                        <h2 className="text-left font-main text-uppercase ">UI-UX Design event 2020</h2>
                                        <p className="pb-5 text-left">October 30, San Fransisco.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End */}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto px-3 pt-0">
                        <div className="d-flex justify-content-between">
                            <h6 className="text-capitalize font-main font-weight-bold">filters</h6>
                        </div>
                        {/* NAv */}
                        <div className="bg-tablist mt-2 px-4 py-4">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item L-i L-i-1">
                                    <a className="nav-link nav-filter nav-filter-1" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                                </li>
                                <li className="nav-item L-i L-i-2">
                                    <a className="nav-link nav-filter nav-filter-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Released</a>
                                </li>
                                <li className="nav-item L-i">
                                    <a className="nav-link nav-filter nav-filter-3" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Soon</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    {/* Select 1 */}
                                    <div>
                                        <h6 className="pt-2 font-weight-bold pb-2">Sub-Categories</h6>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>Choose sub-categories ....</option>
                                                <option defaultValue="1">Design</option>
                                                <option defaultValue="2">graphic</option>
                                                <option defaultValue="3">Developer</option>
                                            </select>
                                        </div>
                                        <button className="btn-Categories3">Design <span>X</span></button>
                                        <button className="btn-Categories3">graphic <span>X</span></button>
                                    </div>
                                    {/* Select 2 */}
                                    <div>
                                        <h6 className="mt-3 pb-2 font-weight-bold">Creators</h6>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>Choose creators ....</option>
                                                <option defaultValue="1">Design</option>
                                                <option defaultValue="2">graphic</option>
                                                <option defaultValue="3">Developer</option>
                                                <option defaultValue="3">adobe</option>
                                            </select>
                                        </div>
                                        <button className="btn-Categories3">adobe <span>X</span></button>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <h6>Creators</h6>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" id="inputGroupSelect01">
                                            <option selected>Choose creators ....</option>
                                            <option defaultValue="1">Design</option>
                                            <option defaultValue="2">graphic</option>
                                            <option defaultValue="3">Developer</option>
                                            <option defaultValue="3">adobe</option>
                                        </select>
                                    </div>
                                    <button className="btn-Categories3">adobe <span>X</span></button>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="d-flex">
                                        <div className="position-relative mt-2">
                                            <img src={Lap} className=" rounded" height="100" width="95%" alt="speaker" />
                                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                                        </div>
                                        <div className="position-relative mt-2">
                                            <img src={Lap} className=" rounded" height="100" width="95%" alt="speaker" />
                                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* End of Nav */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-bold pt-4 pb-2">Suggested Event</h5>
                    </div>
                    {/* Event 1 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 2 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 3 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 4 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 5 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 6 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 7 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 8 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                    {/* Event 9 */}
                    <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10">
                        <div className="position-relative mt-2">
                            <img src={Lap} className=" rounded" height="170" width="95%" alt="speaker" />
                            <img src={HeartImg} className="align-self-center p-2 mr-2 img-event-suggested" width="50" height="50" alt="favorite"/>
                            <h6 className="text-capitalize pt-1">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                </div>
            </Categories3Wrapper>
        </>
    )
}

const Categories3Wrapper = styled.div`
.banner{
    border-radius: 10px!important;
    height: 100%;
    overflow: hidden;
}
.po-abs-banner{
    top: 40%;
    left: 10%;
}
.bg-tablist{
    background: #fff;
    box-shadow: 0px 0px 5px #000;
    border-radius: 6px;
}
.L-i{
    width: 33%;
}
.btn-Categories3{
    background: #775dff;
    border: 1px solid #775dff;
    border-radius: 16px;
    color: #fff;
    margin-left: 5px;
    font-size: 15px;
    outline: none;
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
.img-event-suggested{
    position: absolute;
    top: 0;
    right: 10px;
}
.nav-filter{
    background: #f1eeff!important;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    border-radius: 0!important;
    color: #605bd2!important;
    padding: 8px!important;
}
.nav-filter-1{
    color: #fff!important;
    background: #775dff!important;
    border-top-left-radius: 4px!important;
    border-bottom-left-radius: 4px!important;
}
.nav-filter-3{
    border-top-right-radius: 4px!important;
    border-bottom-right-radius: 4px!important;
}

`