import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <div style={{ fontFamily: 'Avenir' }}>
    <ChatEngine
      projectID="08c4f374-ed94-44e4-b195-837849b55306"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      height="100vh"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
    </div>
  );
};

export default App;
