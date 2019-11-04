// service/ping-pong.js

import { observable, action } from "mobx";

class PingPongService {
  @observable isPinging = false;

  @action ping = async () => {
    await new Promise(r => setTimeout(r, 1000));
    this.isPinging = true;
  }
}

// components/app.js

import { observer } from "mobx-react";
import { useInstance, provider } from "react-ioc";

let App = () => {
  const pingPongService = useInstance(PingPongService);
  return (
    <div>
      <div>is pinging: {pingPongService.isPinging.toString()}</div>
      <button onClick={pingPongService.ping}>Start PING</button>
    </div>
  );
};

App = observer(App);

// layout/index.js

let Provider = ({ children }) => {
  return children;
};

Provider = provider(PingPongService)(Provider);

// index.js

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById("root"),
);
