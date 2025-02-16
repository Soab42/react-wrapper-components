# React Wrapper Components

![npm version](https://img.shields.io/npm/v/react-wrapper-components)
![downloads](https://img.shields.io/npm/dm/react-wrapper-components)
![license](https://img.shields.io/npm/l/react-wrapper-components)
![GitHub stars](https://img.shields.io/github/stars/yourusername/react-wrapper-components?style=social)

A professional collection of React wrapper components designed for modern web applications. Built with performance, accessibility, and developer experience in mind.

## ✨ Features

- 🚀 **DynamicModalButton** - Flexible modal system with customizable triggers
- 📊 **ModernTable** - Responsive data table with sorting and custom actions
- 📝 **PaginationWrapper** - Smart pagination with dynamic page ranges
- 🎨 **Tailwind Integration** - Beautiful default styling with Tailwind CSS
- 🌙 **Dark Mode Support** - Built-in dark mode compatibility
- ♿ **Accessibility** - ARIA attributes and keyboard navigation
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **Highly Customizable** - Extensive styling and behavior options

## 📦 Installation

```bash
# npm
npm install react-wrapper-components

# yarn
yarn add react-wrapper-components

# pnpm
pnpm add react-wrapper-components
```

## 🔧 Requirements

- React 16.8+
- Tailwind CSS 3.0+
- Node.js 14+

## 💻 Usage

### DynamicModalButton

Create modals with custom triggers and content:

```jsx
import { DynamicModalButton } from "react-wrapper-components";

function App() {
  return (
    <DynamicModalButton
      buttonText="Open Settings"
      className="bg-blue-500 hover:bg-blue-600"
      modalClassName="max-w-2xl"
    >
      <div className="p-6">
        <h2>Settings</h2>
        <p>Modal content goes here...</p>
      </div>
    </DynamicModalButton>
  );
}
```

### ModernTable

Display data with sorting and custom actions:

```jsx
import { ModernTable } from "react-wrapper-components";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function App() {
  return (
    <ModernTable
      columns={columns}
      data={data}
      actions={(row) => <button onClick={() => handleEdit(row)}>Edit</button>}
    />
  );
}
```

### PaginationWrapper

Implement smart pagination for your data:

```jsx
import { PaginationWrapper } from "react-wrapper-components";

function App() {
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  return (
    <PaginationWrapper data={data} itemsPerPage={10}>
      {(paginatedData) => (
        <div className="space-y-4">
          {paginatedData.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </PaginationWrapper>
  );
}
```

## 📚 API Reference

### DynamicModalButton Props

| Prop             | Type        | Default                 | Description             |
| ---------------- | ----------- | ----------------------- | ----------------------- |
| `children`       | `ReactNode` | -                       | Modal content           |
| `buttonText`     | `string`    | `"Add New"`             | Text for trigger button |
| `className`      | `string`    | `"bg-gradient..."`      | Button custom classes   |
| `modalClassName` | `string`    | `"backdrop-blur-xl..."` | Modal custom classes    |

### ModernTable Props

| Prop         | Type                      | Default | Description              |
| ------------ | ------------------------- | ------- | ------------------------ |
| `columns`    | `Array<Column>`           | -       | Table column definitions |
| `data`       | `Array<any>`              | -       | Table data               |
| `actions`    | `(row: any) => ReactNode` | -       | Row actions renderer     |
| `tableClass` | `string`                  | `""`    | Table custom classes     |
| `thClass`    | `string`                  | `""`    | Header cell classes      |
| `tdClass`    | `string`                  | `""`    | Body cell classes        |

### PaginationWrapper Props

| Prop           | Type                              | Default | Description      |
| -------------- | --------------------------------- | ------- | ---------------- |
| `data`         | `Array<any>`                      | -       | Data to paginate |
| `itemsPerPage` | `number`                          | -       | Items per page   |
| `children`     | `(data: Array<any>) => ReactNode` | -       | Content renderer |

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/yourusername/react-wrapper-components.git

# Install dependencies
npm install

# Start development
npm run dev

# Build package
npm run build

# Run tests
npm test
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🔍 Troubleshooting

### Common Issues

1. **Modal not appearing?**

   - Ensure z-index conflicts are resolved
   - Check if portal container exists

2. **Table not responsive?**

   - Verify Tailwind CSS installation
   - Check container width constraints

3. **Pagination not working?**
   - Confirm data array is properly formatted
   - Verify itemsPerPage prop is set

## 🆘 Support

- 📧 Email: <support@example.com>
- 🐛 [Report a bug](https://github.com/yourusername/react-wrapper-components/issues)
- 💡 [Request a feature](https://github.com/yourusername/react-wrapper-components/issues)
- 💬 [Discord community](https://discord.gg/yourdiscord)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern React patterns
- Built with Tailwind CSS

---

<p align="center">Made with ❤️ by Your Name</p>
