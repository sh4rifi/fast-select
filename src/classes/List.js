export class List {

    constructor(array = []) {
        this.array = array;
    };

    range = (start, stop, step = 1) => {
        this.array = [start];
        while (start < stop) {
            this.array.push(start += step);
        }
        return this;
    };

    breakUp = () => {
        let tmp, current, top = this.array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = this.array[current];
            this.array[current] = this.array[top];
            this.array[top] = tmp;
        }
        return this;
    };

    replaceItem = (oldItem, newItem) => {
        this.array = this.array.map(item => item === oldItem ? newItem : item);
        return this;
    };

    get = () => (
        this.array
    );

    set = (array) => {
        this.array = array;
        return this;
    };

}

