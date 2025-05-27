# 导航配置系统

这个导航配置系统提供了一个可复用和可扩展的方式来管理网站的导航菜单。

## 文件结构

- `navigation.ts` - 导航配置文件，包含所有导航项的数据
- `../components/navigation-item.tsx` - 可复用的导航项组件
- `../components/site-header.tsx` - 使用导航配置的头部组件

## 如何添加新的导航项

在 `navigation.ts` 文件中的 `navigationItems` 数组中添加新项：

```typescript
{
  label: "新页面",
  href: "/new-page",
  // 可选属性：
  // isExternal: true,     // 外部链接
  // target: "_blank",     // 链接目标
  // rel: "noreferrer",    // 链接关系
  // isEmail: true,        // 邮件链接
}
```

## 导航项类型

### 内部链接
```typescript
{
  label: "关于我们",
  href: "/about",
}
```

### 外部链接
```typescript
{
  label: "博客",
  href: "https://example.com/blog",
  isExternal: true,
  target: "_blank",
  rel: "noreferrer",
}
```

### 邮件链接
```typescript
{
  label: "联系我们",
  href: "mailto:contact@example.com",
  isEmail: true,
}
```

## 在其他组件中使用

你可以在任何组件中导入和使用导航配置：

```typescript
import { navigationItems, NavigationItem } from "../config/navigation";
import { NavigationItemComponent } from "./navigation-item";

// 渲染所有导航项
{navigationItems.map((item) => (
  <NavigationItemComponent
    key={item.label}
    item={item}
    className="custom-class"
    isMobile={false}
  />
))}

// 或者过滤特定的导航项
{navigationItems
  .filter(item => !item.isExternal)
  .map((item) => (
    <NavigationItemComponent key={item.label} item={item} />
  ))}
```

## 自定义样式

`NavigationItemComponent` 支持以下属性：

- `className` - 自定义 CSS 类
- `activeClassName` - 激活状态的 CSS 类
- `isMobile` - 是否为移动端样式

## 扩展功能

如果需要添加更多功能，可以扩展 `NavigationItem` 接口：

```typescript
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  isEmail?: boolean;
  // 新增属性
  icon?: string;
  badge?: string;
  requiresAuth?: boolean;
}
```

然后在 `NavigationItemComponent` 中处理这些新属性。 