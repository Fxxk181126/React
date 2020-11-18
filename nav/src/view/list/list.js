import { useParams } from "react-router-dom";
import data from "../../data";
const len = 6;

function List() {
    let {type="good",page="1"} = useParams();
    page = Number(page);
    let start = (page-1)*len;
    let end = start + len;
    data['all'] = data.ask.concat(data.good).concat(data.share);
    let nowData = data[type].filter((item,index)=>{
      return index >=start&&index<end;
    });
    return <ul className="list">
        {
          nowData.length>0?nowData.map(item=><li key={item.id}>{item.title}</li>):"暂无数据"
        }
    </ul>
}
export default List;