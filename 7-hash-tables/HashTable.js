class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;

        }
        return hash;
    }

    set(key, value) {
        let addr = this._hash(key);
        if (!this.data[addr]) {
            this.data[addr] = [];
        }
        this.data[addr].push([key, value]);
    }

    get(key) {
        let addr = this._hash(key);
        const currentBucket = this.data[addr];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) return currentBucket[i][1];
            }
        }
        else return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));