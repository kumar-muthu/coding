class Dictionary {
    internal = Array.from({ length: 10 }).map(() => 0)
    constructor() {
        
    }

    public add = (key, value) => {
        this.internal[this.get_hash(key)] = value;
    }

    public print = () => {
        this.internal.forEach((value, index) => {
            console.log(`${index} : ${value}`);
        })
    }

    private get_hash = (key) => {
        return 4;
    }
}

const dict = new Dictionary();
dict.add('name', 100);
dict.print();
