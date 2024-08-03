import React from 'react'
import videoImage from '../../assets/video.png'
import coinImage from '../../assets/coins.png'

const VideoContent = () => {
    return (
        <div className='videoContainer'>
            <div className='headerText'>
                دیگه وقتشه ابزارت رو ارتقا بدی
            </div>
            <div className='headerSecondary'>
                یه دقیقه این ویدیو رو ببین
            </div>
            <div className='vidoImage'>
                <img src={videoImage} />
            </div>
            <div className='coinContainer'>
                <img src={coinImage} />
            </div>
        </div>
    )
}

export default VideoContent