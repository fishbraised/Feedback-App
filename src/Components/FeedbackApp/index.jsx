import React, { Component } from 'react';
import './index.css';

class FeedbackApp extends Component {
  state = { emojiClicked: false };

  onEmojiClick = () => this.setState({ emojiClicked: true });

  ratingPart = () => {
    const { resources } = this.props;
    const { emojis } = resources;

    return (
      <div className="content-con">
        <h1 className="instruction-text">
          Rate your satisfaction with our customer support performance?
        </h1>
        <ul className="rating-con">
          {emojis.map((emoji) => (
            <li key={emoji.id}>
              <button className="emoji-btn" onClick={this.onEmojiClick}>
                <img className="emoji-img" src={emoji.imageUrl} alt="img" />
                <p className="emoji-text">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  thanksPart = () => {
    const { resources } = this.props;
    const { loveEmojiUrl } = resources;

    return (
      <div className="content-con">
        <img className="heart-emoji" src={loveEmojiUrl} alt="img" />
        <h1 className="thanks-text">Thank you!</h1>
        <p className="thanks-desc">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    );
  };

  render() {
    const { emojiClicked } = this.state;

    return (
      <div className="bg-con">
        {emojiClicked ? this.thanksPart() : this.ratingPart()}
      </div>
    );
  }
}

export default FeedbackApp;
