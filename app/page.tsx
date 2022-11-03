import React from 'react';
import data from './data.json';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
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

const isBlackedOut = (level: number, location: string, day: string, slot: number) => {
  const slotData = data.ood[day];
  const levelData = slotData.slice(0, level).map((x: string) => x[slot]);

  return levelData.includes(location);
};

const page: React.FC = () => {

  const level = 8;
  const location = 'A';

  return <div style={styles.container}>
    <div></div>
    {slots.map(slot => <div key={slot} style={styles.slot}>{slot}</div>)}
    {days.map(day => {
        return <React.Fragment key={day}>
          <div style={styles.day}>{day}</div>
          {slots.map((slot, index) => {
            const blacked = isBlackedOut(
              level,
              location,
              day,
              index);
            return <div key={slot}
              style={{
                ...styles.slot, ...(
                  blacked ? styles.blacked : styles.notblacked
                ),
              }}
            ></div>;
          })}
        </React.Fragment>;
      },
    )
    }
  </div>;
};
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr',
    gap: '3px',
    height: '40vh',
    width: '50vw',
    placeItems: 'center',

  },
  day: {
    textTransform: 'capitalize'
  },
  slot: {},
  blacked: {
    backgroundColor: 'pink',
    height: '100%',
    width: '100%',
  },
  notblacked: {
    backgroundColor: 'lightgreen',
    height: '100%',
    width: '100%',
  },

};

export default page;
