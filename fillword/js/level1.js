// Уровни


// Цвета

const colors =  {
  board:[
  ["P", "A", "T", "N", "G", "K", "Q", "G", "C", "Y"],
  ["N", "N", "C", "Q", "P", "U", "R", "P", "L", "E"],
  ["W", "B", "R", "O", "W", "N", "H", "F", "H", "L"],
  ["K", "L", "U", "X", "J", "N", "D", "B", "H", "L"],
  ["K", "U", "O", "R", "A", "N", "G", "E", "F", "O"],
  ["R", "E", "Z", "G", "R", "A", "Y", "F", "O", "W"],
  ["G", "V", "Q", "R", "X", "B", "L", "A", "C", "K"],
  ["V", "G", "X", "E", "U", "W", "H", "I", "T", "E"],
  ["M", "L", "R", "E", "G", "C", "R", "E", "D", "Y"],
  ["S", "U", "L", "N", "C", "X", "A", "E", "Q", "S"]
],
words: [
  "BLACK",
  "WHITE",
  "RED",
  "YELLOW",
  "BLUE",
  "GREEN",
  "ORANGE",
  "GRAY",
  "BROWN",
  "PURPLE",
],

solve: [9,0,9,7,4,1,9,1,1,2,5,2,1,2,1,5,2,4,7,4,3,5,6,5,3,5,3,9,5,6,9,6,5,7,9,7,6,8,8,8]

};

// Животные

const animals = {
  board: [
  ["F", "L", "T", "T", "I", "G", "E", "R", "U", "Z", "Z", "C"],
  ["K", "J", "E", "L", "E", "P", "H", "A", "N", "T", "Q", "B"],
  ["Q", "L", "I", "F", "O", "X", "C", "M", "E", "J", "N", "N"],
  ["N", "B", "I", "R", "D", "M", "R", "F", "I", "V", "G", "M"],
  ["K", "R", "N", "J", "F", "O", "O", "H", "G", "R", "J", "M"],
  ["U", "E", "E", "A", "P", "N", "C", "M", "I", "Y", "D", "K"],
  ["B", "Z", "R", "W", "P", "K", "O", "D", "R", "X", "W", "R"],
  ["W", "O", "L", "F", "Z", "E", "D", "L", "A", "B", "Z", "N"],
  ["Q", "D", "Z", "I", "L", "Y", "I", "I", "F", "E", "R", "H"],
  ["M", "B", "D", "S", "X", "C", "L", "O", "F", "A", "P", "W"],
  ["L", "U", "F", "H", "C", "R", "E", "N", "E", "R", "V", "Q"],
  ["C", "W", "I", "G", "H", "N", "I", "X", "O", "B", "C", "F"],
],
words: [
  "LION",
  "WOLF",
  "BEAR",
  "TIGER",
  "ELEPHANT",
  "CROCODILE",
  "GIRAFFE",
  "MONKEY",
  "FOX",
  "BIRD",
  "FISH",
],
solve: [3,0,7,0,2,1,9,1,3,2,5,2,6,2,6,10,7,7,7,10,8,4,8,10,9,7,9,10,0,7,3,7,3,7,3,10,1,3,4,3,5,3,5,8]
};

const animals2 = {
  board: [
  ["L", "L", "I", "Z", "A", "R", "D", "Z", "E", "B", "R", "A"],
  ["V", "G", "L", "U", "U", "J", "A", "C", "H", "R", "P", "P"],
  ["I", "J", "T", "S", "Q", "B", "U", "J", "X", "G", "B", "A"],
  ["R", "C", "M", "Z", "G", "P", "O", "E", "A", "M", "C", "N"],
  ["M", "C", "S", "H", "V", "A", "K", "T", "Q", "S", "P", "D"],
  ["N", "H", "G", "I", "G", "R", "J", "L", "H", "J", "M", "A"],
  ["L", "E", "O", "P", "A", "R", "D", "U", "I", "Z", "V", "I"],
  ["R", "E", "Y", "P", "H", "O", "J", "C", "V", "T", "J", "T"],
  ["A", "T", "L", "O", "W", "Y", "D", "I", "Y", "U", "A", "Z"],
  ["J", "A", "C", "P", "N", "L", "R", "G", "D", "L", "V", "Y"],
  ["S", "H", "X", "R", "H", "C", "V", "A", "N", "A", "Q", "H"],
  ["H", "G", "Z", "W", "N", "U", "D", "C", "E", "O", "H", "C"],
],
words: [
  "LEOPARD",
  "ZEBRA",
  "PANDA",
  "CHEETAH",
  "HIPPO",
  "PARROT",
  "LIZARD",
]
};

const vacation = {
  board: [
  ["L", "T", "K", "V", "H", "V", "B", "W", "V", "R", "D", "C"],
  ["B", "O", "F", "P", "O", "R", "O", "C", "E", "A", "N", "J"],
  ["S", "L", "R", "O", "T", "J", "Y", "O", "E", "D", "I", "X"],
  ["H", "S", "K", "E", "H", "H", "U", "S", "E", "A", "U", "W"],
  ["E", "I", "S", "U", "N", "G", "L", "A", "S", "S", "E", "S"],
  ["L", "S", "S", "A", "N", "D", "C", "A", "S", "T", "L", "E"],
  ["L", "W", "O", "U", "L", "D", "Q", "U", "G", "L", "K", "W"],
  ["U", "I", "D", "Q", "F", "W", "A", "V", "E", "F", "E", "R"],
  ["S", "M", "I", "U", "M", "B", "R", "E", "L", "L", "A", "O"],
  ["J", "M", "N", "Z", "B", "E", "A", "C", "H", "Z", "V", "C"],
  ["C", "E", "D", "W", "I", "U", "C", "L", "H", "I", "A", "K"],
  ["W", "R", "V", "G", "Z", "N", "R", "X", "U", "V", "A", "T"],
],
words: [
  "SEA",
  "SANDCASTLE",
  "BEACH",
  "OCEAN",
  "WAVE",
  "UMBRELLA",
  "SWIMMER",
  "SUNGLASSES",
  "SHELL",
  "ROCK",
]};

