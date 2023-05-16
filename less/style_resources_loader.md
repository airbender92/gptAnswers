In `chainwebpack`, `.use()` is a method that is used to specify a loader for a module. The `less-loader` is a popular loader used in webpack to transform less files into CSS. 

The `style-resources-loader` is another loader that allows us to use global styles across our project. It works by injecting the specified set of style resources (e.g variables, mixins, etc) directly into the source code.

So, `.use('less-laoder').loader('style-resources-loader')` specifies that we want to first apply the `less-loader` and then apply the `style-resources-loader` to our project. This ensures that our global styles are available throughout our project.

---

In `chainwebpack`, `.use('less-laoder').loader('style-resources-loader')` specifies that we want to use the `less-loader` and then the `style-resources-loader`.

`.options()` is a method used to pass additional options to a loader, which helps to customize its behavior. 

In this case, the option being passed to the `style-resources-loader` is `patterns`, which is an array of file paths containing the resources we want to inject as global styles.

The `path.resolve(__dirname, '../node_modules/themes/const.less')` is resolving the absolute path to the less file containing the styles we want to inject into our project. This will ensure that the `style-resources-loader` has access to the resources it needs during the build process.

So, essentially, `.use('less-laoder').loader('style-resources-loader').options({ patterns: path.resolve(__dirname, '../node_modules/themes/const.less')} )` is configuring the `style-resources-loader` to inject the styles defined in `const.less` located in `../node_modules/themes` directory into our project as global styles during the build process.