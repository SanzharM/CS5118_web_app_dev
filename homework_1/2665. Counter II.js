/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var current = init;
    return {
        increment: () => {
            current = current + 1;
            return current;
        },
        decrement: () => {
            current = current - 1;
            return current;
        },
        reset: () => {
            current = init;
            return current;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */