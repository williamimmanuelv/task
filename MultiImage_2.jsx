import './MultiImage_2.css'

import frist_image_grid_1 from '/First_grid/frist_image_grid_1.jpg'
import frist_image_grid_2 from '/First_grid/frist_image_grid_2.jpg'
import frist_image_grid_3 from '/First_grid/frist_image_grid_3.jpg'
import frist_image_grid_4 from '/First_grid/frist_image_grid_4.jpg'

function MultiImage_2() {
  return (
    <div className='main-multi'>
      <div className='sub-main'>
        <img src={frist_image_grid_1} className='first-images' alt="logo" />
        <p className="sub_title">land</p>
        <p className="sub_title_2"> 10 - 20 % off </p>
      </div>

      <div>
        <img src={frist_image_grid_2} className='first-images' alt="logo" />
      
      </div>
      <div>
        <img src={frist_image_grid_3} className='first-images' alt="logo" />
      </div>
      <div>
        <img src={frist_image_grid_3} className='first-images' alt="logo" />
      </div>
    </div>
  )
}
export default MultiImage_2;