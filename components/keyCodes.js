const keyCodes = {
  8: "Backspace",
  9: "Tab",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "Caps lock",
  27: "Escape",
  32: "Space",
  33: "Page up",
  34: "Page down",
  35: "End",
  36: "Home",
  37: "Arrow left",
  38: "Arrow up",
  39: "Arrow right",
  40: "Arrow down",
  45: "Insert",
  46: "Delete",
  47: "???",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  91: "Left command or Window key",
  92: "Right Window key",
  93: "Right command or Window menu",

  96: "Numpad 0",
  97: "Numpad 1",
  98: "Numpad 2",
  99: "Numpad 3",
  100: "Numpad 4",
  101: "Numpad 5",
  102: "Numpad 6",
  103: "Numpad 7",
  104: "Numpad 8",
  105: "Numpad 9",

  106: "Multiply",
  107: "Add",
  109: "Subtract",
  110: "Decimal",
  111: "Devide",

  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",

  144: "Num lock",
  145: "Scroll lock",

  186: "Semi colon or ö",
  187: "Equal sign or plus",
  188: "Comma",
  189: "Dash",
  190: "Period",
  191: "Forward slash",
  192: "Grave accent(`) or pilcrow (§)",
  219: "Open bracket or å",
  220: "Backslash",
  221: "Diaeresis (¨) or Close Bracket",
  222: "Single quote or ä",
};

function lookupKeyCode(keyCode) {
  return keyCodes[keyCode];
}

export default lookupKeyCode;