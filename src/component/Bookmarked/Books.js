import React from 'react'
import Img from '../../image/laptop.jpeg'
import {MdAccessTime} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import Heart from '../../image/heart.png'
import {Link} from 'react-router-dom'
export default function Books() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mt-3">
                    <h6 className="text-capitalize mb-0 pl-2 font-main font-weight-bold">Upcoming Events</h6>
                </div>
            </div>
            {/* row 1 */}
            <div className="row pb-4">
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                        <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* one Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tow Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* three Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* four Trick */}
                <div className="col-lg-3 col-md-6 col-sm-10 col-xm-10 mx-auto position-relative mt-5">
                    <img src={Heart} className="Book-heart cursor" width="30" height="30" alt=""/>
                    <div className="client mt-1 p-2">
                        <img src={Img} className="img-tickets align-self-center rounded" width="80" height="80" alt=""/>
                       <Link to="/Categories-Event" className="text-capitalize mb-0 p-2 h-6-books">ul-ux design event 2020</Link>
                        <div className="d-flex justify-content-between align-items-center pt-3" >
                            <div className="pl-2">
                                <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                                <div><GoLocation className="color-main span" /> <span className="color-main span">Oakland IMAX Theath</span></div>
                            </div>
                            <div>
                                <button className="btn-trick d-block">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
