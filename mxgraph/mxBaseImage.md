`mxImageBasePath` is a property of the `mxClient` object in mxGraph. It specifies the base path for images used in the library. The value of this property should be set to a string representing the path to the directory where the images are stored.

Here's an example of how `mxImageBasePath` can be used:

```javascript
mxClient.mxImageBasePath = 'path/to/images/';

// create an image using the imagePath method of mxUtils
var img = mxUtils.createImage('some-image.png');
```

In the example above, we're setting the value of `mxImageBasePath` to the path of the directory where our images are stored. We can then use this path to create images using the `imagePath` method of `mxUtils`.

By default, `mxImageBasePath` is set to `"mxgraph/images/"`, which assumes that the images are located in the `images` subdirectory of the `mxgraph` library. If you store your images in a different directory, you'll need to set this property accordingly.