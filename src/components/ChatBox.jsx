import { useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatBox = () => {
    const [show, setShow] = useState(false);
    const [roomId, setRoomId] = useState('general')
  return (
      <>
          <label>
              Choose the chat room:{' '}
              <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
              >
                  <option value="general">general</option>
                  <option value="travel">travel</option>
                  <option value="music">music</option>
              </select>
          </label>
          <button onClick={() => setShow(!show)}>
              {show ? 'Close chat' : 'Open chat'}
          </button>
          {show && <hr />}
          {show && <ChatRoom roomId={roomId} />}
      </>
  );
};

export default ChatBox;