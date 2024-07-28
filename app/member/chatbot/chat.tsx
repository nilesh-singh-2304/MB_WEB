'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({

  });

  return (
    <div>

<div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">{m.content}</div>
</div> : <div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble max-w-3xl">{m.content}</div>
</div>}
          
        </div>
      ))}

    </div>

<form className='sm:ml-96 ' onSubmit={handleSubmit}>
<input
className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
  value={input}
  placeholder="Say something..."
  onChange={handleInputChange}
/>
</form>
    </div>
  );
}