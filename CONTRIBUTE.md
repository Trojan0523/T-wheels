# 代码提交规范

## 1 commit 描述规范

| 本次修改             | Commit Msg           |
| -------------------- | -------------------- |
| 新功能、支持某个需求 | feat:某个需求的简介  |
| 修复某个线上 BUG     | fix:解决了什么BUG    |
| 修改文档类的         | doc:大致更新的内容   |
| 重构某一模块         | refactor:重构的描述  |
| 优化某一模块         | perf:优化的描述      |
| 代码风格修改         | style:代码风格相关无影响运行结果 |
| 测试相关            | test: 测试模块描述 |
| 脚手架或依赖升级     | chore:依赖更新/脚手架配置修改信息 |
| 持续集成            | ci:持续集成信息 |
| 类型定义文件修改     | types:修改类型文件描述 |
| 开发中模块提交       | wip: 模块xxx开发中 |

## 2 merge request 流程规范

1. 创建自己分支 git checkout -b description/xx_xx (xx为具体时间)
2. 提交分支 git commit -am 'commit type: commit message'
3. 推送分支 git push origin branch_name
4. 提交 pull request