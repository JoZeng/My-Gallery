import './styles.css'
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import photo3 from "../../assets/photo3.png"
import photo_4 from "../../assets/photo_4.png"
import photo5 from "../../assets/photo5.png"
import photo6 from "../../assets/photo6.png"

export default function Main() {


  return (
    <main className='main'>
      <div className='main-container'>
        <div className='main--card1'>
          <img className='main--card1__img1' src={photo1} alt="photo1" />
          <img className='main--card1__img2' src={photo2} alt="photo2" />
        </div>

        <div className='main--card2'>
          <div className='main--card2--subcard'>
          <img className='main--card1__img3' src={photo3} alt="photo3" />
          <div className='main--card2--subcard--twophotos'>
          <img className='main--card1__img6' src={photo6} alt="photo4" />
          <img className='main--card1__img5' src={photo5} alt="photo5" />
          </div>
          </div>
          <img className='main--card1__img4' src={photo_4} alt="photo6" />
        </div>
        
      </div>
    </main>
  )
}
