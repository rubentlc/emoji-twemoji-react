import React from 'react';
import { render} from 'react-dom';
import EmojiPicker from '../../src';
import './style.css'
const App = () => (
    <div className="EmojiPicker">
        <EmojiPicker onEmojiClick={(url) => {console.log(url)}} />
    </div>
    
);
render(<App />, document.getElementById("root"));