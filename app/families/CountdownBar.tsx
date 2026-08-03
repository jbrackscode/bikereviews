'use client';

import { useEffect, useState } from 'react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

const DEADLINE_KEY = 'jbracks-offer-deadline';
const WINDOW_MS = 3 * 24 * 60 * 60 * 1000;

function getDeadline() {
  const stored = Number(localStorage.getItem(DEADLINE_KEY));
  if (stored && stored > Date.now()) return stored;

  const deadline = Date.now() + WINDOW_MS;
  localStorage.setItem(DEADLINE_KEY, String(deadline));
  return deadline;
}

export function CountdownBar() {
  const [time, setTime] = useState({ d: 0, h: 0 });

  useEffect(() => {
    const end = getDeadline();

    function tick() {
      const diff = Math.max(0, end - Date.now());
      const totalHours = Math.floor(diff / 3600000);
      setTime({
        d: Math.floor(totalHours / 24),
        h: totalHours % 24,
      });
    }

    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="flex items-center justify-between flex-wrap gap-2"
      style={{
        background: 'var(--ink)',
        color: 'white',
        padding: '10px 24px',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        fontFamily: "'Libre Franklin', system-ui, sans-serif",
      }}
    >
      <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        🚴 Sale — Ends Soon
      </span>
      <div className="flex items-center gap-1.5">
        <span
          style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Offer ends in
        </span>
        <div className="flex gap-1">
          {[
            { val: time.d, label: 'days' },
            { val: time.h, label: 'hrs' },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center"
              style={{
                background: 'var(--brand)',
                color: 'white',
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              <span>{pad(val)}</span>
              <span
                style={{
                  fontSize: '8px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '2px',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://jbracks.com.au/collections/vertical-bike-racks?utm_source=bikereviews&utm_medium=banner&utm_campaign=families&utm_content=countdown"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'var(--brand)',
          color: 'white',
          fontSize: '13px',
          fontWeight: 700,
          padding: '9px 18px',
          borderRadius: '5px',
          textDecoration: 'none',
          letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
        }}
      >
        Check Today's Deals →
      </a>
    </div>
  );
}
