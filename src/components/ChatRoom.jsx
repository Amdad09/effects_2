import { useEffect } from "react";
import { createConnection } from "../utils/chat";

export default function ChatRoom({ roomId }) {
    const serverUrl = 'https://localhost:1234';

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        //cleaup 
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>;
}
