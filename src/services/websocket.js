import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import socketio from 'socket.io-client';

// import { receiveCallRequest } from '~/store/modules/websocket/actions';

export default function Websocket() {
  // { profile } = useSelector(state => state.user);
  // const dispatch = useDispatch();

  useEffect(
    () => {
      const socket = socketio('http://192.168.0.31:8000');

      // if (profile) {
      //   socket.on(`${profile.dominio}-${profile.user_basix}`, data => {
      //     dispatch(receiveCallRequest(data));
      //   });
      // }

      return () => {
        socket.disconnect();
      };
    },
    [
      /* profile */
    ]
  );

  return <div />;
}
