//the require function can be used to load external modules into our files.
//modules that we create, modules that come with node, or other modules.
const path = require("path");



/*console.log(__dirname);
console.log(__filename); */

/*Using the path module, we can use the basename function to expose the same info,
working with path strings. */

console.log(`The file name is ${path.basename(__filename)}`);
