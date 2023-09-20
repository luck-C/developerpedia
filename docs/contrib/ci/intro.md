---
sidebar_position: 1
---

# 介绍

为了加速迭代，钉钉各个 SDK 陆续支持了基于 GitHub Actions 的持续集成。在代码变更之后，可以通过触发自动化构建来实现版本发布。例如 Node.js 的 SDK 代码更新后，可以通过发布 Release 触发自动构建，并推送至 npmjs.com 中。

## 发布要求

* 版本号遵循 https://semver.org/
  * 主版本号：当你做了不兼容的 API 修改时候更新。原则上不升级，需要组织专项评审会议，通过评审后才允许升级主版本号；
  * 次版本号：当你做了向下兼容的功能性新增时候更新；
  * 修订号：当你做了向下兼容的问题修正时候更新；
  * 特殊版本：v1.0.0 之前的版本，也即 v0.y.z 版本表示测试版本，会出现不兼容的变更。推荐采用等号（==）依赖指定的测试版本，避免使用大于等于（>=）。
* 每次 SDK 版本发布务必有对应的 GitHub Release，以及 Release Note