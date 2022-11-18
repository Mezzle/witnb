import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas, levels } from '../consts';

type Props = { params: { area: string } };
const Page: React.FC<Props> = ({ params: { area } }) => {
  if (!areas.includes(area.toUpperCase())) {
    notFound();
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Select Level
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
  );
};

export default Page;

export async function generateStaticParams() {
  const params = [];

  for (const area of areas) {
    params.push({ area });
  }

  return params;
}