const bodyParts = {
  board: [
  [ 'I', 'F', 'T', 'N', 'O', 'S', 'E', 'T', 'J', 'W' ],
  [ 'P', 'V', 'H', 'A', 'N', 'D', 'P', 'P', 'F', 'D' ],
  [ 'F', 'K', 'Q', 'L', 'E', 'G', 'U', 'Y', 'Z', 'D' ],
  [ 'O', 'M', 'F', 'I', 'N', 'G', 'E', 'R', 'L', 'Y' ],
  [ 'R', 'Y', 'C', 'D', 'A', 'S', 'E', 'G', 'T', 'U' ],
  [ 'E', 'K', 'Q', 'L', 'I', 'P', 'S', 'C', 'O', 'K' ],
  [ 'H', 'B', 'R', 'N', 'N', 'T', 'H', 'F', 'E', 'U' ],
  [ 'E', 'Y', 'E', 'S', 'B', 'E', 'A', 'A', 'R', 'M' ],
  [ 'A', 'C', 'Y', 'T', 'R', 'W', 'I', 'D', 'L', 'M' ],
  [ 'D', 'H', 'Z', 'U', 'F', 'T', 'R', 'A', 'N', 'G' ]
],
words: [
  "ARM",
  "LEG",
  "HAND",
  "FINGER",
  "TOE",
  "EYES",
  "FOREHEAD",
  "NOSE",
  "HAIR",
  "LIPS",
]
};

const bodyParts2 = {
  board: [
  [ 'H', 'K', 'N', 'E', 'E', 'R', 'S', 'E', 'N', 'V' ],
  [ 'E', 'H', 'P', 'I', 'R', 'S', 'Y', 'T', 'N', 'W' ],
  [ 'A', 'S', 'F', 'R', 'N', 'H', 'F', 'W', 'E', 'J' ],
  [ 'R', 'S', 'H', 'C', 'E', 'E', 'M', 'J', 'C', 'Q' ],
  [ 'S', 'S', 'B', 'H', 'P', 'A', 'F', 'H', 'K', 'E' ],
  [ 'A', 'C', 'Q', 'E', 'T', 'D', 'O', 'D', 'V', 'F' ],
  [ 'R', 'X', 'S', 'E', 'N', 'S', 'O', 'Q', 'A', 'L' ],
  [ 'M', 'Z', 'J', 'K', 'Z', 'S', 'T', 'A', 'J', 'Y' ],
  [ 'N', 'K', 'S', 'H', 'O', 'U', 'L', 'D', 'E', 'R' ],
  [ 'M', 'M', 'O', 'U', 'T', 'H', 'F', 'E', 'V', 'P' ] 
],
words: [
  "HEAD",
  "MOUTH",
  "CHEEK",
  "NECK",
  "EARS",
  "KNEE",
  "SHOULDER",
  "FOOT",
  "ARM",
]
};

const breakfast = {
  board: [
  [ 'L', 'Q', 'E', 'Z', 'N', 'V', 'P', 'O', 'D', 'D', 'M', 'V' ],
  [ 'X', 'S', 'Z', 'S', 'F', 'Z', 'N', 'D', 'V', 'B', 'R', 'E' ],
  [ 'Q', 'E', 'O', 'A', 'C', 'E', 'R', 'E', 'A', 'L', 'P', 'S' ],
  [ 'U', 'E', 'L', 'Z', 'Y', 'O', 'R', 'F', 'G', 'M', 'O', 'S' ],
  [ 'L', 'Y', 'N', 'U', 'Y', 'M', 'W', 'X', 'T', 'E', 'A', 'A' ],
  [ 'J', 'C', 'O', 'F', 'F', 'E', 'E', 'G', 'H', 'O', 'T', 'W' ],
  [ 'X', 'W', 'M', 'N', 'H', 'L', 'V', 'J', 'L', 'A', 'M', 'O' ],
  [ 'B', 'A', 'C', 'O', 'N', 'E', 'S', 'H', 'E', 'D', 'E', 'U' ],
  [ 'A', 'X', 'A', 'H', 'V', 'T', 'P', 'M', 'E', 'W', 'A', 'B' ],
  [ 'Y', 'O', 'G', 'U', 'R', 'T', 'A', 'W', 'G', 'I', 'L', 'X' ],
  [ 'G', 'D', 'S', 'O', 'C', 'E', 'B', 'O', 'G', 'W', 'M', 'V' ],
  [ 'T', 'O', 'A', 'S', 'T', 'G', 'M', 'L', 'S', 'U', 'V', 'G' ] 
],
words: [
"OMELETTE",
"CEREAL",
"BACON",
"EGGS",
"COFFEE",
"TEA",
"OATMEAL",
"TOAST",
"YOGURT",
]
};

const days = {
  board: [
  [ 'L', 'M', 'M', 'S', 'U', 'N', 'D', 'A', 'Y', 'S', 'N', 'S' ],
  [ 'R', 'W', 'E', 'D', 'N', 'E', 'S', 'D', 'A', 'Y', 'T', 'A' ],
  [ 'P', 'S', 'B', 'I', 'B', 'Z', 'H', 'W', 'T', 'A', 'U', 'H' ],
  [ 'O', 'B', 'R', 'A', 'U', 'H', 'W', 'C', 'H', 'G', 'E', 'C' ],
  [ 'G', 'N', 'Y', 'B', 'Q', 'N', 'E', 'N', 'U', 'J', 'S', 'D' ],
  [ 'B', 'G', 'Z', 'B', 'X', 'A', 'E', 'S', 'R', 'N', 'D', 'X' ],
  [ 'Q', 'U', 'L', 'A', 'T', 'O', 'K', 'Z', 'S', 'J', 'A', 'K' ],
  [ 'Z', 'A', 'E', 'T', 'S', 'F', 'R', 'I', 'D', 'A', 'Y', 'L' ],
  [ 'G', 'A', 'A', 'S', 'B', 'Z', 'U', 'K', 'A', 'V', 'W', 'O' ],
  [ 'O', 'S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y', 'W', 'I', 'V' ],
  [ 'S', 'M', 'O', 'N', 'D', 'A', 'Y', 'X', 'J', 'D', 'G', 'C' ],
  [ 'R', 'V', 'Z', 'O', 'A', 'K', 'O', 'H', 'L', 'Y', 'V', 'E' ]
],
words: [
"WEEK",
"MONDAY",
"TUESDAY",
"WEDNESDAY",
"THOURSDAY",
"FRIDAY",
"SATURDAY",
"SUNDAY",
]
};

