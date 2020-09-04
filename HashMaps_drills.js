const HashMap = require("./HashMap");

const main = () => {
  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Gandalf");
  lotr.set("Ent", "Treebeard");

  console.log(lotr);
};

main();

//The items were all hashed.

//The values for Maiar and Hobbit were Sauron & Frodo.
//There is a discrepency due to the previous value with the same key being deleted.

//The capacity still reads 8 because I didnt pass in a new value to overwrite the default when creating it.

/*
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

*/

//I believe the above function would output 10 and 20 the values assigned to the keys of str1 and str3.
