import React from 'react';
import '../../scss/components/little.scss';



export default function Little() {
  return (
    <section className='little'>
            <div className="little__row">
                <div className="little__item">
                    <img src="/images/little/1.png" alt="gallery" />
                </div>
                <div className="little__item">
                    <img src="/images/little/2.png" alt="gallery" />
                </div>
                <div className="little__item">
                    <img src="/images/little/3.png" alt="gallery" />
                </div>
            </div>
            <h1 className="little__tittle">
            WHAT WILL HELP YOU TO WIN IN BATTLES?
            </h1>
    </section>
  )
}
