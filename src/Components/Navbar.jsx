import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
                <nav className="sticky top-0 z-10 p-2 h-28">
                        <div className="text-center text-base">
                            <Link className="internal_link" to="./Aim">
                                <img className="md:h-14 h-10 w-14 rounded mt-2 mx-2 "
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpbB3jSjMF-FDgIL1E-eRN6eeCDLSsvoAQ&usqp=CAU" alt='/' />
                                <span className=''>Aim</span> </Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Theory">
                                <img className="md:h-14 h-10 w-14 rounded mt-2 mx-2 " src="https://cdn-icons-png.flaticon.com/512/1648/1648697.png"alt='/'/>
                                Theory</Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Procedure">
                                <img className="md:h-14 h-10 w-14 rounded mt-2 mx-2"
                                    src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"alt='/'/>
                                Procedure</Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Simulation">
                                <img className="md:h-14 h-10 w-14 rounded-full mt-2 mx-2"
                                    src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"alt='/'/>
                                Simulation</Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Code">
                                <img className="md:h-14 h-10 w-14 rounded-full mt-2 mx-2"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"alt='/'/>
                                Python Code</Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Quiz1">
                                <img className="md:h-14 h-10 w-14 rounded-full overflow-hidden mt-2 mx-2 "
                                    src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"alt='/'/>
                                Quiz</Link>
                        </div>
                        <div className=" text-center text-base">
                            <Link className="internal_link" to="./Results">
                                <img className="md:h-14 h-10 w-14 rounded mt-2 mx-2 "
                                    src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"alt='/'/>
                                Result</Link>
                        </div>
                        {/* <div className="boxq">
                            <Link className="internal_link" to="#references">
                                <img className="h-14 rounded mt-2 ml-4" src="https://image.pngaaa.com/134/5592134-middle.png"alt='/'/>
                                References</Link>
                        </div> */}
            </nav>
    </>
  )
}