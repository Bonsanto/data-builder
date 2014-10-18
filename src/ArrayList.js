/**
 * Created by the Ing. Alberto Bonsanto on 10/18/2014.
 * EDAURU team.
 */

var ArrayList = function () {
    var type;
    var list = [];


    /**
     *  boolean     add(E e) Appends the specified element to the end of this list.
     *
     *  void        add(int index, E element) Inserts the specified element at the specified position in this list.
     **/
    this.add = function () {
        if (arguments.length === 1) {
            list.push(arguments[0]);
            return true;
        } else if (arguments.length === 2) {
            var index = arguments[0];
            var element = arguments[1];

            list.splice(index, element);
        }
        /* TODO: Probably needs a else in case of the arguments are more than 2.
         */
    };

    /**
     *  boolean    addAll(Collection<? extends E> c)
     *              Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
     *
     *  boolean    addAll(int index, Collection<? extends E> c)
     *              Inserts all of the elements in the specified collection into this list, starting at the specified position.
     * */
    this.addAll = function () {
        if (arguments.length === 1) {
            list = list.concat(arguments[0].toArray());
            return true;
        } else if (arguments.length === 2) {
            var index = arguments[0];
            var addingArray = arguments[1].toArray();
            var fragment1 = list.slice(0, index);
            var fragment2 = list.slice(index, list.length);
            list = fragment1.concat(addingArray);
            list = list.concat(fragment2);
        }
    };


    /**
     *  void        clear()
     *              Removes all of the elements from this list.
     * */
    this.clear = function () {
        list = [];
    };


    /**
     *  Object      clone()
     *              Returns a shallow copy of this ArrayList instance.
     * */
    this.clone = function () {
        var c = new ArrayList();

        list.forEach(function (element) {
            c.add(element);
        });
        return c;
    };


    /**
     *  boolean    contains(Object o)
     *  R           eturns true if this list contains the specified element.
     * */
    this.contains = function (object) {
        return list.indexOf(object) > -1;
    };

    /**
     *  void        ensureCapacity(int minCapacity)
     *              Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
     * */
    this.ensureCapacity = function(n) {
        list = new Array(n);
    };

    /**
     *  void 	    forEach(Consumer<? super E> action)
     *              Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception.
     * */
    this.forEach = function (func) {
        ;
    }

    this.toArray = function () {
        return list;
    }
};

var array = new ArrayList();
array.add(12);
array.add(20);
array.add(45);
var array2 = new ArrayList();
array2.add(25);
array2.add(30);
array2.add(31);
array2.add(35);
array.addAll(2, array2);
console.log(array.toArray());
var array3 = array.clone();
console.log(array3.toArray());
array.add(100);
console.log(array.toArray());
console.log(array3.toArray());
console.log(array3.contains("12"));
console.log(array3.contains(12));


