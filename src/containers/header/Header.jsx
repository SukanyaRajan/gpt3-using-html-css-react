import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    
  <div className='row'>

    
    <div className='gpt3__header section__padding col-6' id='home'>
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          {/* <h1> Let's Build Something amazing with GPT-3 OpenAI</h1> */}
          <p>Yet bed for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. indulgence way everything joy alteration boisterous the attachment. party we years to order allow asked of.</p>
          <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Youe Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
    </div>
    <div className='gpt3__header-image col-6'>
          <img src={ai} alt="ai" />
    </div>
  </div>
     
    
           
  )
}

export default Header