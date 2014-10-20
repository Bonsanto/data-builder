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
     *  boolean     contains(Object o)
     *  R           Returns true if this list contains the specified element.
     * */
    this.contains = function (object) {
        return list.indexOf(object) > -1;
    };


    /**
     *  void        ensureCapacity(int minCapacity)
     *              Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
     * */
    this.ensureCapacity = function (n) {
        list = new Array(n);
    };


    /**
     *  void        forEach(Consumer<? super E> action)
     *              Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception.
     * */
//    this.forEach = function (func) {
//        TODO:;
//    };


    /**
     *  E           get(int index)
     *              Returns the element at the specified position in this list.
     * */
    this.get = function (index) {
        if (index < list.length) return list[index];
        throw "Attempting is out of bounds";
    };


    /**
     * int            indexOf(Object o)
     *              Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * */
    this.indexOf = function (o) {
        return list.indexOf(o);
    };


    /**
     *  boolean     isEmpty()
     *              Returns true if this list contains no elements.
     * */
    this.isEmpty = function () {
        return list.length === 0;
    };

    /**
     *  Iterator<E>     iterator()
     *                  Returns an iterator over the elements in this list in proper sequence.
     * */
//    this.iterator = function (func) {
//        TODO:;
//    };


    /**
     *  int         lastIndexOf(Object o)
     *              Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * */
    this.lastIndexOf = function (o) {
        for (var i = list - 1; i < list.length; i--) {
            if (list[i] === o) return i;
        }
        return -1;
    };

    /**
     *  ListIterator<E>     listIterator(int index)
     *                      Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
     *  ListIterator<E>     listIterator(int index)
     *                      Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
     * */
//    this.listIterator = function() {
//    TODO:
//    };

    /**
     *  boolean     remove(Object o)
     *              Removes the first occurrence of the specified element from this list, if it is present.
     *
     *  boolean     remove(Object o)
     *              Removes the first occurrence of the specified element from this list, if it is present.
     * */
    this.remove = function () {
        if (typeof arguments[0] === "number") {
            var element = list[arguments[0]];
            list.splice(arguments[0], 1);
            return element;
        } else {
            if (list.indexOf(arguments[0]) < -1) {
                list.splice(list.indexOf(arguments[0]));
                return true;
            }
            return false;
        }
    };

    /***
     *  boolean     removeAll(Collection<?> c)
     *              Removes from this list all of its elements that are contained in the specified collection.
     *              PD: Collections can be Arrays or ArrayList, hard to implement in JS.
     */
    this.removeAll = function (c) {
        var a = (c instanceof ArrayList) ? c.toArray() : c;
        var modified = false;

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < list.length; j++) {
                if (a[i] === list[j]) {
                    modified = true;
                    list.splice(j, 1);
                    break;
                }
            }
        }
        return modified;
    };


    /**
     *  boolean 	removeIf(Predicate<? super E> filter)
     *              Removes all of the elements of this collection that satisfy the given predicate.
     */
//    this.removeIf = function() {
//    TODO:
//    };


    /**
     *  protected void 	    removeRange(int fromIndex, int toIndex)
     *                      Removes from this list all of the elements whose index is between fromIndex, inclusive, and toIndex, exclusive.
     */
//    this.removeRange = function() {
//    TODO:
//    };


    /**
     *  void 	replaceAll(UnaryOperator<E> operator)
     *          Replaces each element of this list with the result of applying the operator to that element.
     */
//    this.replaceAll = function() {
//    TODO:
//    };


    /**
     *  boolean 	retainAll(Collection<?> c)
     *              Retains only the elements in this list that are contained in the specified collection.
     */
//    this.retainAll = function() {
//    TODO:
//    };


    /***
     * E 	set(int index, E element)
     *      Replaces the element at the specified position in this list with the specified element.
     */
    this.set = function(index, element) {
        var e = list[index];
        list[index] = element;
        return e;
    };

    this.toArray = function () {
        return list;
    };


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
//console.log(array3.get(1000));
console.log(array3.remove(3));
console.log(array3.toArray());
console.log(array3.remove("3"));
console.log(array3.toArray());

console.log(typeof 12);
console.log(array instanceof Array);
console.log(array.toArray() instanceof Array);
console.log(array instanceof ArrayList);

console.log(array.toArray());
console.log(array.set(2,30));
console.log(array.toArray());
/*
var jubert = new ArrayList();
var thais = new ArrayList();

for (var i = 0; i < 100; i++) {
    jubert.add(i);
    jubert.add(i);
}
for (var i = 10; i < 37; i++) thais.add(i);

console.log(jubert.toArray());
console.log(thais.toArray());
jubert.removeAll(thais.toArray());
console.log(jubert.toArray());
console.log(thais.toArray());
*/