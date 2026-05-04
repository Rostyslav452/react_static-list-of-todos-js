import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed === true && 'TodoInfo--completed'}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user !== null && <UserInfo key={todo.userId} user={todo.user} />}
  </article>
);
