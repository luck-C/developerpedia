---
sidebar_position: 1
---

# 同意授权体验

同意授权是用户授权应用访问受保护资源的过程。

你的应用可以向用户或管理员发起请求，让他们同意你的应用访问他们的个人/组织数据。应用开发者需要明确自己申请的是什么类型的权限，然后通过平台提供的授权弹窗，引导用户/管理员完成授权流程。
* 用户同意授权：应用引导用户完成委托权限的授权。
* 管理员同意授权：应用引导管理员完成应用权限的授权。如果当前用户不是管理员，应用则将授权流程移交给管理员，让管理员完成授权。


## 授权弹窗的组成

授权弹窗旨在确保用户有足够的信息来决定他们是否信任应用并授予权限给它。了解授权弹窗的组成既可以帮助用户做出明智的授权决定，也可以帮助开发者构建更好的用户体验。
![授权弹窗组成](/img/learn/permission/consent_prompt.png)


|     | 组件    | 说明                                                |
|:----|:------|:--------------------------------------------------|
| 1   | 应用名   | 应用名称由开发人员提供，告诉用户哪个应用在请求访问他们的数据。                   |
| 2   | 服务商名称 | 应用由什么哪个服务商发行的。                                    |
| 3   | 应用图标  | 应用名称由开发人员提供，为用户提供一个应用的视觉提醒。                       |
| 4   | 官方图标  | 应用由钉钉官方认证，则会有此蓝色标志。上线中，敬请期待。                      |
| 5   | 基础权限  | 应用向用户申请的基础类权限。                                    |
| 6   | 权限描述  | 用户会理解权限的文字描述并决定是否授权。应用开发者最好遵循最小权限原则。              |
| 7   | 敏感权限  | 应用向用户申请的敏感类权限。开发者谨慎选择是否需要向用户获取敏感权限。               |
| 8   | 点击反馈  | 如果用户不信任应用，怀疑应用存在超量获取权限等可以行为，可以点击此处上报给平台。上线中，敬请期待。 |
| 9   | 各类协议  | 用户需要同意服务协议、隐私政策、企业协议后，才能完成授权。这和通过应用市场开通应用时授权一样。   |


## 授权弹窗的常见场景

授权弹窗会通过判断用户身份、应用获取的权限类型等条件，调整展示给用户的内容。以下是一些常见的弹窗页面。

### 应用向用户申请用户可授权的委托权限

应用选择以委托访问的方式访问用户资源时，需要向用户获取委托权限授权。

![用户授权弹窗](/img/learn/permission/user_consent_prompt.png)


### 应用向管理员申请管理员可授权的应用权限

应用选择以应用访问的方式访问资源时，需要向管理员获取应用权限授权。应用权限只能由管理员授权。

![管理员授权弹窗](/img/learn/permission/admin_consent_prompt.png)


### 应用向管理员申请应用权限，但当前用户非管理员

应用选择以应用访问的方式访问资源时，需要向管理员获取应用权限授权。应用权限只能由管理员授权。授权弹窗会判断当前用户是否是管理员，如果不是，则会让用户选择通知的管理员，并联系管理员，管理员会收到授权消息卡片。

|                         用户向管理员发送授权申请                         |                     管理员看到的授权消息卡片                     |
|:------------------------------------------------------------:|:----------------------------------------------------:|
| ![向管理员发送授权申请](/img/develop/permission/handover_to_admin.png) | ![授权卡片](/img/develop/permission/permission_card.png) |
