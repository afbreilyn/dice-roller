import React, { ReactElement } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import twitter from "./assets/twitter.svg";

export const About = (props: RouteComponentProps): ReactElement => {
  return (
    <div className="container">
      <div className="row mts">
        <Link className="pull-right phs" to="/">
          home
        </Link>
        <Link className="pull-right phs" to="/history">
          roll history
        </Link>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h1 className="text-xl">about</h1>

          <h3 className="text-l mtm">who built this?</h3>
          <p>
            <a href="http://anneloverso.com/">Anne LoVerso</a>
            <a href="https://twitter.com/AnneLoVerso">
              <img alt="twitter" className="twitter" src={twitter} />
            </a>
          </p>

          <h3 className="text-l mtm">why?</h3>
          <p>
            For fun, and because I wanted to build some super-simple web application so that I would
            have an excuse to put together a barebones version of code that can drive a super-simple
            React/Node app powered by API and database integrations.
          </p>

          <h3 className="text-l mtm">why is it so slow to generate a random dice roll?</h3>
          <p>
            A roll takes about 750ms to load because instead of generating JavaScript pseudo-random
            numbers, we're actually using the <a href="https://www.random.org/">random.org</a> API
            to generate rolls.
          </p>

          <h3 className="text-l mtm">why is there more history than just my roll history?</h3>
          <p>
            Because it's not done yet. That's the very next upcoming thing! But to start, I wanted a
            database, so we have a global database for all users. Who knows, maybe it's a feature -
            your party can see if you're inflating your rolls!
          </p>

          <h3 className="text-l mtm">can I contribute?</h3>
          <p>
            Sure thing, here's the <a href="https://github.com/aloverso/dice-roller">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
