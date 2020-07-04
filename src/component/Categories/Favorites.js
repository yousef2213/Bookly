import React from 'react'
import {Link} from 'react-router-dom'
import {MdLocalMovies,MdBrush} from 'react-icons/md'
import {RiRunLine,RiFootballLine} from 'react-icons/ri'
import {FaLaptop} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import styled from 'styled-components'


export default function Favorites() {
    return (
        <FavoritesCat>
            <div className="row mt-4 mb-0">
                <div className="col-12 mt-3">
                    <h6 className="text-capitalize mb-0 pl-2 font-main font-weight-bold">Favorites</h6>
                </div>
                {/* 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between mt-2 Favorite-height BackGround px-1">
                            <div className="d-flex pl-3">
                                <MdLocalMovies className="align-self-center icon-film" />
                                <h4 className="align-self-center pl-3 pt-2 text-white">Movies</h4>
                            </div>
                            <AiFillHeart className="align-self-center p-2 mr-2 icon-heart cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event rounded">
                        <div className="d-flex justify-content-between BackGround2 Favorite-height mt-1 p-3">
                            <div className="d-flex">
                                <RiRunLine className="align-self-center icon-film" />
                                <h4 className="align-self-center pl-3 pt-2 text-white">Sports</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                {/* 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between BackGround3 Favorite-height rounded mt-1 p-3">
                            <div className="d-flex">
                                <FaLaptop className="align-self-center icon-film" />
                                <h4 className="align-self-center pl-3 pt-2 text-white">Technology</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                {/* 4 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between BackGround3 Favorite-height rounded mt-1 p-3">
                            <div className="d-flex">
                                <MdBrush className="align-self-center icon-film" />
                                <h4 className="align-self-center pl-3 pt-2 text-white">Art</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
            </div>{/* end row */}
            <div className="row mb-3">
                {/* 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event ">
                        <div className="d-flex justify-content-between bg-danger rounded mt-1">
                            <div className="d-flex">
                                <h4 className="align-self-center text-white text-uppercase m-70 font-marvel m">marvel</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                {/* 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between bg-black rounded mt-1 p-2">
                            <AiFillApple className="align-self-center m-100 icon-film i" />
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                {/* 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between bg-primary rounded mt-1 p-2">
                            <div className="d-flex">
                                <h4 className="align-self-center d text-white text-uppercase font-weight-bolder font-main bord">dcc</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                {/* 4 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between bg-black rounded mt-1 p-1">
                            <div className="d-flex">
                                <h4 className="align-self-center pl-3 text-white text-uppercase font-weight-bolder font-main m-100 mb-0">star wars</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>
                    </Link>
                </div>
                 {/* 5 */}
                 <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="d-flex justify-content-between bg-success rounded mt-1 p-1">
                            <div className="d-flex pl-5">
                                <RiFootballLine className="align-self-center apple-icon text-white" />
                                <h4 className="align-self-center pl-2 pt-2 text-white font-main font-weight-bold">Laliga</h4>
                            </div>
                            <AiFillHeart className="align-self-center text-white m-2 font-size-icon cursor" />
                        </div>      
                    </Link>  
                </div>
            </div>
        </FavoritesCat>
    )
}

const FavoritesCat = styled.div`
    .font-size-icon {
        font-size: 25px;
    }
    .i{
         font-size: 50px;
    }
    .m{
        padding: 14px!important;
    }
    .d{
        padding: 3px!important;
    }
`