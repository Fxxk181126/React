const { NavLink, useParams } = require("react-router-dom");
function ListNav(props) {
  const {type="good"} = useParams()
  return <nav className="nav">
      <NavLink to="/list/all">全部</NavLink>
      <NavLink to="/list/good" isActive={()=>{
          return type==="good";
        }}
      >精华</NavLink>
      <NavLink to="/list/share">分享</NavLink>
      <NavLink to="/list/ask">问答</NavLink>
  </nav>
}
export default ListNav;