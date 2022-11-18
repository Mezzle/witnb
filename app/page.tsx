import Link from 'next/link';

const areas = 'ABCDEGHJKLMNPQRSTU'.split('');

const Page = () => (
  <div className="dropdown">
    <label tabIndex={0} className="btn m-1">
      Select Area
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
);

export default Page;
