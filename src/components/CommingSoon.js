import { useState } from "react"
import balckLogo from "../assets/Black.png"
import './CommingSoon.css'


const  listImg = []

for (let index = 0; index < 12; index++) {
    listImg.push(require(`../assets/ilovepdf_pages-to-jpg/Student support Card.pdf_page-00${index+1>=10 ?index+1:`0${index+1}`}.jpg`))    
}


export default function CommingSoon() {
    const [time, setTime] = useState(null)


    const targetDate = new Date("Mar 22, 2025 15:37:25").getTime()

    setInterval(() => {
        const currentDate = new Date().getTime()
        const dif = targetDate - currentDate

        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);

        setTime(`${days} days ${hours}:${minutes}:${seconds}`)

    }, 1000);

    const loadingContainer = document.querySelector('.loading-dots');

    const newDot = document.createElement('span');
    newDot.classList.add('dot');
    if (!loadingContainer)
        loadingContainer?.appendChild(newDot);
    
  



    return (
        <main className="container">
            <div className="inner">
                <img src={balckLogo} alt="logo" className="logo" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <p className="title"> Launching Soon  </p>
                    <div class="loading-dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
                <p className="timer"> {time} </p>
                <p className="timer"> Explore Our Exclusive Menu! </p>
                <div style={{ height: '5px', width: '100%', backgroundColor: 'black', borderRadius: '20px', margin: '20px 0 20px 0' }}></div>
                <div className="imges">
                    {listImg.map((img)=>(
                        <img src={img} style={{width:"100%"}} loading='lazy' />
                    ))}
                </div>
            </div>
        </main>
    )
}