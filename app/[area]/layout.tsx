type Props = {
  children: React.ReactNode;
  params: { area: string };
};
import Link from 'next/link';
import { areas } from '../consts';

const Layout: React.FC<Props> = ({ children, params: { area } }) => (
  <>
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Area {area}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {areas.map((mappedArea) => (
          <li>
            <Link href={`/${mappedArea}`}>Area {mappedArea}</Link>
          </li>
        ))}
      </ul>
    </div>
    {children}
  </>
);

export default Layout;
