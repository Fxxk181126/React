import Page404 from "./view/404";
import ListPage from "./view/list";
import "./static/index.css";

const { Route, Switch, Redirect } = require("react-router-dom");

function App() {
  return (
    <div className="wrap">
      <Switch>
        <Route path={["/list","/list/:type","/list/:type/:page"]} exact render={(props)=>{
          const {match} = props;
          const {type="good",page="1"} = match.params;
          if(["all", "good", "share", "ask"].includes(type)
            && parseInt(page) + "" === page 
            && page>0
          ){
            return <ListPage />
          }
          return <Redirect to="/404" />
        }}/>
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;