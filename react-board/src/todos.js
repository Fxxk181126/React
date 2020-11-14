import { Component } from "react";
import Todo from "./todo";
class Todos extends Component {
  render() {
    const {data,removeTodo, changeDone} = this.props;
    return <ul className="messageList">
      {data.map((item,index)=>{
        return <Todo 
          key={index}
          data={item}
          removeTodo={removeTodo}
          changeDone={changeDone}
        />
      })}
    </ul>
  }
}

export default Todos;