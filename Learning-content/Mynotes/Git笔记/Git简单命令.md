# 创建和添加

1. `git init`**将文件夹变成一个仓库**
2. `git status` **(查看文件夹状态（红色在编辑区）（绿色在暂存区）（）)**
2. `git add .` **将所有文件放到暂存区**
2. `git commit -m "备注"`**将文件放到分支并标明备注**
2. `git remote add origin https://github.com/2073252416/wuyun.git`**输入账号密码**
2. `git push -u origin master`**提交**
2. `git pull origin master`**把github上的文件重新拉下来**
2. `git push -f origin master`**覆盖git所有文档**

---

# 删除操作

1. `git clone xxxxxx` **拉取远程的Repo到本地（如果已经在本地，可以略过）**
1. `git rm 我的文件` **在本地仓库删除文件**
1. `git rm -r 我的文件夹/`**在本地仓库删除文件夹 (此处-r表示递归所有子目录，如果你要删除的，是空的文件夹，此处可以不用带上-r)**
1. `git rm -r --cached image`**删除磁盘上的image文件**

---