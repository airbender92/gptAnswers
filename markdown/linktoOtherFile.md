To refer to another Markdown file within your content, you can use a relative link. The syntax for creating a relative link to another Markdown file is as follows: 

```markdown
[Link Text](relative/path/to/file.md)
```

Replace `Link Text` with the text that you want to display as the hyperlink, and `relative/path/to/file.md` with the path to the `.md` file you want to link to.

For example, if you have a file called `README.md` in the same directory as another file called `example.md`, and you want to create a hyperlink to `example.md` from within `README.md`, you could use the following syntax:

```markdown
[Click here to see an example](./example.md)
```

This will create a hyperlink with the text "Click here to see an example", and when clicked, it will take the user to the `example.md` file.

Note that the `.` at the beginning of the path indicates the parent directory, and the `/` separates directories in the path. You can also use `..` to represent the parent directory if needed.