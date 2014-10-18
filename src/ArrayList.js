/**
 * Created by the Ing. Alberto Bonsanto on 10/18/2014.
 * EDAURU team.
 */

var ArrayList = function () {
    var type;
    var list = [];


    /**
     *  boolean    add(E e) Appends the specified element to the end of this list.
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
        /**
         * Probably needs a else in case of the arguments are more than 2.
         */
    };

    this.addAll = function () {
        if (arguments.length === 1) {
            list.concat(arguments[0]);
            return true;
        } else if (arguments.length === 2) {
            var index = arguments[0];
            var element = arguments[1];

            list.splice(index, element);
        }
    };

    this.get = function () {
        return list;
    }
};

var l = new ArrayList();
l.add("blah");
console.log(l.get());