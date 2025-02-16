# Contributing to React Wrapper Components

First off, thank you for considering contributing to React Wrapper Components! It's people like you that make this project such a great tool.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Pull Request Process](#pull-request-process)
5. [Coding Standards](#coding-standards)
6. [Commit Guidelines](#commit-guidelines)
7. [Bug Reports](#bug-reports)
8. [Feature Requests](#feature-requests)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainer@email.com].

### Our Pledge

- We welcome contributions from everyone
- We are committed to providing a friendly, safe, and welcoming environment
- We pledge to respect all people who contribute through reporting issues, feature requests, documentation updates, and code changes

## Getting Started

1. **Fork the Repository**

   ```bash
   git clone https://github.com/Soab42/react-wrapper-components.git
   cd react-wrapper-components
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. **Set Up Development Environment**

   - Ensure you have Node.js 14+ installed
   - Install a code editor (we recommend VS Code)
   - Install recommended extensions

`

## Pull Request Process

1. **Before Submitting a PR**

   - Update the README.md with details of changes if applicable
   - Update the documentation if you're adding or modifying features
   - Add tests for new features
   - Ensure all tests pass

2. **PR Guidelines**

   - Use our PR template
   - Link any related issues
   - Include screenshots for UI changes
   - Add comments for complex code changes

3. **Review Process**
   - At least one maintainer must review and approve
   - CI checks must pass
   - Documentation must be updated
   - All discussions must be resolved

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow ESLint and Prettier configurations
- Use TypeScript for new components
- Write meaningful component and function names
- Include JSDoc comments for complex functions

```jsx
// Good
const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

// Bad
const Comp = (p) => {
  return (
    <div>
      <h1>{p.user.name}</h1>
    </div>
  );
};
```

### CSS/Styling

- Use Tailwind CSS utilities
- Follow BEM naming convention for custom classes
- Maintain responsive design principles
- Keep specificity low

## Commit Guidelines

We follow conventional commits specification:

```bash
feat: add new feature
fix: bug fix
docs: documentation updates
style: formatting, missing semicolons, etc
refactor: code refactoring
test: adding tests
chore: maintain
```

Example:

```bash
git commit -m "feat: add pagination to ModernTable component"
```

## Bug Reports

When filing a bug report, please include:

1. **Description**

   - Clear and concise description of the issue
   - Steps to reproduce
   - Expected behavior
   - Actual behavior

2. **Environment**

   - Browser and version
   - Operating system
   - React version
   - Package version

3. **Additional Context**
   - Screenshots if applicable
   - Error messages
   - Console logs

## Feature Requests

Feature requests are welcome! Please provide:

1. **Description**

   - Clear description of the feature
   - Use cases
   - Expected behavior

2. **Additional Context**
   - Screenshots or mockups if applicable
   - Similar features in other projects
   - Potential implementation approaches

## Communication

- GitHub Issues: Bug reports and feature requests
- Pull Requests: Code changes and reviews
- Discussions: General questions and discussions
- Discord: Real-time communication

## Recognition

Contributors will be added to our README.md and package.json files. We value every contribution, no matter how small!

---

Thank you for contributing to React Wrapper Components! ❤️
