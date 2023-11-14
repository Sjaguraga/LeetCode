/**
 * @return {Function}
 */
const createHelloWorld = () => {
    return () => {
        return 'Hello World';
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */