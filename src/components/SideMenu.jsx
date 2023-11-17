import { Link } from 'react-router-dom';
import { CATEGORIES } from '../const/menuCategories';

const SideMenu = () => {
  return (
    <aside className='min-h-screen flex bg-slate-400 w-[250px]'>
      <nav>
        <ul>
          {CATEGORIES.map((cat, i) => (
            <li key={i}>
              <Link
                to={`/category/${cat.split(' ').join('-').toLocaleLowerCase()}`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