const dessert = {
  board: [
  [ 'M', 'U', 'F', 'F', 'I', 'N', 'U', 'F', 'B', 'O', 'X', 'V' ],
  [ 'V', 'U', 'R', 'X', 'D', 'M', 'Q', 'K', 'R', 'W', 'I', 'J' ],
  [ 'S', 'K', 'N', 'I', 'O', 'Z', 'M', 'C', 'O', 'Y', 'Z', 'A' ],
  [ 'V', 'U', 'V', 'H', 'I', 'P', 'I', 'E', 'W', 'R', 'H', 'R' ],
  [ 'L', 'K', 'L', 'G', 'S', 'I', 'L', 'I', 'N', 'O', 'C', 'V' ],
  [ 'I', 'W', 'R', 'Q', 'I', 'L', 'K', 'Y', 'I', 'U', 'O', 'U' ],
  [ 'R', 'F', 'R', 'D', 'P', 'X', 'S', 'E', 'E', 'O', 'O', 'U' ],
  [ 'C', 'D', 'M', 'X', 'Q', 'I', 'H', 'U', 'C', 'A', 'K', 'E' ],
  [ 'J', 'G', 'H', 'W', 'C', 'P', 'A', 'R', 'F', 'A', 'I', 'T' ],
  [ 'Z', 'C', 'U', 'P', 'C', 'A', 'K', 'E', 'H', 'X', 'E', 'V' ],
  [ 'R', 'Z', 'C', 'G', 'R', 'U', 'R', 'U', 'L', 'O', 'N', 'Q' ],
  [ 'S', 'U', 'A', 'T', 'A', 'H', 'Y', 'T', 'P', 'J', 'C', 'L' ]
  ],
words: [
"COOKIE",
"CAKE",
"CUPCAKE",
"MILKSHAKE",
"PARFAIT",
"PIE",
"MUFFIN",
"BROWNIE",
]
};

const family = {
  board: [
  [ 'A', 'K', 'L', 'B', 'U', 'C', 'E', 'D', 'I', 'X' ],
  [ 'B', 'K', 'F', 'R', 'U', 'W', 'B', 'A', 'P', 'S' ],
  [ 'V', 'M', 'I', 'O', 'S', 'O', 'N', 'U', 'X', 'C' ],
  [ 'Q', 'M', 'O', 'T', 'H', 'E', 'R', 'G', 'N', 'O' ],
  [ 'F', 'A', 'T', 'H', 'E', 'R', 'D', 'H', 'B', 'U' ],
  [ 'S', 'N', 'N', 'E', 'T', 'B', 'P', 'T', 'T', 'S' ],
  [ 'B', 'P', 'T', 'R', 'Q', 'Z', 'D', 'E', 'S', 'I' ],
  [ 'S', 'I', 'S', 'T', 'E', 'R', 'S', 'R', 'H', 'N' ],
  [ 'H', 'F', 'W', 'T', 'N', 'P', 'A', 'U', 'N', 'T' ],
  [ 'W', 'W', 'J', 'S', 'F', 'U', 'N', 'C', 'L', 'E' ]
  ],
words: [
"MOTHER",
"FATHER",
"SISTER",
"BROTHER",
"AUNT",
"UNCLE",
"COUSIN",
"SON",
"DAUGHTER",
]
};

const berries = {
  board: [
  [ 'X', 'C', 'R', 'J', 'Z', 'T', 'N', 'O', 'M', 'R', 'N', 'Z' ],
  [ 'W', 'V', 'P', 'P', 'I', 'A', 'K', 'Z', 'T', 'A', 'N', 'X' ],
  [ 'Y', 'U', 'X', 'O', 'R', 'N', 'I', 'O', 'N', 'S', 'G', 'W' ],
  [ 'N', 'G', 'R', 'M', 'F', 'G', 'W', 'B', 'P', 'P', 'S', 'A' ],
  [ 'R', 'R', 'Q', 'E', 'C', 'E', 'I', 'L', 'L', 'B', 'R', 'T' ],
  [ 'R', 'A', 'Y', 'G', 'V', 'R', 'R', 'U', 'U', 'E', 'C', 'E' ],
  [ 'F', 'P', 'B', 'R', 'C', 'I', 'B', 'E', 'M', 'R', 'Y', 'R' ],
  [ 'T', 'E', 'X', 'A', 'I', 'N', 'K', 'B', 'M', 'R', 'A', 'M' ],
  [ 'Y', 'D', 'W', 'N', 'Z', 'E', 'X', 'E', 'R', 'Y', 'Y', 'E' ],
  [ 'S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y', 'Q', 'L' ],
  [ 'V', 'C', 'H', 'T', 'G', 'C', 'T', 'R', 'Z', 'G', 'G', 'O' ],
  [ 'O', 'Y', 'M', 'E', 'L', 'O', 'N', 'Y', 'C', 'L', 'H', 'N' ] 
  ],
words: [
"POMEGRANATE",
"TANGERINE",
"WATERMELON",
"KIWI",
"PLUM",
"STRAWBERRY",
"GRAPE",
"RASPBERRY",
"MELON",
"BLUEBERRY",
]
};

const fruit = {
  board: [
  [ 'K', 'V', 'Y', 'X', 'I', 'V', 'G', 'A', 'B', 'U' ],
  [ 'Z', 'L', 'E', 'M', 'O', 'N', 'R', 'H', 'W', 'B' ],
  [ 'P', 'E', 'A', 'R', 'R', 'K', 'A', 'A', 'W', 'I' ],
  [ 'D', 'P', 'I', 'N', 'E', 'A', 'P', 'P', 'L', 'E' ],
  [ 'B', 'O', 'R', 'A', 'N', 'G', 'E', 'I', 'P', 'U' ],
  [ 'A', 'A', 'P', 'P', 'L', 'E', 'F', 'Z', 'E', 'T' ],
  [ 'N', 'Z', 'E', 'E', 'F', 'T', 'R', 'A', 'A', 'E' ],
  [ 'A', 'U', 'F', 'S', 'O', 'I', 'U', 'A', 'C', 'J' ],
  [ 'N', 'N', 'D', 'T', 'D', 'U', 'I', 'E', 'H', 'I' ],
  [ 'A', 'P', 'R', 'I', 'C', 'O', 'T', 'L', 'V', 'I' ]
  ],
words: [
"APPLE",
"ORANGE",
"LEMON",
"PEAR",
"PEACH",
"BANANA",
"APRICOT",
"GRAPEFRUIT",
"PINEAPPLE",
]
};

