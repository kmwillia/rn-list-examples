import Immutable from 'immutable';

export const flatData = [
  'Alligator', 'Bonobo', 'Chinchilla', 'Duck', 'Egret',
  'Feraligatr', 'Goat', 'Horse', 'Iguana', 'Jackal',
  'Koala', 'Lemur', 'Monkey', 'Newt', 'Ostrich',
  'Pengwing', 'Quail', 'Rat', 'Salamander', 'Tiny Fish',
  'Uakari', 'Vole', 'Warthog', 'Xerus', 'Yak',
  'Zebra',
];

export const sectionsData = [
  {
    key: 'Animals',
    data: flatData,
  },
  {
    key: 'Houses',
    data: [
      'Beach', 'Bird', 'Dog', 'Doll', 'Lustron',
      'of Representatives', 'Toll', 'White',
    ],
  },
  {
    key: 'Fruits',
    data: [
      'Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry',
      'Fig', 'Grapefruit', 'Hackberry', 'Imbe', 'Jackfruit',
    ],
  }
];

export const immutableSectionsData = Immutable.fromJS(sectionsData);