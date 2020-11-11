import { Component } from "react";
class Add extends Component {
  state={
    name:"",
    content: ""
  }
  render() {
    const {addTodo} = this.props;
    const {name, content} = this.state;
    return <div className="addMessage">
      <input type="text" placeholder="请输入昵称" 
      onChange={({target})=>{
        console.log(target.value, 90)
        this.setState({
          name:target.value
        }) 
      }}/>
      <textarea placeholder="请输入留言"
      onChange={({target})=>{
        console.log(target.value, 10)
        this.setState({
          content:target.value
        }) 
      }}></textarea>
      <button onClick={({target})=>{
        console.log(name, 222, content)
        addTodo(name, content);
        this.setState({
          name:'',
          conent: ''
        }) 
      }}>提交留言</button>
    </div>
  }
}

export default Add;