import { signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import SendMessage from "./SendMessage";
const Chat = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [messages, setMessages] = useState([]);
  const colRef = collection(db, "messages");
  const q = query(colRef, orderBy("timeStamp"), limit(10));

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(q);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  });

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className="Chat">
      <button className="btn" onClick={signUserOut}>
        {" "}
        <i className="fas fa-power-off"></i>
      </button>
      <h1
        style={{
          marginTop: "8px",
        }}
      >
        GoChat
        <i
          style={{
            marginLeft: "3px",
          }}
          className="fas fa-sms"
        ></i>
      </h1>
      <div className="msgs custom-scrollbar">
        {messages.map(({ id, text, photo, msgid }) => {
          return (
            <div>
              <div
                key={id}
                className={`msg ${
                  msgid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img className="img" src={photo} alt="" />
                <p className="p">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SendMessage isAuth={isAuth} />
    </div>
  );
};

export default Chat;
