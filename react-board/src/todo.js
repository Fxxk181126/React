import { Component } from "react";
class Todo extends Component {
  render() {
    const {data, removeTodo, changeDone} = this.props;
    const {id, name, content, done} = data;
    return <li>
      <h3>{name}</h3>
      <input type="checkbox" 
        checked={done}
        onChange={({target})=>{
          changeDone(id,target.checked);
        }}
      />
      <p>{content}</p>
      <a onClick={()=>{
        removeTodo(id);
      }}>删除</a>
    </li>
  }
}

export default Todo;