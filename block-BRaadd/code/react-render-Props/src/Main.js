import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Books from "./Books";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import People from "./People";
import SearchWrapper from "./SearchWrapper";

function Main() {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles" exact>
        <SearchWrapper
            render={(searchTerm, handleChange) => (
              <Articles searchTerm={searchTerm} handleChange={handleChange} />
            )}
          />  
        </Route>
        <Route path="/people">
          <SearchWrapper
            render={(searchTerm, handleChange) => (
              <People searchTerm={searchTerm} handleChange={handleChange} />
            )}
          />
        </Route>
        <Route path="/books">
        <SearchWrapper
            render={(searchTerm, handleChange) => (
              <Books searchTerm={searchTerm} handleChange={handleChange} />
            )}
          />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
