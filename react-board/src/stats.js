export default function Stats(props) {
  const {data, selectAll, removeAllTodo} = props;
  const {done} = data;
  const doneLen = data.filter(item=>item.done).length;
  return  <div class="sum">
    <label>
      <input type="checkbox"
      checked={done}
      onChange={
        ()=>{
          selectAll()
        }
      }/>
      <span>选中全部</span>
    </label>
    <a onClick={()=>{
      removeAllTodo()
    }}>删除选中项</a>
    <p>当前选中<span>{doneLen}</span>项，共<span>{data.length}</span>条留言</p>
  </div>
}