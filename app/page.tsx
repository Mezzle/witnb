import React from 'react';
import '../styles/global.css';
import data from './data.json';

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

const isBlackedOut = (
  level: number,
  location: string,
  day: string,
  slot: number,
) => {
  const slotData = data.ood[day];
  const levelData = slotData.slice(0, level).map((x: string) => x[slot]);

  return levelData.includes(location);
};

const page: React.FC = () => {
  const level = 10;
  const location = 'A';

  return (
    <div className="container m-4">
      <h1 className="text-3xl font-bold m-2 mb-8">When is the next blackout? (Area {location}, Level {level})</h1>
      <div className="grid grid-rows-blackout grid-cols-blackout gap-1 place-items-center min-w-fit max-w-screen-xl">
        <div></div>
        {slots.map((slot) => (
          <div key={slot}>
            {slot}
          </div>
        ))}
        {days.map((day) => {
          return (
            <React.Fragment key={day}>
              <div className="capitalize">{day}</div>
              {slots.map((slot, index) => {
                const blacked = isBlackedOut(level, location, day, index);
                return (
                  <div
                    key={slot}
                    className={(
                      blacked ? 'bg-error' : 'bg-base-200'
                    ) + ' h-12 w-12 rounded-full shadow-inner'}
                  ></div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default page;
