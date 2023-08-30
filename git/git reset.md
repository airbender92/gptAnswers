`git reset` 是一个用于移动 HEAD 指针和分支引用的命令，可以在版本控制中回退到之前的状态。它有三种主要模式：`--soft`、`--mixed`（默认）、`--hard`。以下是详细的解释和示例演示。

**1. `git reset --soft`：**
在此模式下，HEAD 指针和分支引用将移动到指定的提交，但工作目录和暂存区不会受到影响。

**用法：**
```sh
git reset --soft commit_hash
```

**示例：**
```sh
# 创建新提交
echo "New content" > file.txt
git add file.txt
git commit -m "New commit"

# 使用 git reset --soft 回退到前一个提交，保留更改
git reset --soft HEAD~1
```

**2. `git reset --mixed`（默认模式）：**
在此模式下，HEAD 指针和分支引用将移动到指定的提交，并且暂存区将被重置，但工作目录中的文件将保留，但未添加到暂存区。

**用法：**
```sh
git reset --mixed commit_hash
```

**示例：**
```sh
# 创建新提交
echo "New content" > file.txt
git add file.txt
git commit -m "New commit"

# 使用 git reset --mixed 回退到前一个提交，重置暂存区，保留更改
git reset --mixed HEAD~1
```

**3. `git reset --hard`：**
在此模式下，HEAD 指针和分支引用将移动到指定的提交，暂存区将被重置，并且工作目录中的文件将被彻底删除，恢复到指定提交的状态。

**用法：**
```sh
git reset --hard commit_hash
```

**示例：**
```sh
# 创建新提交
echo "New content" > file.txt
git add file.txt
git commit -m "New commit"

# 使用 git reset --hard 回退到前一个提交，删除更改
git reset --hard HEAD~1
```

**注意事项：**
- 在使用 `git reset` 时，要确保你理解其影响，尤其是 `--hard` 模式会永久删除工作目录中未提交的更改。
- 使用 `git reflog` 命令可以查看引用日志，以便恢复到误操作前的状态。

总之，`git reset` 是一个强大的命令，可以用于在版本控制中回退到之前的状态。根据你的需求，选择合适的模式来移动分支引用和 HEAD 指针。