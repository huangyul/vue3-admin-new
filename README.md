# Vue 3 Admin

## 项目搭建基础

### commit 提交规范

#### 安装 husky 和 commitlint

`yarn add -D husky @commitlint/cli @commitlint/conventional`

#### husky 基本配置

初始脚本：

`yarn set-script prepare "husky install"`

添加钩子：

`npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""`
