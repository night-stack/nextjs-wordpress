import React from "react";

const Chat = () => {
  return (
    <div className="chat-wrapper fixed bottom-9 z-10">
      {/* <button type="button" className="btn-chat bg-witech-link rounded-full">
        <img src="/svg/chat.svg" />
      </button> */}
      <a
        className="btn-chat bg-witech-link rounded-full"
        rel="noopener"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=628116513338&text=Hi%20Witech%20Enterprise!%0AI%20want%20to%20discuss%20something."
      >
        <img src="/svg/chat.svg" />
      </a>
    </div>
  );
};

export default Chat;
