import React from 'react';
import '../../scss/components/why.scss';

export default function Why() {
  return (
    <section className="why">
        <div className="why__container">
            <h1 className="why__title">
                WHY YOU SHOULD PLAY VOID GODS?
            </h1>
            <div className="why__content">
            <div className="why__content-left">
                <d className="why__reason">
                    <div className="lable"/>
                    <p> No crypto wallet needed until money withdraw;</p>
                </d>
                <br/>
                <d className="why__reason">
                    <div className="lable"/>
                    <p> Storydriven gameplay in epic global plot each player can influence. <br/>
                There are no grind or boring activities;</p>
                </d>
                <d className="why__reason">
                    <div className="lable"/>
                    <p> Cinematic experience with highquality AAA graphics;</p>
                </d>
            
            </div>
            <div className="why__content-right">
            <d className="why__reason">
                    <div className="lable"/>
                    <p> Social relationships. Each player has an ability to get vassals;</p>
                </d>
                <d className="why__reason">
                    <div className="lable"/>
                    <p> NFT ownership. Each batle robot, pilot, weapon or even planet are your's.<br/>
                You are able to sell it in any time.</p>
                </d>
            </div>
        </div>
        </div>
        
       
    </section>
  )
}
