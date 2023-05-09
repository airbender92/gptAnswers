Yes, the `contentBase` option of the webpack devServer can be very useful. 

The `contentBase` option specifies the directory where the webpack devServer should serve content from. When a browser requests a certain file, the webpack devServer will first look in the `contentBase` directory to see if the file exists there. If it does, it will serve that file to the browser. If it doesn't exist in the `contentBase` directory, it will look for the file in the output directory of the webpack build.

This option is particularly useful when you are developing a web application and want to serve static assets such as HTML, CSS, JS, images, etc. The `contentBase` option makes it easy to serve these assets directly from your development environment without needing a separate web server.

Here's an example configuration object for the webpack devServer that uses the `contentBase` option:

```javascript
devServer: {
  contentBase: path.join(__dirname, 'public'), // Serve files from the public directory
  compress: true,
  port: 9000
}
```

In this example, the `contentBase` option is set to `path.join(__dirname, 'public')`, which means the webpack devServer will serve files from the `public` directory at the root of the project.