import { Component } from "react";
import Add from "./add";
import "./index.css";
import Todos from "./todos";
class App extends Component {
  state = {
    data:[{
      id: 1,
      name: "Shine",
      content: "海哥最帅"
    },{
      id: 2,
      name: "药神",
      content: "药神最帅"
    }]
  }
  addTodo=(name, content)=>{
    const {data} = this.state;
    data.push({
      id: Date.now(),
      name,
      content
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
  render() {
    const {data} = this.state;
    return  <section className="wrap">
      <h2 className="title">留言板</h2>
      <Add 
        addTodo={this.addTodo}
      />
      <Todos 
        data={data}
        removeTodo={this.removeTodo}
      />
    </section>
  }
}

export default App;