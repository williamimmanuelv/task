import first_image_sec_1 from '/first_image_sec_1.jpg';
import first_image_sec_2 from '/first_image_sec_2.jpg';
import './combined.css'
// import './ImageDis.css'
function ImageDis() {
    return (
        <>
            <div className="slideshow">
                <img src={first_image_sec_1} alt='dis'/>
                <img src={first_image_sec_2} alt='dis'/>
            </div>

        </>
    )
}
export default ImageDis;