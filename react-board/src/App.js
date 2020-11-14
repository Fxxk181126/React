import { Component } from "react";
import Add from "./add";
import Stats from "./stats";
import Todos from "./todos";
import "./index.css";

class App extends Component {
  state = {
    data:[{
      id: 1,
      name: "Shine",
      content: "海哥最帅",
      done: false
    },{
      id: 2,
      name: "药神",
      content: "药神最帅",
      done: false
    }]
  }
  addTodo=(name, content)=>{
    const {data} = this.state;
    data.push({
      id: Date.now(),
      name,
      content,
      done: false
    });
    this.setState({
      data:data
    })
  };
  removeTodo=(id)=>{
    const {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  changeDone=(id,done)=>{
    const { data } = this.state;
    for(let i = 0; i < data.length; i++){
      let todo = data[i];
      if(todo.id === id){
        data[i]={
          ...todo,
          done
        }
        break;
      }
    }
    this.setState({
      data
    })
  }
  selectAll=()=>{
    const { data } = this.state;
    for(let i = 0; i < data.length; i++){
      let todo = data[i];
      data[i]={
        ...todo,
        done: true
      }
    }
    this.setState({
      data
    })
  }
  removeAllTodo=()=>{
    const {data} = this.state;
    this.setState({
      data:data.filter(item=>item.done==false)
    })
  }
  render() {
    //暗号：钟阿姨
    const {data} = this.state;
    return  <section className="wrap">
      <h2 className="title">留言板</h2>
      <Add 
        addTodo={this.addTodo}
      />
      <Todos 
        data={data}
        removeTodo={this.removeTodo}
        changeDone={this.changeDone}
      />
      <Stats
        data={data}
        selectAll={this.selectAll}
        removeAllTodo={this.removeAllTodo}
      />
    </section>
  }
}

export default App;