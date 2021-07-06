import React from "react";
import { Card } from "semantic-ui-react";

const UserCard = (props) => {
  console.log(props)
  return (
    <div>
      <Card.Group>
              <Card fluid color="red" header={props.data.userName} />
       
      </Card.Group>
    </div>
  );
};

export default UserCard;
