import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "../src/app/components/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewArtworkSource from "./containers/NewArtworkSource";
import ArtworkSource from "./containers/ArtworkSource";
import ArtworkSources from "./containers/ArtworkSources";
import NewCertificate from "./containers/NewCertificate"
import CheckoutCertificate from "./containers/CheckoutCertificate"
import CollectCertificate from "./containers/CollectCertificate"

export default function Routes() {
  return (
    <Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/login">
			<Login />
		</Route>
		<Route exact path="/signup">
		  <Signup />
		</Route>
		<Route exact path="/src/new">
		  <NewArtworkSource />
		</Route>
		<Route exact path="/src/:id">
			<ArtworkSource />
		</Route>
		<Route exact path="/src">
			<ArtworkSources />
		</Route>
		<Route exact path="/cert/new/:id">
			<NewCertificate />
		</Route>
		<Route exact path="/cert/order/:uuid">
			<CheckoutCertificate />
		</Route>
		<Route exact path="/cert/collect/:uuid">
			<CollectCertificate />
		</Route>
		{/* Finally, catch all unmatched routes */}
		<Route>
		  <NotFound />
		</Route>	  
    </Switch>
  );
}