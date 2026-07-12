# 建筑工程可视化管理平台-实训

#### 介绍
Delamain建筑工程管理可视化平台是一款面向建筑工程领域的轻量化前端解决方案，聚焦工程数据可视化、进度监控与决策支持，通过2D/3D可视化图表直观呈现工程项目全生命周期数据。

平台围绕建筑工程管理核心场景，实现：
-工程项目多维度数据可视化（进度、成本、质量、环境）
-D地球可视化展示全球项目分布与详情
-实时环境监控与安全隐患预警
-人员出勤、质量指标等数据的统计分析与图表联动
[https://gitee.com/enterprises](https://gitee.com/enterprises)}

## 🛠️ 技术栈
| 技术/工具 | 版本 | 核心用途 |
|----------|------|----------|
| Vue.js | 3.3.4 | 前端核心框架 |
| TypeScript | 5.1.6 | 类型校验，提升代码健壮性 |
| Vite | 4.4.9 | 快速构建与热更新 |
| ECharts/ECharts-GL | 5.4.3/2.0.9 | 2D/3D数据可视化 |
| Ant Design Vue | 4.0.0 | UI组件库 |
| Pinia | 2.1.6 | 状态管理 |
| Vue Router | 4.2.4 | 路由管理 |

#### 软件架构
软件架构说明
前端工程层(Vite构建+环境配置)
↓
核心框架层(Vue 3 + TypeScript)
↓
基础能力层(Vue Router路由+ Pinia状态管理)
↓
组件层(业务组件/通用组件+ Ant Design Vue UI组件)
↓
可视化层(ECharts 2D图表+ ECharts-GL 3D可视化)
↓
交互层(CSS3动画+响应式布局+事件处理)
↓
数据层(模拟数据+本地存储+接口适配层)


## 🚀 使用说明
### 环境要求
- Node.js ≥ 18.x
- npm
- 现代浏览器（Chrome 100+/Edge 100+/Firefox 95+）

### 安装与运行
```bash
# 克隆仓库
git clone https://github.com/your-username/delamain-engineering-platform.git

# 进入项目目录
cd delamain-engineering-platform

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产包
npm run build

###测试账号
用户名：lgt
密码：123456
验证码：1234（动态生成，支持点击刷新）
###样例

###✨ 核心功能
1. 3D 可视化大屏
基于 ECharts-GL 实现全球项目分布 3D 地球展示
支持地球旋转、缩放、点位高亮与详情弹窗
非可视区域点位懒加载，优化渲染性能

2. 项目管理
进度 / 成本 / 工期多维度统计分析
参与单位信息筛选与图表联动

3. 质量管理
人员出勤双轴折线图（周 / 月筛选）
安全隐患漏斗图（发现→整改→验收）
质量指标雷达图（混凝土强度、施工精度等）

4. 环境监控
温度 / 风速 / 噪音等实时数据仪表盘
7 天环境指标趋势分析

## 📷 演示图

### 登录页面
![登录页面](https://gitee.com/yanqinglanyanmo/exe-training/blob/master/sky/public/login.png?raw=true)

### 系统大屏
![系统大屏](https://gitee.com/yanqinglanyanmo/exe-training/blob/master/sky/public/dashboard.png?raw=true)

### 3D 地球展示
![3D地球展示](https://gitee.com/yanqinglanyanmo/exe-training/blob/master/sky/public/earth3d.png?raw=true)

### 圆环图表
![圆环图表](https://gitee.com/yanqinglanyanmo/exe-training/blob/master/sky/public/chart.png?raw=true)
