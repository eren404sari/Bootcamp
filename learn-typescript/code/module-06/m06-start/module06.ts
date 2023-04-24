/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }

}

//let cities = new DataStore();
let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
let numbers = new DataStore<number>();

numbers.AddOrUpdate(0, 4);
numbers.AddOrUpdate(1, 8);
numbers.AddOrUpdate(2, 16);

console.log(numbers.GetData(0)); // returns 4

// TODO Test items as objects.
interface Cat {
    name: string;
    age: number;
}

let cat = new DataStore<Cat>();

cat.AddOrUpdate(0, { name: 'Lieutenant', age: 8 });
cat.AddOrUpdate(1, { name: 'Little Bro', age: 4 });

console.log(cat.GetData(0)); // returns { name: 'Lieutenant', age: 8 }