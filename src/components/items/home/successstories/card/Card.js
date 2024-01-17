import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import '../SuccessStories.css';

function Cards(props) {
 const [isExpanded, setIsExpanded] = useState(false);
 const [isExpandedtoggleEnter, setIsExpandedtoggleEnter] = useState(false);

 const toggleEnter = () => {
  setIsExpandedtoggleEnter(true);
 }

 const toggleLeave = () => {
  setIsExpandedtoggleEnter(false);
 }

 const toggleExpansion = () => {
    setIsExpanded(!isExpanded);

    // Scroll to the top of the .cddes element when expanding
    if (!isExpanded) {
      const cddesElement = document.getElementById(`cddes-${props.id}`);
      if (cddesElement) {
        cddesElement.scrollTop = 0;
      }
    }
  };

  return (
    <Card
      style={{
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      }}
      className='maincard'
    >
      <Card.Img className='cdimage' variant="top" src={props.img} />
      <Card.Body style={{ paddingBottom: '10px' }}>
        <Card.Title className='cdhedding'>{props.title}</Card.Title>
        <Card.Text
          id={`cddes-${props.id}`}
          className={`cddes ${isExpandedtoggleEnter ? 'cddesHover' : ''}`}
          style={{
            maxHeight: isExpanded ? 'none' : '150px',
            overflow: isExpanded ? 'visible' : 'hidden',
          }}
        >
          {props.des}
          <div className="read-more" style={{visibility : isExpandedtoggleEnter?'visible':'hidden'}}>
           {!isExpanded ?(
            <p>Read More</p>
           ):
           (
            <p></p>
           )}
           
         </div>
        </Card.Text>
        <button className='show-more desk' onClick={toggleExpansion} onMouseEnter={toggleEnter} onMouseLeave={toggleLeave} >
          <FontAwesomeIcon
            icon={isExpanded ? faChevronCircleUp : faChevronCircleDown}
            className={`show-more-icon ${isExpanded ? 'hovered' : ''}`}
          />
        </button>
        <button className='show-more mobile' onClick={toggleExpansion} >
          <FontAwesomeIcon
            icon={isExpanded ? faChevronCircleUp : faChevronCircleDown}
            className={`show-more-icon ${isExpanded ? 'hovered' : ''}`}
          />
        </button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
