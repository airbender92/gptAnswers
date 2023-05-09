Here is an example of a `.eslintignore` file configuration for a React, MobX, TypeScript and Less project:

```
# Dependency directories
node_modules/
build/

# Output files
dist/
build/

# Environment variables
.env*

# Ignore compiled .js files.
*.js

# Ignore all .d.ts files (TypeScript declaration files)
*.d.ts

# Ignore Less files as we compile them to CSS.
*.less

# Ignore linting of generated files
src/**/*.generated.ts

# Ignore GraphQL files
src/**/*.graphql
```

This will ignore the `node_modules`, `build`, `dist` folders, environment variables, JavaScript files, TypeScript declaration files, Less files, generated files and GraphQL files during the linting process. You can adjust it based on your specific needs. 

Note that some of these rules can be changed based on your preferences and use case. For example, you might want to keep linting generated files or include `.env` files in your repository.