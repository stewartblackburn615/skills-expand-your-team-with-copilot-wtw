# Angular Todo App Guide

## Overview

A modern, full-featured Todo application built with Angular 21, located in `src/todo-app/`.

## Quick Start

### Prerequisites
- Node.js 20.x or later
- npm 10.x or later

### Installation & Running

1. Navigate to the todo-app directory:
   ```bash
   cd src/todo-app
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

4. Open your browser and visit: `http://localhost:4200/`

### Building for Production

To create a production build:
```bash
cd src/todo-app
npm run build
```

The build artifacts will be stored in the `dist/todo-app/` directory.

## Features

### Core Functionality
- **Add Todos**: Type your task in the input field and press Enter or click the "Add" button
- **Complete Todos**: Click the checkbox next to any todo to mark it as complete
- **Delete Todos**: Hover over a todo and click the × button to remove it
- **Filter Todos**: Use the filter buttons to view:
  - **All**: Shows all todos
  - **Active**: Shows only incomplete todos
  - **Completed**: Shows only completed todos
- **Clear Completed**: Remove all completed todos at once with the "Clear completed" button
- **Active Count**: See how many tasks you still need to complete

### Design Features
- Clean, modern interface with a beautiful gradient background
- Responsive design that works on desktop and mobile devices
- Smooth animations and hover effects
- Intuitive user experience

## Technical Stack

- **Framework**: Angular 21.0.3
- **Language**: TypeScript
- **State Management**: Angular Signals
- **Architecture**: Standalone Components
- **Styling**: Pure CSS (no external UI libraries)
- **Build Tool**: Angular CLI with Vite

## Project Structure

```
src/todo-app/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main app component with logic
│   │   ├── app.html            # App template
│   │   ├── app.css             # App styles
│   │   ├── app.config.ts       # App configuration
│   │   └── todo.interface.ts   # Todo type definition
│   ├── index.html              # HTML entry point
│   ├── main.ts                 # Application bootstrap
│   └── styles.css              # Global styles
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Detailed documentation
```

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `ng generate component <name>` - Generate new component

### Code Features

- **Type Safety**: Full TypeScript typing with strict mode
- **Modern Angular**: Uses latest features like signals and standalone components
- **No External Dependencies**: Pure Angular without heavy UI libraries
- **Clean Code**: Well-organized, maintainable code structure

## Browser Support

The application works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For more information about Angular CLI and Angular framework:
- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
