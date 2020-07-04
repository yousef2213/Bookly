import React from 'react'
import {Link} from 'react-router-dom'
import {RiRunLine,RiSettings2Line} from 'react-icons/ri'
import {FaLaptop} from 'react-icons/fa'
import {
    MdLocalMovies,
    MdBrush,
    MdLibraryBooks,
    MdMusicNote,
    MdGamepad
} from 'react-icons/md'
import Favorites from './Favorites'
import {AiFillHeart} from 'react-icons/ai'

export default function container() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mt-3">
                    <h6 className="text-capitalize mb-0 pl-2 font-main font-weight-bold">Categories</h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-1 p-5">
                            <div className="text-center"><MdLocalMovies className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">movies</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-2 p-5">
                            <div className="text-center"><RiRunLine className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">sports</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-3 p-5">
                            <div className="text-center"><MdGamepad className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">gaming</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 4 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-4 p-5">
                            <div className="text-center"><RiSettings2Line className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">Science</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 5 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-5 p-5">
                            <div className="text-center"><FaLaptop className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">Technology</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 6 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-6 p-5">
                            <div className="text-center"><MdBrush className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">arts</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 7 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-7 p-5">
                            <div className="text-center"><MdLibraryBooks className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">Comic Books</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
                {/* 8 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-10 mt-3 mx-auto">
                    <Link to="/Categories-Event" className="Link_Categories_Event">
                        <div className="Categories Categories-8 p-5">
                            <div className="text-center"><MdMusicNote className="text-white icon-cat" /></div>
                            <h4 className="text-center text-white text-capitalize font-main pt-3">Music</h4>
                            <AiFillHeart className="align-self-center p-2 mr-3 icon-heart heart-categories cursor" width="50" height="50" />
                        </div>
                    </Link>
                </div>
            </div>
            <Favorites />
        </div>
    )
}