const furniture = {
  board: [
  [ 'X', 'Z', 'S', 'D', 'N', 'B', 'E', 'D', 'H', 'A' ],
  [ 'R', 'D', 'A', 'S', 'I', 'G', 'I', 'S', 'O', 'O' ],
  [ 'X', 'E', 'L', 'F', 'G', 'W', 'R', 'Z', 'S', 'Q' ],
  [ 'B', 'S', 'S', 'Y', 'H', 'Y', 'C', 'W', 'M', 'D' ],
  [ 'C', 'K', 'H', 'H', 'T', 'P', 'H', 'Y', 'L', 'R' ],
  [ 'O', 'R', 'E', 'P', 'S', 'O', 'A', 'Z', 'T', 'E' ],
  [ 'U', 'V', 'L', 'V', 'T', 'Y', 'I', 'X', 'A', 'S' ],
  [ 'C', 'J', 'F', 'F', 'A', 'Z', 'R', 'P', 'B', 'S' ],
  [ 'H', 'Z', 'Q', 'X', 'N', 'G', 'S', 'M', 'L', 'E' ],
  [ 'D', 'S', 'E', 'N', 'D', 'S', 'K', 'K', 'E', 'R' ]
  ],
words: [
"CHAIR",
"TABLE",
"COUCH",
"BED",
"DRESSER",
"DESK",
"SHELF",
"NIGHTSTAND",
]
};

const lunch = {
  board: [
  [ 'X', 'A', 'Z', 'Q', 'H', 'Y', 'A', 'P', 'I', 'Z', 'Z', 'A' ],
  [ 'D', 'X', 'B', 'U', 'R', 'G', 'E', 'R', 'V', 'F', 'Y', 'L' ],
  [ 'F', 'W', 'B', 'E', 'F', 'R', 'U', 'I', 'T', 'T', 'C', 'F' ],
  [ 'K', 'S', 'K', 'S', 'S', 'A', 'N', 'D', 'W', 'I', 'C', 'H' ],
  [ 'S', 'F', 'Q', 'A', 'G', 'J', 'L', 'E', 'V', 'W', 'Y', 'T' ],
  [ 'Q', 'W', 'J', 'D', 'W', 'W', 'M', 'S', 'W', 'N', 'T', 'B' ],
  [ 'J', 'T', 'U', 'I', 'C', 'A', 'N', 'A', 'I', 'S', 'U', 'R' ],
  [ 'C', 'R', 'I', 'L', 'Y', 'T', 'O', 'L', 'K', 'T', 'H', 'W' ],
  [ 'Q', 'R', 'C', 'L', 'K', 'E', 'V', 'A', 'T', 'Z', 'J', 'S' ],
  [ 'E', 'A', 'E', 'A', 'I', 'R', 'F', 'D', 'G', 'Y', 'F', 'O' ],
  [ 'W', 'R', 'Y', 'W', 'Q', 'C', 'M', 'F', 'G', 'S', 'D', 'U' ],
  [ 'B', 'A', 'P', 'P', 'L', 'E', 'S', 'A', 'U', 'C', 'E', 'P' ] 
  ],
words: [
"SALAD",
"SANDWICH",
"SOUP",
"FRUIT",
"PIZZA",
"BURGER",
"JUICE",
"WATER",
"APPLESAUCE",
"QUESADILLA",
]
};

const months = {
  board: [
  [ 'Z', 'J', 'T', 'I', 'D', 'A', 'Z', 'J', 'O', 'T', 'X', 'P' ],
  [ 'U', 'Z', 'B', 'Q', 'E', 'U', 'E', 'H', 'N', 'D', 'D', 'Z' ],
  [ 'D', 'V', 'A', 'T', 'C', 'G', 'I', 'J', 'J', 'U', 'N', 'E' ],
  [ 'S', 'W', 'E', 'Q', 'E', 'U', 'N', 'A', 'O', 'A', 'A', 'M' ],
  [ 'E', 'N', 'B', 'C', 'M', 'S', 'V', 'N', 'N', 'U', 'C', 'N' ],
  [ 'P', 'P', 'A', 'F', 'B', 'T', 'R', 'U', 'Z', 'N', 'R', 'O' ],
  [ 'T', 'H', 'B', 'W', 'E', 'Y', 'G', 'A', 'Z', 'W', 'B', 'V' ],
  [ 'E', 'F', 'E', 'B', 'R', 'U', 'A', 'R', 'Y', 'H', 'J', 'E' ],
  [ 'M', 'A', 'R', 'C', 'H', 'U', 'I', 'Y', 'T', 'D', 'U', 'M' ],
  [ 'B', 'O', 'S', 'Q', 'A', 'E', 'W', 'P', 'I', 'I', 'L', 'B' ],
  [ 'E', 'A', 'P', 'R', 'I', 'L', 'I', 'T', 'M', 'A', 'Y', 'E' ],
  [ 'R', 'O', 'C', 'T', 'O', 'B', 'E', 'R', 'G', 'K', 'R', 'R' ] 
  ],
words: [
"JANUARY",
"FEBRUARY",
"MARCH",
"APRIL",
"MAY",
"JUNE",
"JULY",
"AUGUST",
"SEPTEMBER",
"OCTOBER",
"DECEMBER",
]
};

