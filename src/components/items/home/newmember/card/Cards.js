// ############################# gihan 14.11.23 ##############################
import Card from 'react-bootstrap/Card';
import '../NewMember.css';

function Cards(props) {


  return (
    <Card>
      <div className="sider__card"

       style={{ 
       backgroundImage: `url('${props.img}')`,
      }}
>
  <div className="sider__card__mask">
    <div className="sider__info">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.where}</p>
      <button>View Profile</button>
    </div>
  </div>
</div>   
   </Card>
  );
}

export default Cards;

// ######################### gihan #################################