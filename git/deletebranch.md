要删除远程分支，您可以使用以下命令：

perl
git push <远程仓库名> --delete <分支名>

请将 <远程仓库名> 替换为您要删除分支的远程仓库的名称，将 <分支名> 替换为您要删除的分支的名称。

例如，如果要删除名为 feature-branch 的远程分支，并且远程仓库的名称为 origin，则命令如下：

perl
git push origin --delete feature-branch

执行此命令后，远程分支将被删除。请确保您具有适当的权限来执行此操作。