const nature = {
  board: [
  [ 'Q', 'X', 'J', 'E', 'P', 'M', 'H', 'H', 'G', 'Z', 'B', 'O' ],
  [ 'F', 'B', 'C', 'U', 'A', 'Y', 'G', 'R', 'O', 'U', 'N', 'D' ],
  [ 'Q', 'U', 'T', 'U', 'Z', 'W', 'X', 'K', 'J', 'M', 'Q', 'A' ],
  [ 'C', 'S', 'R', 'P', 'R', 'I', 'V', 'E', 'R', 'U', 'O', 'U' ],
  [ 'P', 'H', 'E', 'V', 'F', 'N', 'L', 'E', 'S', 'A', 'L', 'M' ],
  [ 'D', 'E', 'E', 'Y', 'L', 'J', 'G', 'V', 'F', 'V', 'M', 'W' ],
  [ 'G', 'S', 'O', 'V', 'O', 'L', 'A', 'K', 'E', 'G', 'C', 'E' ],
  [ 'T', 'U', 'R', 'J', 'W', 'L', 'U', 'R', 'V', 'P', 'D', 'W' ],
  [ 'G', 'N', 'K', 'J', 'E', 'V', 'S', 'K', 'Y', 'B', 'C', 'N' ],
  [ 'M', 'O', 'M', 'H', 'R', 'R', 'S', 'R', 'U', 'S', 'Y', 'Z' ],
  [ 'C', 'E', 'A', 'I', 'R', 'L', 'Q', 'O', 'C', 'E', 'A', 'N' ],
  [ 'P', 'D', 'F', 'E', 'G', 'Q', 'F', 'H', 'L', 'A', 'A', 'G' ]  
  ],
words: [
"TREE",
"FLOWER",
"BUSHES",
"SUN",
"SKY",
"GROUND",
"AIR",
"SEA",
"OCEAN",
"RIVER",
"LAKE",
]
};


const nature2 = {
  board: [
  [ 'S', 'P', 'I', 'G', 'F', 'S', 'A', 'N', 'D', 'J', 'O', 'P' ],
  [ 'W', 'W', 'D', 'Y', 'F', 'U', 'B', 'F', 'W', 'T', 'G', 'W' ],
  [ 'O', 'A', 'D', 'E', 'S', 'E', 'R', 'T', 'G', 'N', 'A', 'I' ],
  [ 'G', 'T', 'A', 'B', 'B', 'F', 'A', 'R', 'G', 'S', 'R', 'Z' ],
  [ 'T', 'E', 'R', 'N', 'E', 'O', 'I', 'H', 'R', 'I', 'D', 'F' ],
  [ 'K', 'R', 'A', 'V', 'A', 'R', 'N', 'T', 'A', 'R', 'E', 'Q' ],
  [ 'K', 'Y', 'F', 'C', 'C', 'E', 'B', 'D', 'S', 'M', 'N', 'D' ],
  [ 'X', 'V', 'N', 'H', 'H', 'S', 'O', 'E', 'S', 'V', 'H', 'V' ],
  [ 'G', 'C', 'V', 'Q', 'V', 'T', 'W', 'C', 'H', 'L', 'I', 'Z' ],
  [ 'M', 'O', 'U', 'N', 'T', 'A', 'I', 'N', 'M', 'Y', 'T', 'K' ],
  [ 'R', 'T', 'Q', 'J', 'X', 'X', 'M', 'U', 'Q', 'G', 'G', 'H' ],
  [ 'T', 'P', 'R', 'M', 'R', 'M', 'B', 'N', 'L', 'K', 'E', 'P' ]  
  ],
words: [
"FOREST",
"SAND",
"MOUNTAIN",
"DESERT",
"BEACH",
"WATER",
"GARDEN",
"GRASS",
"RAINBOW",
]
};

const numbers = {
  board: [
  [ 'A', 'S', 'I', 'X', 'A', 'E', 'E', 'O', 'A', 'B' ],
  [ 'T', 'V', 'J', 'I', 'R', 'N', 'I', 'N', 'E', 'J' ],
  [ 'H', 'F', 'O', 'U', 'R', 'D', 'G', 'E', 'K', 'I' ],
  [ 'Y', 'Y', 'X', 'V', 'T', 'R', 'H', 'S', 'M', 'F' ],
  [ 'W', 'B', 'M', 'N', 'U', 'P', 'T', 'E', 'C', 'I' ],
  [ 'U', 'Z', 'T', 'Q', 'T', 'O', 'E', 'V', 'I', 'V' ],
  [ 'G', 'L', 'H', 'C', 'W', 'G', 'N', 'E', 'N', 'E' ],
  [ 'I', 'X', 'R', 'U', 'O', 'W', 'Z', 'N', 'M', 'O' ],
  [ 'O', 'S', 'E', 'S', 'R', 'O', 'A', 'T', 'K', 'E' ],
  [ 'V', 'I', 'E', 'F', 'W', 'V', 'A', 'G', 'K', 'P' ]  
  ],
  words: [
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  ]
};

const pets = {
  board: [
  [ 'W', 'F', 'I', 'S', 'H', 'I', 'J', 'C', 'A', 'H', 'R', 'R' ],
  [ 'T', 'W', 'L', 'V', 'U', 'H', 'M', 'A', 'X', 'A', 'Q', 'Y' ],
  [ 'U', 'O', 'S', 'N', 'A', 'I', 'L', 'T', 'E', 'M', 'E', 'T' ],
  [ 'R', 'R', 'D', 'P', 'D', 'R', 'O', 'V', 'B', 'S', 'V', 'A' ],
  [ 'T', 'U', 'S', 'J', 'R', 'A', 'B', 'B', 'I', 'T', 'M', 'N' ],
  [ 'L', 'T', 'P', 'R', 'D', 'T', 'K', 'D', 'A', 'E', 'Z', 'F' ],
  [ 'E', 'P', 'I', 'Z', 'Z', 'Q', 'H', 'Z', 'W', 'R', 'A', 'Z' ],
  [ 'W', 'A', 'D', 'J', 'R', 'F', 'R', 'T', 'T', 'U', 'A', 'H' ],
  [ 'N', 'R', 'E', 'D', 'M', 'F', 'F', 'Y', 'W', 'E', 'T', 'R' ],
  [ 'A', 'R', 'R', 'J', 'S', 'N', 'A', 'K', 'E', 'T', 'Q', 'L' ],
  [ 'L', 'O', 'F', 'M', 'O', 'U', 'S', 'E', 'X', 'Q', 'I', 'H' ],
  [ 'M', 'T', 'J', 'I', 'A', 'A', 'X', 'W', 'D', 'O', 'G', 'X' ]   
  ],
words: [
"DOG",
"CAT",
"PARROT",
"SNAKE",
"RABBIT",
"TURTLE",
"HAMSTER",
"FISH",
"MOUSE",
"RAT",
"SNAIL",
"SPIDER",
]
};

