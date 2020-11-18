import { Link, useParams } from "react-router-dom";
import data from "../../data";
const len = 6;
function Listpagenub() {
  let {type="good",page="1"} = useParams();
  let nowData = data[type];
  console.log(data, type, nowData);
  let pageLength = Math.ceil(nowData.length/len);
  //暗号： 今晚上星
  function render() {
    let navs = [<Link 
        to={`/list/${type}/${Number(page)-1}`}
      >上一页</Link>];
    for(let i = 1; i <= pageLength;i++){
      if(i === Number(page)){
        navs.push(
          <Link 
            key={i}
          >{i}</Link>
        )
      } else {
        navs.push(
          <Link 
            key={i}
            to={`/list/${type}/${i}`}
          >{i}</Link>
        )
      }
     
    }
    navs.push(<Link 
      key={"下一页"}
      to={`/list/${type}/${Number(page)+1}`}
    >下一页</Link>)
    return navs;
  }
  return <nav className="pagination">
      {render()}
  </nav>
}
export default Listpagenub;