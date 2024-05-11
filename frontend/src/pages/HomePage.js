import '../css/pages/home_page.scss'
import VideoComponent from '../assets/videos/front-video.mp4'
import RuningImg from '../assets/images/running.png'
import PushUp from '../assets/images/push-up.png'
import SitUp from '../assets/images/sit-up.png'
import Squat from '../assets/images/squat.png'
import HomeCard from '../components/HomeCard'

function HomePage() {
    const user = null
	return (
        <div className="container">
            <div className='row home-row'>
			    <div className="col-12 d-flex flex-column justify-content-center align-items-start home-starter position-relative p-0 m-0">
                    <div className="home-overlay col-6 d-flex justify-content-center align-items-center">
                        <HomeCard image={SitUp} name="Sit Ups" type="Chest" difficulty="Medium"/>
                        <HomeCard image={Squat} name="Squats" type="Legs" difficulty="Easy"/>
                        <HomeCard image={PushUp} name="Push Ups" type="Arms" difficulty="Medium"/>
                        <HomeCard image={RuningImg} name="Running" type="Back" difficulty="Hard"/>
                        <h3 className='overlay-header-one'>Don't Wait</h3>
                        <h3 className='overlay-header-two'>Start Now</h3>
                        {user ? (
                            <button className='btn home-button col-6'>Start</button>
                        ) : (
                            <button className='btn home-button col-4'>Log In</button>
                        )}
                        <h1 className='home-welcome'>Welcome</h1>
                    </div>
                    <div className="home-headers col-9">
                        <h3 className="home-header-beat">Build Yourself</h3>
                        <h3 className="home-header-to">To</h3>
                        <h1 className="home-header">Beat Them All!!!</h1>
                    </div>
                    <div className="home-header-img d-flex justify-content-end align-items-center p-0 m-0">
                        <video controls={false} autoPlay muted loop poster={VideoComponent} className='video'>
                            <source src={VideoComponent} type="video/mp4" className='col-8 video-src'/>
                            Vaš preglednik ne podržava video oznake.
                        </video>
                    </div>
                </div>
		    </div>
        </div>
	)
}

export default HomePage
