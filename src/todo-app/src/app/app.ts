import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo App');
  todos = signal<Todo[]>([]);
  newTodoTitle = signal('');
  filter = signal<'all' | 'active' | 'completed'>('all');
  private nextId = 1;

  addTodo(): void {
    const title = this.newTodoTitle().trim();
    if (title) {
      const newTodo: Todo = {
        id: this.nextId++,
        title: title,
        completed: false,
        createdAt: new Date()
      };
      this.todos.update(todos => [...todos, newTodo]);
      this.newTodoTitle.set('');
    }
  }

  toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  editTodo(id: number, newTitle: string): void {
    const title = newTitle.trim();
    if (title) {
      this.todos.update(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, title: title } : todo
        )
      );
    }
  }

  get filteredTodos(): Todo[] {
    const currentFilter = this.filter();
    const allTodos = this.todos();
    
    if (currentFilter === 'active') {
      return allTodos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
      return allTodos.filter(todo => todo.completed);
    }
    return allTodos;
  }

  get activeTodoCount(): number {
    return this.todos().filter(todo => !todo.completed).length;
  }

  clearCompleted(): void {
    this.todos.update(todos => todos.filter(todo => !todo.completed));
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.filter.set(filter);
  }
}
