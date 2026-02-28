# Wiki 网站

## 项目介绍
本仓库是基于 [技术栈，如 Vue/React/Next.js] 开发的轻量级 Wiki 知识库系统，用于团队/个人文档管理、知识沉淀与共享，支持文档编辑、版本管理、分类检索、权限控制等核心功能。

## 功能特性
文档分类/标签管理，支持多级目录结构
全文检索，快速定位目标文档
响应式布局，适配PC/移动端访问
轻量化部署，支持 Docker/本地部署

## 技术栈
| 分类       | 技术/框架                     |
|------------|------------------------------|
| 前端框架   | Vue 3 |
| 构建工具   | Vite  |
| 样式方案   | Tailwind CSS|

目前网站还是纯静态页面，但是支持关键字搜索，用了跨时代的文本文件存储数据（反向）

## 快速开始

### 环境要求
- Node.js ≥ 16.x（前端）
- MySQL ≥ 8.0（若用关系型数据库）
- Docker（可选，容器化部署）

### 本地开发
1. 克隆仓库
   ```bash
   git clone git@gitee.com:superhuckchef/SPDwiki.git
   cd 仓库目录
   
### 安装依赖
 前端依赖
npm install
### 启动开发服务
 前端
npm run dev

贡献指南
Fork 本仓库
创建功能分支：git checkout -b feature/xxx
提交代码：git commit -m "feat: 新增xxx功能"
推送分支：git push origin feature/xxx
发起 Pull Request
### 维护者
姓名superhackchef
联系方式：superhackchef@gmail.com
许可证
本项目基于 MIT 协议开源，详见 LICENSE 文件。