const rooms = {
  board: [
  [ 'U', 'C', 'W', 'G', 'U', 'B', 'T', 'Z', 'Y', 'K', 'C', 'T' ],
  [ 'K', 'B', 'N', 'A', 'Z', 'B', 'U', 'J', 'L', 'I', 'D', 'J' ],
  [ 'I', 'J', 'S', 'R', 'I', 'A', 'A', 'H', 'A', 'L', 'L', 'D' ],
  [ 'T', 'L', 'B', 'A', 'C', 'T', 'P', 'V', 'U', 'H', 'T', 'R' ],
  [ 'C', 'O', 'L', 'G', 'O', 'H', 'A', 'W', 'N', 'O', 'V', 'C' ],
  [ 'H', 'U', 'A', 'E', 'U', 'R', 'R', 'V', 'D', 'U', 'I', 'N' ],
  [ 'E', 'V', 'T', 'T', 'V', 'O', 'T', 'O', 'R', 'S', 'N', 'U' ],
  [ 'N', 'E', 'W', 'N', 'W', 'O', 'M', 'F', 'Y', 'E', 'H', 'R' ],
  [ 'A', 'B', 'A', 'S', 'E', 'M', 'E', 'N', 'T', 'U', 'U', 'S' ],
  [ 'A', 'T', 'T', 'I', 'C', 'Y', 'N', 'Q', 'A', 'U', 'J', 'E' ],
  [ 'O', 'C', 'U', 'Y', 'Y', 'E', 'T', 'X', 'C', 'Z', 'O', 'R' ],
  [ 'B', 'E', 'D', 'R', 'O', 'O', 'M', 'X', 'M', 'Q', 'X', 'Y' ]   
  ],
words: [
"HOUSE",
"BATHROOM",
"BEDROOM",
"KITCHEN",
"ATTIC",
"BASEMENT",
"APARTMENT",
"GARAGE",
"HALL",
"NURSERY",
"LAUNDRY",
],

solve: [0,1,0,7,3,0,3,5,5,1,5,8,6,2,6,10,7,2,10,2,8,1,8,7,11,5,11,11,1,8,8,8,0,9,4,9]
};

const veggies = {
  board: [
  [ 'Q', 'B', 'Z', 'V', 'C', 'A', 'R', 'R', 'O', 'T', 'Z', 'I' ],
  [ 'T', 'R', 'G', 'H', 'Q', 'R', 'M', 'Y', 'H', 'Y', 'N', 'L' ],
  [ 'B', 'O', 'O', 'U', 'L', 'L', 'K', 'F', 'T', 'A', 'I', 'A' ],
  [ 'E', 'C', 'C', 'H', 'Z', 'Y', 'T', 'K', 'O', 'D', 'X', 'W' ],
  [ 'Q', 'C', 'U', 'C', 'R', 'A', 'W', 'Z', 'M', 'D', 'K', 'W' ],
  [ 'L', 'O', 'C', 'Q', 'F', 'J', 'P', 'M', 'A', 'B', 'Z', 'G' ],
  [ 'R', 'L', 'U', 'V', 'I', 'B', 'O', 'K', 'T', 'S', 'B', 'P' ],
  [ 'H', 'I', 'C', 'M', 'K', 'X', 'T', 'Y', 'O', 'T', 'I', 'E' ],
  [ 'V', 'C', 'M', 'O', 'E', 'Z', 'A', 'T', 'N', 'S', 'I', 'P' ],
  [ 'Q', 'S', 'B', 'Z', 'A', 'S', 'T', 'B', 'I', 'O', 'B', 'P' ],
  [ 'I', 'B', 'E', 'E', 'T', 'N', 'O', 'I', 'O', 'N', 'X', 'E' ],
  [ 'F', 'J', 'R', 'F', 'A', 'I', 'W', 'Q', 'N', 'A', 'V', 'R' ] 
  ],
words: [
"BROCCOLI",
"TOMATO",
"CUCUCMBER",
"POTATO",
"PEPPER",
"CARROT",
"BEET",
"ONION",
]
};

const schoolsuplies2 = {
  board: [
  [ 'R', 'L', 'S', 'C', 'I', 'S', 'S', 'O', 'R', 'S', 'X', 'C' ],
  [ 'T', 'P', 'R', 'O', 'T', 'R', 'A', 'C', 'T', 'O', 'R', 'P' ],
  [ 'I', 'U', 'J', 'N', 'F', 'R', 'N', 'D', 'N', 'B', 'D', 'P' ],
  [ 'S', 'K', 'C', 'G', 'V', 'X', 'V', 'Q', 'K', 'U', 'S', 'E' ],
  [ 'C', 'M', 'W', 'L', 'C', 'L', 'X', 'G', 'E', 'A', 'M', 'N' ],
  [ 'O', 'X', 'W', 'U', 'F', 'D', 'S', 'G', 'V', 'F', 'H', 'C' ],
  [ 'T', 'B', 'T', 'E', 'X', 'T', 'B', 'O', 'O', 'K', 'C', 'I' ],
  [ 'C', 'S', 'T', 'A', 'P', 'L', 'E', 'R', 'F', 'F', 'V', 'L' ],
  [ 'H', 'S', 'W', 'H', 'I', 'T', 'E', 'O', 'U', 'T', 'J', 'K' ],
  [ 'X', 'E', 'M', 'Y', 'M', 'L', 'I', 'N', 'L', 'U', 'N', 'W' ],
  [ 'D', 'B', 'P', 'E', 'N', 'R', 'U', 'R', 'U', 'L', 'E', 'S' ],
  [ 'L', 'S', 'P', 'R', 'L', 'O', 'G', 'D', 'W', 'T', 'L', 'G' ] 
  ],
words: [
"PENCIL",
"TEXTBOOK",
"RULER",
"PROTRACTOR",
"STAPLER",
"SCISSORS",
"SCOTCH",
"WHITEOUT",
"GLUE",
]
};

