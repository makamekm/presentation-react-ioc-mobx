import React, { memo } from 'react';
import { useInstance } from 'react-ioc';
import classNames from 'classnames';
import { TodoService, ITodo } from '../services/todo.service';
import { observer } from 'mobx-react';

const Component = ({todo}: {todo: ITodo}) => {
  const todoService = useInstance(TodoService);
  const onToggleTodo = React.useCallback(() => {
    todoService.toggle(todo.name);
  }, []);
  const onRemoveTodo = React.useCallback(() => {
    todoService.remove(todo.name);
  }, []);

  return (
    <>
      <div className={classNames("todo-item", {completed: todo.done})}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleTodo} checked={!!todo.done}/>
          <label>{todo.name}</label>
          <button className="destroy" onClick={onRemoveTodo}></button>
        </div>
      </div>
      <style jsx>{`
        .todo-item {
          position: relative;
          font-size: 24px;
          border-bottom: 1px solid #ededed;
        }

        .todo-item:last-child {
          border-bottom: none;
        }

        .todo-item.editing {
          border-bottom: none;
          padding: 0;
        }

        .todo-item.editing .edit {
          display: block;
          width: calc(100% - 43px);
          padding: 12px 16px;
          margin: 0 0 0 43px;
        }

        .todo-item.editing .view {
          display: none;
        }

        .todo-item .toggle {
          text-align: center;
          width: 40px;
          /* auto, since non-WebKit browsers doesn't support input styling */
          height: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          border: none; /* Mobile Safari */
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .todo-item .toggle {
          opacity: 0;
        }

        .todo-item .toggle + label {
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
          background-repeat: no-repeat;
          background-position: center left;
        }

        .todo-item .toggle:checked + label {
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
        }

        .todo-item label {
          word-break: break-all;
          padding: 15px 15px 15px 60px;
          display: block;
          line-height: 1.2;
          transition: color 0.4s;
          font-weight: 400;
          color: #4d4d4d;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .todo-item.completed label {
          color: #cdcdcd;
          text-decoration: line-through;
        }

        .todo-item .destroy {
          display: none;
          position: absolute;
          top: 0;
          right: 10px;
          bottom: 0;
          width: 40px;
          height: 40px;
          margin: auto 0;
          font-size: 30px;
          color: #cc9a9a;
          margin-bottom: 11px;
          transition: color 0.2s ease-out;
          cursor: pointer;
        }

        .todo-item .destroy:hover {
          color: #af5b5e;
        }

        .todo-item .destroy:after {
          content: '×';
        }

        .todo-item:hover .destroy {
          display: block;
        }

        .todo-item .edit {
          display: none;
        }

        .todo-item.editing:last-child {
          margin-bottom: -1px;
        }

        button {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          font-size: 100%;
          vertical-align: baseline;
          font-family: inherit;
          font-weight: inherit;
          color: inherit;
          -webkit-appearance: none;
          appearance: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
};

export default memo(observer(Component));
