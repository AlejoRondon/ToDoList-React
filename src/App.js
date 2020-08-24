import React from "react";
import StickyNew from "./pages/StickyNew/StickyNew";
import StickyHome from "./pages/StickyHome/StickyHome";
import StickyEdit from "./pages/StickyEdit/StickyEdit";
import StickyDetailsContainer from "./pages/StickyDetails/StickyDetailsContainer";
import NotFound from "./pages/404NotFound/404NotFound";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function App(props) {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/stickynotes" component={StickyHome} />
        <Route exact path="/stickynotes/new" component={StickyNew} />
        <Route
          exact
          path="/stickynotes/edit/:stickyId"
          component={StickyEdit}
        />
        <Route
          exact
          path="/stickynotes/details/:stickyId"
          component={StickyDetailsContainer}
        />
        {/* not found - advanved version */}
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect from="*" to="/NotFound" />
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}
