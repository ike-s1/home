import React from 'react';
import '../../scss/components/how_earn.scss';

export default function HowEarn() {
  return (
    <section className="how-earn">
        <h1 className="how-earn__title">
        HOW TO EARN?
        </h1>
        <div className="how-earn__content">
        <div className="how-earn__gallery">
                <div className="hero">
                    <img src="/images/earn/FemaleCommon.png" alt="hero" />
                </div>
                <div className="hero">
                    <img src="/images/earn/FemaleRare.png" alt="hero" />
                </div>
                <div className="hero">
                    <img src="/images/earn/FemaleEpic.png" alt="hero" />
                </div>
                <div className="hero">
                    <img src="/images/earn/maleCommon.png" alt="hero" />
                </div>
                <div className="hero">
                    <img src="/images/earn/maleRare.png" alt="hero" />
                </div>
                <div className="hero">
                    <img src="/images/earn/maleEpic.png" alt="hero" />
                </div>
        </div>
        <div className="how-earn__info">
            <p>Humankind becomes hegemony ofthe galaxy after discovering Void Amber.
            Cryptic crystals left by VOID GODS billions years ago.
            Essential older than our universe.
            <br/>
            <br/>
            There is limited amount of Void Amber, so you should hurry up to earn it.
            <br/>
            <br/>
            Methods to get Void Amber:
            <br/>
            <br/>
            </p>
            <ul className="methods-list">
                <li>Resolve quests of noble houses. </li>
                <li>Higher loyalty guaranties good reward </li>
                <li>Sell any item to other players on the global market  </li>
                <li>Mine it from your planets or attack foreign</li>
                <li>Win Void Amber during tournaments </li>

            </ul>
        </div>
        </div>
    </section>
  )
}
