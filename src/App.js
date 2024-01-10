import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <h1 >PROPTIMIZE</h1>
        <div className="side-menu-button">
          <span>+</span> New Chat
        </div>
        <div className="side-heading">
          Pinned Chats
          <div className="side-menu-bar">How does cryptocurrency work?</div>
          <div className="side-menu-bar">Can you explain blockchain in simple terms</div>
          <div className="side-menu-bar">What are the benefits of using cloud computing?</div>
        </div>
        <div className="side-heading">
          Today
          <div className="side-menu-bar">Which is the smallest bird?</div>
        </div>
        <div className="side-heading">
          Previous 7 days
          <div className="side-menu-bar">How does cryptocurrency work?</div>
          <div className="side-menu-bar">Which is the smallest bird?</div>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {/*  */}
          <div className="chat-message">
            <div className="avatar"></div>
            <div className="message">Who are you? </div>
          </div>
          {/*  */}
        <div className="chat-message chatgpt">
          <div className="avatar chatgpt"></div>
          <div className="message">I am an AI.</div>
          </div>
          <div className="chat-input">
            <textarea className ="chat-input-textarea" placeholder="Message Echo...">
            </textarea>
          </div>
          </div>
      </section>
    </div>
  );
}

export default App;
