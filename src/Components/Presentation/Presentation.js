import sign from '../../images/sign.png';
import glasses from '../../images/glasses.png';

import { useState } from 'react';
import cn from 'classnames';

const Presentation = () => {
  const [activeTab, changeActiveTab] = useState('1');

  return (
    <section className="Presentation">
      <header className="Presentation-Header">
        <img src={sign} alt="sign"></img>
        <h2>Our work is the presentation of our capabilities.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </header>
      <section className="Presentation-Container">
        <div className="Presentation-Tabs">
          <div className={cn('PresentationTab', { 'PresentationTab_active': activeTab === '1' })} onClick={() => changeActiveTab('1')}>
            <div className="PresentationTab-Btn">1</div>
            <span className="PresentationTab-Name">Simple</span>
          </div>
          <div className={cn('PresentationTab', { 'PresentationTab_active': activeTab === '2' })} onClick={() => changeActiveTab('2')}>
            <div className="PresentationTab-Btn">2</div>
            <span className="PresentationTab-Name">Transparent</span>
          </div>
          <div className={cn('PresentationTab', { 'PresentationTab_active': activeTab === '3' })} onClick={() => changeActiveTab('3')}>
            <div className="PresentationTab-Btn">3</div>
            <span className="PresentationTab-Name">Collaborate</span>
          </div>
        </div>
        <div className="PresentationTab-Content">
          <div className="PresentationTab-ContentTab">
            <img className="PresentationTab-ContentImg" src={glasses} alt="glasses" />
            <div className="PresentationTab-ContntText">
              <h3 className="PresentationTab-ContentHeader">Browse projects, like booking a hotel online!</h3>
              <p className="PresentationTab-ContentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nos&shy;trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
};

export default Presentation;
