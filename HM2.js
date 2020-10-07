/*
Hashing - The process of mapping a a key to a position in the hash table.

Hash Table - Storage that holds the key/value associated with any key,

Hash Function - Maps keys to positions in the hash table.  A good hash 
function attempts to distribute the keys as evenly as possible among
 slots in the hash table.
*/

import { _hashString } from "./HashMap";

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  //djb2 algorithm
  static _hashString(string) {
    //define hash
    let hash = 5381;

    for (let i = 0; i < string.length; i++) {
      // << bitwise left shift

      // 5381 << 5 = 9 = (172192 + 5381) = 177573 + string.charCodeAt(i);
      hash = (hash << 5) + hash + string.charCodeAt(i);
    }
    // >>> zero fill right shift
    /* 
         This operator shifts the first operand the specified number of bits
          to the right. Excess bits shifted off to the right are discarded.
           Zero bits are shifted in from the left. The sign bit becomes 0, 
           so the result is always non-negative. Unlike the other bitwise 
           operators, zero-fill right shift returns an unsigned 32-bit 
           integer.
        */

    return hash >>> 0;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    // find the slot where the key belongs
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value,
      deleted: false,
    };
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;
    s;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    //reset length
    this.length = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== unfefined) {
        this.set(slot.key, slot.value);
      }
    }
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error("Key error");
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }
}
