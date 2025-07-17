/* import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiComponent = ({ selected }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Selected</span>
      )}
    </div>
  );
};

export default EmojiComponent;
 */