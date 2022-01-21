import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "./firebase";

const SendMessage = () => {
  const [msg, setMsg] = useState("");
  const colRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(colRef, {
      text: msg,
      msgid: auth.currentUser.uid,
      photo: auth.currentUser.photoURL,
      timeStamp: serverTimestamp(),
    });
    setMsg("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="sendMsg">
          <input
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Message..."
          />
          <button className="btn-sec" type="submit">
            Send
            <i
              style={{
                marginLeft: "5px",
              }}
              className="fas fa-paper-plane"
            ></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
