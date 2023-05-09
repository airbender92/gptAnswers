In a React TypeScript project that uses MobX, it's generally a good practice to organize your files into different directories based on their functionality. One common approach is to use the "feature-first" or "domain-driven design" file structure.

In this file structure, each feature or domain of the application has its own folder with related files inside it. For example, if we have a "Todo List" feature in our application, we could create a folder called `todo` with all files related to that feature inside it:

```
src/
|-- todo/
|   |-- TodoList.tsx
|   |-- TodoItem.tsx
|   |-- types.ts
|   `-- ...
|-- user/
|   |-- UserProfile.tsx
|   |-- UserAvatar.tsx
|   |-- types.ts
|   `-- ...
`-- ...
```

In this example, we have created a `types.ts` file inside each feature folder (`todo` and `user`) to hold any interface definitions or type aliases that are specific to that feature.

By organizing your files this way, you can easily locate related files for a given feature, and avoid naming conflicts between interfaces or types used in different parts of your application.

Of course, it's up to you to decide what works best for your project, but using a consistent file structure can help keep your codebase organized and maintainable.