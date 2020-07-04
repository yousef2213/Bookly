import React from 'react'
import {Link} from 'react-router-dom'
import {MdAccessTime,MdLocalMovies} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {RiRunLine,RiFootballLine} from 'react-icons/ri'
import {FaLaptop} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import AppleImg from '../../image/apple.png'
import Img2 from '../../image/+1.png'
import Img4 from '../../image/4.png'
import styled from 'styled-components'
import {AiFillHeart} from 'react-icons/ai'

export default function FavoriteCategories() {
    return (
        <FavoriteCategoriesWrapper className="row mt-4 mb-3">
            <div className="col-md-6 col-lg-4 col-sm-10 mx-auto">
                <div className="d-flex justify-content-between">
                    <h6 className="text-capitalize pl-2 font-main font-weight-bold">Favorite Categories</h6>
                    <Link to="/Categories" className="view-all">view all</Link>
                </div>
                {/* Client 1 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex justify-content-between BackGround mt-2 rounded px-3">
                        <div className="d-flex pl-3">
                            <MdLocalMovies className="align-self-center icon-film" />
                            <h4 className="align-self-center pl-3 pt-2 text-white">Movies</h4>
                        </div>
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
                {/* Client 2 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex justify-content-between BackGround2 rounded px-3">
                        <div className="d-flex pl-3">
                            <RiRunLine className="align-self-center icon-film" />
                            <h4 className="align-self-center pl-3 pt-2 text-white">Sports</h4>
                        </div>
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
                {/* Client 3 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex justify-content-between BackGround3 rounded px-3">
                        <div className="d-flex pl-3">
                            <FaLaptop className="align-self-center icon-film" />
                            <h4 className="align-self-center pl-3 pt-2 text-white">Technology</h4>
                        </div>
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-10 mx-auto pt-2">
                <div className="d-flex justify-content-between">
                    <h6 className="text-capitalize font-main font-weight-bold">Favorite Creators</h6>
                    <Link to="/Categories" className="view-all">view all</Link>
                </div>
                {/* Client 1 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex justify-content-between bg-danger rounded mt-2 p-3 apple-padding">
                        <h4 className="align-self-center text-white marv font-main font-weight-bold">MARVEL</h4>
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
                {/* Client 2 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex justify-content-between rounded mt-2 p-3 mt-3 apple-padding apple">
                        <AiFillApple className="align-self-center apple-icon apple-event" />
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
                 {/* Client 3 */}
                 <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="bg-success d-flex justify-content-between rounded mt-3 p-3 apple-padding ">
                        <div className="foot-mar d-flex">
                            <RiFootballLine className="align-self-center apple-icon text-white" />
                            <h4 className="align-self-center pl-2 pt-2 text-white font-main font-weight-bold">Laliga</h4>
                        </div>
                        <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-10 mx-auto pt-2">
                <div className="d-flex justify-content-between">
                    <h6 className="text-capitalize font-main font-weight-bold">Categories Events</h6>
                    <Link to="/Categories" className="view-all">view all</Link>
                </div>
                {/* Client 1 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex client mt-2 p-2">
                        <img src={AppleImg} className="icon-main align-self-center" width="50" height="50" alt=""/>
                        <div className="pl-4">
                            <h6 className="text-capitalize mb-0">apple specail event</h6>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Steve Jobs Theater</span></div>
                        </div>
                    </div>
                </Link>
                {/* Client 2 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex client mt-1 p-2">
                        <img src={Img2} className="icon-main align-self-center" width="50" height="50" alt=""/>
                        <div className="pl-4">
                            <h6 className="text-capitalize mb-0">OnePlus Event</h6>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Steve Jobs Theater</span></div>
                        </div>
                    </div>
                </Link>
                {/* Client 3 */}
                <Link to="/Categories-Event" className="Link_Categories_Event">
                    <div className="d-flex client mt-1 p-2">
                        <img src={Img4} className="icon-main align-self-center" width="50" height="50" alt=""/>
                        <div className="pl-4">
                            <h6 className="text-capitalize mb-0">Comic-Con 2018</h6>
                            <div><MdAccessTime className="color-main span" /> <span className="color-main span">September 30, 10.00 AM</span></div>
                            <div><GoLocation className="color-main span" /> <span className="color-main span">Steve Jobs Theater</span></div>
                        </div>
                    </div>
                </Link>
            </div>
        </FavoriteCategoriesWrapper>
    )
}

const FavoriteCategoriesWrapper = styled.div`
    .apple{
        background: #000;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
    }
    .apple-padding{
        padding: 12px;
    }
`