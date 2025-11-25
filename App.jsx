import second_image_sec from '/second_image_sec.jpg';
import third_image_section from '/third_image_section.jpg'
import fourth_image_sec from '/fourth_image_sec.jpg'
import fifth_image_sec from '/fifth_image_sec.jpg'
import sixth_image_sec from '/sixth_image_sec.jpg'
import seventh_image_sec from '/seventh_image_sec.jpg'

import eigth_image_sec from '/eigth_image_sec.jpg'



import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navbar';
import FirstImageSec from './FirstImageSec';
import Last_part from './Last_part';
import MultiImage_1 from './MultiImage_1';
import MultiImage_top from './MultiImage_top';
import MultiImage_2_from_last from './MultiImage_2_from_last';
import MultiImage_below_feature from './Multiimage_below_feature'

import ImageDis from './ImageDis';


function App() {
  return (
    <>
      <Navbar />
      <ImageDis />
      <div className='first-text-sec' >
        <img src={second_image_sec} className="third_image_secc" alt="logo" />
      </div>
      <div className='first-text-sec' >
        <h2 className='text1'>Featured Deals</h2>
        <h5 className='text1_2'> Verified listings — Guaranteed value </h5>
      </div>
      <MultiImage_below_feature/>

      <img src={third_image_section} className="third_image_sec" />
      <div className='first-text-sec' >
        <h2 className='text1'>Explore Our Premium Categories</h2>
        <h5 className='text1_2'> A handpicked selection of premium projects, plots, and homes </h5>
      </div>
      {/* <MultiImage_2/> */}

      <div className='first-text-sec' >
        <img src={fourth_image_sec} className="third_image_secc" alt="logo" />
      </div>

      <img src={fifth_image_sec} className="third_image_sec" alt="logo" />
      <img src={sixth_image_sec} className="third_image_sec" alt="logo" />
      <div className='first-text-sec' >
        <h2 className='text1'>Best Investment Properties</h2></div>

      <MultiImage_top />
      <div className='first-text-sec' >
        <img src={seventh_image_sec} className="third_image_secc" alt="logo" /></div>
      <div className='first-text-sec' >
        <h2 className='text1'>Recommended for You</h2>
      </div>
      <MultiImage_2_from_last/>

      <img src={eigth_image_sec} className="third_image_sec" alt="logo" />
      <div className='first-text-sec' >
        <h2 className='text1'>Discover Verified Properties Near You</h2>
      </div>
      <MultiImage_1 />
      <Last_part />
    </>
  )
}

export default App
