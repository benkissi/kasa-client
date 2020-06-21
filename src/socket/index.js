import io from "socket.io-client"

import { socketEvents } from "./events";
// import { getQueueLength } from "./emit";

const ENDPOINT = 'http://localhost:4001/'
export const socket = io(ENDPOINT);

export const initSockets = (setSocketStore) => {
  socketEvents(setSocketStore);
  // setValue    ^ is passed on to be used by socketEvents
};