// store/ping-pong.js

const PING = "PING";
const PONG = "PONG";

const ping = () => ({ type: PING });

const pingEpic = (action$) =>
  action$.ofType(PING)
    .delay(1000)
    .mapTo({ type: PONG });

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

// components/app.js

import { connect } from "react-redux";

let App = ({ isPinging, ping }) => (
  <div>
    <div>is pinging: {isPinging.toString()}</div>
    <button onClick={ping}>Start PING</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping },
)(App);

// configure/store.js

import { createEpicMiddleware } from "react-observable";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware),
);

// index.js

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