const schoolsuplies = {
  board: [
  [ 'J', 'V', 'J', 'E', 'E', 'O', 'Y', 'Y', 'Q', 'E', 'S', 'B' ],
  [ 'Q', 'H', 'I', 'C', 'T', 'M', 'W', 'X', 'N', 'Y', 'H', 'I' ],
  [ 'E', 'R', 'A', 'S', 'E', 'R', 'B', 'Y', 'P', 'P', 'A', 'N' ],
  [ 'H', 'I', 'G', 'H', 'L', 'I', 'G', 'H', 'T', 'E', 'R', 'D' ],
  [ 'Y', 'A', 'O', 'H', 'E', 'F', 'G', 'D', 'L', 'N', 'P', 'E' ],
  [ 'N', 'O', 'T', 'E', 'B', 'O', 'O', 'K', 'L', 'C', 'E', 'R' ],
  [ 'K', 'M', 'U', 'U', 'H', 'L', 'B', 'R', 'U', 'H', 'N', 'H' ],
  [ 'P', 'A', 'M', 'R', 'L', 'A', 'Q', 'W', 'M', 'H', 'E', 'D' ],
  [ 'R', 'Q', 'K', 'L', 'J', 'F', 'O', 'L', 'D', 'E', 'R', 'C' ],
  [ 'Z', 'U', 'B', 'A', 'C', 'K', 'P', 'A', 'C', 'K', 'A', 'K' ],
  [ 'P', 'W', 'B', 'A', 'R', 'T', 'B', 'O', 'X', 'V', 'F', 'J' ],
  [ 'H', 'M', 'A', 'R', 'K', 'E', 'R', 'G', 'A', 'Y', 'R', 'S' ] 
  ],
words: [
"PEN",
"ARTBOX",
"ERASER",
"MARKER",
"NOTEBOOK",
"SHARPENER",
"HIGHLIGHTER",
"FOLDER",
"BINDER",
"BACKPACK",
]
};

const seasonWeather = {
  board: [
  [ 'W', 'Q', 'S', 'P', 'R', 'I', 'N', 'G', 'X', 'S', 'C', 'S' ],
  [ 'I', 'I', 'T', 'P', 'R', 'H', 'O', 'T', 'B', 'W', 'E', 'U' ],
  [ 'N', 'U', 'R', 'X', 'P', 'T', 'W', 'L', 'R', 'O', 'O', 'N' ],
  [ 'T', 'L', 'E', 'E', 'R', 'C', 'B', 'W', 'A', 'R', 'M', 'N' ],
  [ 'E', 'V', 'F', 'R', 'A', 'T', 'Q', 'M', 'B', 'S', 'D', 'Y' ],
  [ 'R', 'S', 'P', 'O', 'I', 'N', 'B', 'J', 'F', 'U', 'L', 'L' ],
  [ 'Z', 'N', 'G', 'P', 'N', 'E', 'Y', 'A', 'J', 'M', 'D', 'X' ],
  [ 'I', 'O', 'J', 'I', 'Y', 'Y', 'K', 'R', 'D', 'M', 'Q', 'D' ],
  [ 'F', 'W', 'U', 'X', 'O', 'G', 'S', 'V', 'D', 'E', 'F', 'M' ],
  [ 'A', 'Y', 'T', 'C', 'L', 'O', 'U', 'D', 'Y', 'R', 'S', 'K' ],
  [ 'L', 'H', 'L', 'O', 'E', 'S', 'A', 'U', 'T', 'U', 'M', 'N' ],
  [ 'L', 'H', 'O', 'H', 'H', 'H', 'Z', 'L', 'G', 'D', 'Z', 'B' ] 
  ],
words: [
"WINTER",
"SPRING",
"FALL",
"SUMMER",
"AUTUMN",
"SUNNY",
"CLOUDY",
"SNOWY",
"HOT",
"WARM",
"RAINY",
]
};

const shapes = {
  board: [
  [ 'B', 'P', 'Q', 'Q', 'T', 'K', 'Y', 'O', 'I', 'B' ],
  [ 'L', 'H', 'E', 'A', 'R', 'T', 'Y', 'V', 'X', 'L' ],
  [ 'G', 'F', 'I', 'P', 'I', 'H', 'C', 'A', 'A', 'D' ],
  [ 'R', 'E', 'C', 'T', 'A', 'N', 'G', 'L', 'E', 'I' ],
  [ 'T', 'C', 'Y', 'X', 'N', 'M', 'X', 'S', 'F', 'A' ],
  [ 'R', 'D', 'S', 'A', 'G', 'I', 'S', 'Q', 'W', 'M' ],
  [ 'T', 'E', 'T', 'Q', 'L', 'M', 'L', 'U', 'D', 'O' ],
  [ 'H', 'K', 'A', 'B', 'E', 'F', 'T', 'A', 'V', 'N' ],
  [ 'C', 'I', 'R', 'C', 'L', 'E', 'N', 'R', 'I', 'D' ],
  [ 'T', 'M', 'E', 'D', 'A', 'R', 'D', 'E', 'N', 'X' ] 
  ],
words: [
"CIRCLE",
"TRIANGLE",
"RECTANGLE",
"OVAL",
"STAR",
"DIAMOND",
"SQUARE",
"HEART",
]
};

