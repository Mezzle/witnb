import Link from 'next/link';

const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Page = ({params: {location}}: {params: {location: string}}) =>
  <ul>
    {levels.map((level) =>
      (
        <li><Link key={level} href={`/${location}/${level}`}>Level {level}</Link></li>
      ))
    }
  </ul>;

export default Page;

export async function generateStaticParams() {

  const params = [];
  const areas = 'ABCDEGHJKLMNPQRSTU'.split('');

    for (const area of areas) {
      params.push({location: area});
    }

  return params
}
