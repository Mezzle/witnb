import { notFound } from 'next/navigation';
import React from 'react';
import { areas, levels } from '../../consts';
import data from './../../data.json';

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const slots = [
  '0030 - 0330',
  '0330 - 0630',
  '0630 - 0930',
  '0930 - 1230',
  '1230 - 1530',
  '1530 - 1830',
  '1830 - 2130',
  '2130 - 0030',
];

interface Data {
  ood: Record<string, string[]>;
}

const isBlackedOut = (
  level: number,
  area: string,
  day: string,
  slot: number
) => {
  const slotData = (data as Data).ood[day];
  const levelData = slotData.slice(0, level).map((x: string) => x[slot]);

  return levelData.includes(area);
};

const page: React.FC<{ params: { level: string; area: string } }> = ({
  params: { level, area },
}) => {
  if (
    !areas.includes(area.toUpperCase()) ||
    !levels.includes(parseInt(level))
  ) {
    notFound();
  }

  return (
    <div className="grid grid-rows-blackout grid-cols-blackout gap-1 place-items-center min-w-fit max-w-screen-xl">
      <div></div>
      {slots.map((slot) => (
        <div key={slot}>{slot}</div>
      ))}
      {days.map((day) => {
        return (
          <React.Fragment key={day}>
            <div className="capitalize">{day}</div>
            {slots.map((slot, index) => {
              const blacked = isBlackedOut(
                parseInt(level),
                area.toUpperCase(),
                day,
                index
              );
              return (
                <div
                  key={slot}
                  className={
                    (blacked ? 'bg-error' : 'bg-base-200') +
                    ' h-12 w-12 rounded-full shadow-inner'
                  }
                ></div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export async function generateStaticParams() {
  const params = [];

  for (const level of levels) {
    for (const area of areas) {
      params.push({ level: String(level), area });
    }
  }

  return params;
}

export default page;
