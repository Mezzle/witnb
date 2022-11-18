import Link from 'next/link';
import { levels } from '../../consts';

const Layout = ({
  children,
  params: { level, area },
}: {
  children: React.ReactNode;
  params: { level: number; area: string };
}) => (
  <>
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Level {level}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {levels.map((level) => (
          <li>
            <Link href={`/${area}/${level}`}>Level {level}</Link>
          </li>
        ))}
      </ul>
    </div>
    {children}
  </>
);

export default Layout;
