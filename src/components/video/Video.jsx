import React from 'react';
import '../../scss/components/video.scss'

export default function Video() {
  return (
    <section className='video'>
      <div className="video__container">
      <div className="video__border-left">
          <img src="/images/video/bg.png" alt="#" />
      </div>
        <div className="video__content">
          <img src="/images/video/video.png" alt="video" />
        </div>
        <div className="video__border-right">
          <img src="/images/video/bg.png" alt="#" />
        </div>
      </div>
    </section>
  )
}
