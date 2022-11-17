import Link from 'next/link';

const areas = 'ABCDEGHJKLMNPQRSTU'.split('');

const Page = () => {
  return <ul>
    {areas.map((area) =>
      (
        <li><Link key={area} href={`/${area}`}>Area {area.toUpperCase()}</Link></li>
      ))
    }
    </ul>;
};

export default Page;
