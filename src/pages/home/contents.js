import './style.css'

export default function Contents() {
    return (
        <div>
            <div class='images-container'>
                <img width="300px" height="300px" style={{
                    objectFit:"cover",
                    borderRadius:"1000px",
                    borderStyle:"solid",
                    borderColor:"white",
                    borderWidth:"4px",
                }} src='https://i.ibb.co/0VTB5MT/IMG-20201205-121711.jpg'></img>
            </div>
            <BackgroundWave />
            <div class="checkoutstuff">
                <a class="checkoutstufftext">Check out this </a>
                <a class="cool" href="">cool</a> 
                <a class="checkoutstufftext">stuff</a>
            </div>
            
            
            
        </div>
    )
}

function BackgroundWave() {
    return (
        <svg 
            style={{
                position:"absolute",
                zIndex:-1
            }}
            id="svg" 
            viewBox="0 0 1440 600" 
            xmlns="http://www.w3.org/2000/svg" >
                <path 
                    class="wave" 
                    d="M 0,600 C 0,600 0,300 0,300 C 61.502564102564094,328.3820512820513 123.00512820512819,356.76410256410253 211,353 C 298.9948717948718,349.23589743589747 413.4820512820513,313.325641025641 510,316 C 606.5179487179487,318.674358974359 685.0666666666666,359.93333333333334 764,329 C 842.9333333333334,298.06666666666666 922.2512820512818,194.94102564102562 1004,188 C 1085.7487179487182,181.05897435897438 1169.9282051282053,270.30256410256413 1243,305 C 1316.0717948717947,339.69743589743587 1378.0358974358974,319.84871794871793 1440,300 C 1440,300 1440,600 1440,600 Z" 
                    stroke="none" 
                    stroke-width="0" 
                    fill="#0099ff" 
                    fill-opacity="1" 
                    transform="rotate(-180 720 300)">
                </path>
        </svg>
    )
}