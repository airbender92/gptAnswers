When you use `export module mxgraph {};` in a .d.ts file, it means that you are defining the `mxgraph` module and exporting it so that it can be used in other TypeScript files. 

In order to use the `mxgraph` module in your TypeScript code, you need to import it first using `import { typeof mxgraph } from "module-name";`. The `typeof` keyword is used to make sure that you get the correct type information for the `mxgraph` module.

The reason why you cannot directly use `mxgraph` without `typeof` is because `mxgraph` is not an actual value or variable that can be used directly. Instead, it is a module that contains various functions, classes, and variables that you can use inside the module. Therefore, you need to use `typeof` to get the type information of the module before using it.