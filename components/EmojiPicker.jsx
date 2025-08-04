import { useState, useEffect, useRef } from "react";

const EmojiComponent = ({ onEmojiSelect }) => {
  const pickerRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  // Common emojis for quick access
  const commonEmojis = [
    "😊",
    "😂",
    "❤️",
    "👍",
    "🎉",
    "🔥",
    "💯",
    "✨",
    "👏",
    "🙌",
    "😍",
    "🥰",
    "😎",
    "🤔",
    "😅",
    "😭",
    "😱",
    "🤯",
    "😤",
    "😇",
    "😋",
    "🤗",
    "🤝",
    "💪",
    "🧠",
    "💡",
    "🚀",
    "⭐",
    "🌟",
    "💎",
  ];

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  const handleEmojiClick = (emoji) => {
    setChosenEmoji(emoji);
    if (onEmojiSelect) {
      onEmojiSelect(emoji);
    }
    setShowPicker(false);
  };

  return (
    <div className="relative" ref={pickerRef}>
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
      >
        😊
      </button>

      {showPicker && (
        <div className="absolute left-0 top-10 mb-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs">
          <div className="grid grid-cols-6 gap-2">
            {commonEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-2xl hover:bg-gray-100 rounded p-1 transition-colors"
                title={emoji}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <button
              onClick={() => setShowPicker(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* {chosenEmoji && (
        <span className="ml-2 text-sm">Selected: {chosenEmoji}</span>
      )} */}
    </div>
  );
};

export default EmojiComponent;
