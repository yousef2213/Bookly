import React from 'react'
import Djj2 from '../../image/Categories/image.jpeg'
import Heart from '../../image/heart.png'
// Speakers
import Speaker1 from '../../image/speaker1.jpeg'
import Speaker2 from '../../image/speaker2.jpeg'
import Speaker3 from '../../image/speaker3.jpeg'
import Speaker4 from '../../image/speaker4.jpeg'
// video and img
import Lap from '../../image/laptop2.jpeg'
export default function Categories2() {
    return (
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col-lg-3 col-md-4 col-sm-10 col-10 col-3">
                    <img src={Djj2} width="90%" height="400" alt=""/>
                    <button className="btn-Categories2">Book Now For Free!!</button>
                    <div className="d-flex mt-3">
                        <h6 className="h-6-Categories2">69</h6>
                        <h6 className="h-6-Categories2-2">adobe</h6>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-6 pl-0">
                    <div className="d-flex">
                        <h3>UI-UX Design event 2020</h3>
                        <h3 className="h-6-Categories2-2 pl-5">free</h3>       
                    </div>
                    <div className="mb-3">
                        <button className="btn-Categories2-fram ml-0">Design</button>
                        <button className="btn-Categories2-fram">career</button>
                        <button className="btn-Categories2-fram">adobe</button>
                    </div>
                    <p className="pt-2">
                        During an adventure into the criminal underworld, Han Solo<br /> meets his future co-pilot Chewbacca and encounters Lando<br /> Calrissian years before joining the Rebellion.
                    </p>
                    {/* Event Speakers */}
                    <h5 className="font-weight-bold pt-3 pb-2 pl-2">Event Speakers</h5>
                    <div className="d-flex flex-wrap">
                        <div className="speaker1 rounded p-2">
                            <img src={Speaker1} className="img-speaker" alt="speaker" />
                            <h6 className="text-center text-capitalize pt-1">ezzat mohamed</h6>
                        </div>
                        {/* 2 */}
                        <div className="speaker2 p-2 rounded">
                            <img src={Speaker2} className="img-speaker" alt="speaker" />
                            <h6 className="text-center text-capitalize pt-1">stormie hansford</h6>
                        </div>
                        {/* 3 */}
                        <div className="speaker3 p-2 rounded">
                            <img src={Speaker3} className="img-speaker" alt="speaker" />
                            <h6 className="text-center text-capitalize pt-1">rio pope</h6>
                        </div>
                        {/* 4 */}
                        <div className="speaker4 p-2 rounded">
                            <img src={Speaker4} className="img-speaker" alt="speaker" />
                            <h6 className="text-center text-capitalize pt-1">dao pauol</h6>
                        </div>
                    </div>
                    {/* Video and Photo Speakers */}
                    <h5 className="font-weight-bold pt-4 pb-2">Videos & Photos</h5>
                    <div className="d-flex flex-wrap">
                        <div className="speaker1 rounded mx-auto p-2 position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                        </div>
                        {/* 2 */}
                        <div className="speaker2 p-2 rounded mx-auto p-2 position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" /> 
                        </div>
                        {/* 3 */}
                        <div className="speaker2 ml-4 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" /> 
                        </div>
                        {/* 4 */}
                        <div className="speaker2 ml-4 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" /> 
                        </div>
                    </div>
                     {/* Similar Events */}
                     <h5 className="font-weight-bold pt-4 pb-2">Similar Events</h5>
                    <div className="d-flex flex-wrap">
                        <div className="speaker1 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                            <img src={Heart} className="align-self-center p-2 mr-2 img-videos-images" width="50" height="50" alt="favorite"/>
                            <h6 className="text-center text-capitalize pt-1 text-muted">UI-UX Design event 2020</h6>
                        </div>
                        {/* 2 */}
                        <div className="speaker2 ml-4 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                            <img src={Heart} className="align-self-center p-2 mr-2 img-videos-images" width="50" height="50" alt="favorite"/>
                            <h6 className="text-center text-capitalize pt-1 text-muted">UI-UX Design event 2020</h6>
                        </div>
                        {/* 3 */}
                        <div className="speaker2 ml-4 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                            <img src={Heart} className="align-self-center p-2 mr-2 img-videos-images" width="50" height="50" alt="favorite"/>
                            <h6 className="text-center text-capitalize pt-1 text-muted">UI-UX Design event 2020</h6>
                        </div>
                        {/* 4 */}
                        <div className="speaker2 ml-4 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                            <img src={Heart} className="align-self-center p-2 mr-2 img-videos-images" width="50" height="50" alt="favorite"/>
                            <h6 className="text-center text-capitalize pt-1 text-muted">UI-UX Design event 2020</h6>
                        </div>
                        {/* 5 */}
                        <div className="speaker2 rounded p-2 mx-auto position-relative mt-2">
                            <img src={Lap} className="img-speaker" alt="speaker" />
                            <img src={Heart} className="align-self-center p-2 mr-2 img-videos-images" width="50" height="50" alt="favorite"/>
                            <h6 className="text-center text-capitalize pt-1 text-muted">UI-UX Design event 2020</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
