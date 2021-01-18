import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewArtworkSource from "./components/NewArtworkSource";
import ArtworkSource from "./components/ArtworkSource";
import ArtworkSources from "./components/ArtworkSources";
import NewCertificate from "./components/NewCertificate"
import CheckoutCertificate from "./components/CheckoutCertificate"
import CollectCertificate from "./components/CollectCertificate"

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