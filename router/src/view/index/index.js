/*
  React 中引入图片的几种方式:
  1. 基于 http|https 的绝对路径
  2. require 相对路径 (CRA 4 之前 require("路径")，CRA 4 require("路径").default)
  3. import 相对路径
*/
import { Link } from "react-router-dom";
function IndexPage() {
    return <div>
        <header className="header">
        <div className="wrap">
            <h1 id="logo">KaiKeBa</h1>
            <nav className="nav">
            <Link to="/index">首页</Link>
            <Link to="/about">关于我们</Link>
            <Link to="/join">加入我们</Link>
            </nav>
        </div>
    </header>
    <img src={require("../../img/img4.png").default} className="banner" />
    <div className="wrap">
        <img src={require("../../img/img_1.png").default}/>
        <img src={require("../../img/img_2.png").default}/>
    </div>
    </div>
}

export default IndexPage;