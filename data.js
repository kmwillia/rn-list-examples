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

export const typedListData = Immutable.fromJS({
  sections: [
    {
      id: 'locA',
      title: 'Location A'
    }, {
      id: 'locB',
      title: 'Location B'
    }, {
      id: 'locC',
      title: 'Location C'
    }
  ],
  rowsForSections: {
    locA: [
      {
        name: 'John Appleton'
      }, {
        name: 'Sven Heartlock'
      }, {
        name: 'Tobias Turnbottom'
      }, {
        name: 'Wilbur Stevens'
      }, {
        name: 'Yang Wen-Li'
      }, {
        name: 'Reinhardt von Lohengramm'
      }
    ],
    locB: [
      {
        name: 'Hildegard von Mariendorf'
      }, {
        name: 'Siegfried Kircheis'
      }, {
        name: 'Julian Mintz'
      }, {
        name: 'Oskar von Reuenthal'
      }, {
        name: 'Wolfgang Mittenmeyer'
      }, {
        name: 'Paul von Oberstein'
      }, {
        name: 'Fritz Josef Bittenfeld'
      }, {
        name: 'Ulrich Kesler'
      }
    ],
    locC: [
      {
        name: 'Neidhardt Müller'
      }, {
        name: 'Adalbert von Fahrenheit'
      }, {
        name: 'Ernst von Eisenach'
      }
    ]
  },
  sectionKey: 'id'
});