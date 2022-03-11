import React from "react";

const Chat = () => {
  return (
    <div className="fixed bottom-9 z-10" style={{ right: 30 }}>
      <button type="button" className="btn-chat bg-witech-link rounded-full">
        <img src="/svg/chat.svg" width={32} height={32} />
      </button>
    </div>
  );
};

export default Chat;
