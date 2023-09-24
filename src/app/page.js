import './main.css'
import style from './text.module.css'

export default function Home() {
  const mainStyle = {
    background: "blue", 
    border: "1px solid #000", 
    width: 100, 
    height:100 }

  return (
    <div style={mainStyle}>
      <p className='textRed'>Halo</p>
      <p className={style.textRed}>Halo</p>
    </div>
  )
}
