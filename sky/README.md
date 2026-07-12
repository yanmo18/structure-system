# delamain 建筑工程可视化管理平台

基于 Vue 3 + TypeScript + Vite 构建的建筑工程数据可视化大屏解决方案。

## 🛠️ 技术栈

| 技术/工具 | 版本 | 核心用途 |
|----------|------|----------|
| Vue.js | 3.5.17 | 前端核心框架 |
| TypeScript | 5.8.0 | 类型校验，提升代码健壮性 |
| Vite | 6.4.1 | 快速构建与热更新 |
| ECharts/ECharts-GL | 5.4.3/2.0.9 | 2D/3D数据可视化 |
| Ant Design Vue | 4.2.6 | UI组件库 |
| Element Plus | 2.10.3 | 辅助UI组件库 |
| Pinia | 3.0.3 | 状态管理 |
| Vue Router | 4.5.1 | 路由管理 |
| Video.js | 8.23.3 | 视频播放 |
| Lottie-web | 5.13.0 | 动画效果 |

## 📁 项目结构

```
sky/
├── public/              # 静态资源
│   └── profile.jpg
├── src/
│   ├── assets/          # 资源文件
│   │   ├── font-family/ # 自定义字体
│   │   ├── img/         # 背景图片
│   │   └── weather/     # 天气图标
│   ├── components/      # 组件目录
│   │   ├── 3D.vue       # 3D地球组件
│   │   ├── Container.vue # 容器组件
│   │   ├── Content3d.vue # 3D内容组件
│   │   ├── CenterBottom.vue # 中下组件
│   │   ├── LeftTop.vue  # 左上组件
│   │   ├── LeftCenter.vue # 左中组件
│   │   ├── LeftBottom.vue # 左下组件
│   │   ├── RightTop.vue # 右上组件
│   │   ├── Rightbottom.vue # 右下组件
│   │   ├── Video.vue    # 视频组件
│   │   └── json/        # 数据文件
│   ├── router/          # 路由配置
│   ├── views/           # 页面视图
│   │   ├── HomeViewPage.vue # 登录页面
│   │   └── MiddlePageView.vue # 大屏主页
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── style.css        # 全局样式
├── index.html           # HTML模板
├── vite.config.ts       # Vite配置
├── tsconfig.json        # TypeScript配置
└── package.json         # 项目配置
```

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18.x
- npm
- 现代浏览器（Chrome 100+/Edge 100+/Firefox 95+）

### 安装与运行

```bash
# 进入项目目录
cd sky

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产包
npm run build

# 预览生产构建
npm run preview
```

### 开发服务器配置

- **端口**：9091
- **基础路径**：/bigscreen
- **访问地址**：http://localhost:9091/bigscreen

## 📖 功能说明

### 1. 登录页面
- 用户名、密码、验证码登录验证
- 动态生成验证码，支持点击刷新
- 赛博朋克风格渐变动画效果

**测试账号**：
- 用户名：lgt
- 密码：123456
- 验证码：点击获取（支持大小写不敏感）

### 2. 数据可视化大屏
大屏页面采用网格布局（2:5:2），包含以下区域：

| 位置 | 组件 | 功能描述 |
|------|------|----------|
| 顶部 | Header | 显示日期、时间、平台名称 |
| 左上 | LeftTop | 项目概览数据 |
| 左中 | LeftCenter | 环境监控数据 |
| 左下 | LeftBottom | 人员出勤统计 |
| 中间 | Content3d | 3D地球可视化 |
| 中下 | CenterBottom | 项目进度图表 |
| 右上 | RightTop | 质量指标分析 |
| 右下 | Rightbottom | 实时视频监控 |

### 3. 核心特性
- **3D 地球可视化**：基于 ECharts-GL 实现全球项目分布展示，支持旋转、缩放、点位高亮
- **实时环境监控**：温度、风速、噪音、湿度等环境指标实时展示
- **数据图表联动**：进度、成本、质量等多维度统计分析
- **视频监控集成**：支持实时视频流播放

## 📷 项目展示

### 登录页面
![登录页面](public/05%20(4).png)

### 系统大屏
![系统大屏](public/05%20(1).png)

### 3D 地球展示
![3D地球展示](public/05%20(2).png)

### 圆环图表
![圆环图表](public/05%20(3).png)

## ⚙️ 配置说明

### Vite 代理配置

```typescript
// vite.config.ts
server: {
  proxy: {
    '/smplatformApi': {
      target: 'http://10.20.10.87:7001',
      changeOrigin: true
    }
  }
}
```

### 路由配置

| 路径 | 名称 | 组件 | 说明 |
|------|------|------|------|
| / | home | HomeViewPage | 登录页面 |
| /middle | middle | MiddlePageView | 大屏主页（路由懒加载） |

## 📝 脚本命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本（含类型检查） |
| `npm run preview` | 预览生产构建 |
| `npm run type-check` | 运行 TypeScript 类型检查 |
| `npm run lint` | 运行 ESLint 代码检查 |
| `npm run format` | 使用 Prettier 格式化代码 |

## 📄 许可证

MIT License
