import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { useInstance, provider } from "react-ioc";

class PingPongService {
  @observable isPinging = false;

  @action ping = async () => {
    await new Promise(r => setTimeout(r, 1000));
    this.isPinging = true;
  }
}

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

let Provider = () => {
  return <App/>;
};

Provider = provider(PingPongService)(Provider);

export default Provider;
