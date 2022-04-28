import "./UserList.css";
import UserItem from "../UserItem/UserItem";
import Card from "../../UI/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul className="goal-list">
        {props.items.map((goal) => (
          <UserItem key={goal.id} id={goal.id}>
            <span>{goal.text}</span> <span>({goal.number} years old)</span>
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