const subjects = {
  board: [
  [ 'M', 'C', 'D', 'B', 'U', 'E', 'N', 'C', 'U', 'C', 'A', 'N' ],
  [ 'J', 'Z', 'F', 'G', 'R', 'R', 'M', 'U', 'S', 'I', 'C', 'C' ],
  [ 'P', 'S', 'O', 'F', 'O', 'W', 'R', 'I', 'T', 'I', 'N', 'G' ],
  [ 'X', 'C', 'Y', 'Y', 'U', 'B', 'C', 'M', 'I', 'L', 'U', 'M' ],
  [ 'Q', 'I', 'I', 'M', 'M', 'Q', 'X', 'Y', 'T', 'G', 'O', 'A' ],
  [ 'P', 'E', 'R', 'E', 'A', 'D', 'I', 'N', 'G', 'N', 'E', 'T' ],
  [ 'E', 'N', 'G', 'L', 'I', 'S', 'H', 'A', 'J', 'U', 'K', 'H' ],
  [ 'A', 'C', 'V', 'D', 'E', 'J', 'K', 'D', 'P', 'P', 'A', 'S' ],
  [ 'D', 'E', 'R', 'L', 'X', 'Y', 'A', 'K', 'R', 'Y', 'W', 'Z' ],
  [ 'C', 'M', 'M', 'Z', 'U', 'D', 'A', 'R', 'T', 'K', 'Q', 'X' ],
  [ 'C', 'O', 'M', 'P', 'U', 'T', 'E', 'R', 'S', 'J', 'K', 'U' ],
  [ 'J', 'S', 'C', 'P', 'E', 'C', 'R', 'A', 'O', 'F', 'I', 'L' ] 
  ],
words: [
"MATHS",
"ENGLISH",
"SCIENCE",
"WRITING",
"READING",
"ART",
"COMPUTERS",
"MUSIC",
"PE",
]
};

const veggies2 = {
  board: [
  [ 'G', 'X', 'K', 'K', 'C', 'B', 'E', 'A', 'N', 'S', 'H', 'E' ],
  [ 'P', 'E', 'A', 'S', 'T', 'T', 'D', 'E', 'L', 'C', 'D', 'T' ],
  [ 'Q', 'T', 'P', 'F', 'M', 'W', 'L', 'R', 'W', 'A', 'L', 'L' ],
  [ 'S', 'Y', 'A', 'O', 'V', 'I', 'A', 'K', 'F', 'B', 'H', 'Y' ],
  [ 'X', 'Y', 'S', 'D', 'Y', 'S', 'V', 'K', 'O', 'B', 'X', 'R' ],
  [ 'E', 'F', 'P', 'I', 'B', 'R', 'T', 'V', 'C', 'A', 'F', 'C' ],
  [ 'H', 'F', 'A', 'V', 'O', 'C', 'A', 'D', 'O', 'G', 'V', 'H' ],
  [ 'A', 'K', 'R', 'D', 'W', 'E', 'U', 'E', 'R', 'E', 'G', 'N' ],
  [ 'D', 'G', 'A', 'K', 'Q', 'D', 'N', 'F', 'N', 'Y', 'L', 'V' ],
  [ 'U', 'X', 'G', 'P', 'U', 'M', 'P', 'K', 'I', 'N', 'T', 'C' ],
  [ 'A', 'L', 'U', 'W', 'K', 'G', 'A', 'R', 'L', 'I', 'C', 'X' ],
  [ 'L', 'O', 'S', 'I', 'M', 'R', 'Z', 'V', 'G', 'Y', 'O', 'V' ] 
  ],
words: [
"CORN",
"GARLIC",
"CABBAGE",
"BEANS",
"AVOCADO",
"PEAS",
"PUMPKIN",
"ASPARAGUS",
]
};

const time = {
  board: [
  [ 'W', 'H', 'P', 'C', 'E', 'V', 'E', 'N', 'I', 'N', 'G', 'M' ],
  [ 'S', 'A', 'F', 'T', 'E', 'R', 'N', 'O', 'O', 'N', 'Q', 'P' ],
  [ 'E', 'N', 'Z', 'W', 'D', 'M', 'V', 'C', 'N', 'Q', 'U', 'H' ],
  [ 'C', 'D', 'C', 'E', 'Y', 'H', 'V', 'L', 'C', 'K', 'A', 'J' ],
  [ 'O', 'M', 'N', 'Q', 'M', 'Y', 'A', 'O', 'U', 'F', 'T', 'F' ],
  [ 'N', 'S', 'I', 'H', 'O', 'D', 'X', 'C', 'W', 'R', 'Q', 'P' ],
  [ 'D', 'I', 'G', 'U', 'R', 'M', 'O', 'K', 'H', 'H', 'E', 'N' ],
  [ 'H', 'T', 'H', 'T', 'N', 'I', 'D', 'E', 'D', 'A', 'Y', 'Y' ],
  [ 'T', 'S', 'T', 'P', 'I', 'N', 'U', 'P', 'H', 'O', 'U', 'R' ],
  [ 'N', 'N', 'N', 'K', 'N', 'U', 'X', 'G', 'Q', 'T', 'Q', 'N' ],
  [ 'Z', 'L', 'C', 'L', 'G', 'T', 'S', 'I', 'H', 'M', 'N', 'P' ],
  [ 'P', 'M', 'T', 'R', 'X', 'E', 'M', 'R', 'O', 'U', 'T', 'H' ] 
  ],
words: [
"CLOCK",
"DAY",
"NIGHT",
"HAND",
"HOUR",
"MINUTE",
"SECOND",
"MORNING",
"AFTERNOON",
"EVENING",
]
};

const transportation = {
  board: [
  [ 'U', 'H', 'K', 'J', 'E', 'B', 'I', 'K', 'E', 'X' ],
  [ 'H', 'E', 'T', 'R', 'A', 'I', 'N', 'C', 'A', 'R' ],
  [ 'Z', 'L', 'B', 'I', 'C', 'Y', 'C', 'L', 'E', 'T' ],
  [ 'E', 'I', 'V', 'C', 'R', 'O', 'C', 'K', 'E', 'T' ],
  [ 'O', 'C', 'T', 'K', 'K', 'S', 'I', 'B', 'I', 'P' ],
  [ 'P', 'O', 'A', 'U', 'B', 'D', 'N', 'E', 'P', 'L' ],
  [ 'P', 'P', 'X', 'I', 'U', 'X', 'K', 'Z', 'C', 'A' ],
  [ 'F', 'T', 'I', 'J', 'S', 'W', 'T', 'I', 'I', 'N' ],
  [ 'W', 'E', 'S', 'F', 'V', 'J', 'M', 'B', 'R', 'E' ],
  [ 'D', 'R', 'T', 'R', 'A', 'M', 'X', 'B', 'Z', 'V' ]
  ],
words: [
"CAR",
"BICYCLE",
"BIKE",
"BUS",
"TRAM",
"TRAIN",
"TAXI",
"PLANE",
"HELICOPTER",
"ROCKET",
]
};


