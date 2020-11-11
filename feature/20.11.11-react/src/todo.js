import { Component } from "react";
class Todo extends Component {
  render() {
    const {data,removeTodo} = this.props;
    const {id,text, content} = data;
    return <li>
      <h3>{text}</h3>
      <p>{content}</p>
      <a onClick={()=>{
        removeTodo(id);
      }}>删除</a>
    </li>
  }
}

export default Todo;