import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas, levels } from '../consts';

type Props = { params: { area: string } };
const Page: React.FC<Props> = ({ params: { area } }) => {
  if (!areas.includes(area.toUpperCase())) {
    notFound();
  }

  return (
    <ul>
      {levels.map((level) => (
        <li>
          <Link key={level} href={`/${area}/${level}`}>
            Level {level}
          </Link>
        </li>
      ))}
    </ul>
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
