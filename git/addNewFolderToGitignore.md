If you want to ignore the `src/.umi` folder in your UmiJS project and remove it from Git cache, you can follow these steps:

1. Open the `.gitignore` file in your code editor.
2. Add the following line to a new line in the file:

```
src/.umi/
```

3. Save the changes to the `.gitignore` file.

If you have already committed files that you now want to ignore using `.gitignore`, you will need to remove those files from Git cache by following these steps:

1. Run the following command in your terminal:

```
git rm -r --cached src/.umi
```

This removes the `src/.umi` folder and all of its contents from the Git cache.

2. Commit the changes by running:

```
git commit -m "Remove src/.umi folder from Git cache"
```

After this, the `src/.umi` folder should be ignored by Git and will not be committed in future commits.