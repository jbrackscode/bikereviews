import { notFound } from 'next/navigation';
import { personas, getPersona } from '../../personas';
import { RackCard } from '../../components/RackCard';
import { Sidebar } from '../../components/Sidebar';
import { racks, tableRows, buyersGuide } from '../../data';

export function generateStaticParams() {
  return personas.map((p) => ({ persona: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }) {
  const { persona: slug } = await params;
  const persona = getPersona(slug);
  if (!persona) return {};
  return {
    title: `${persona.what} for ${persona.who} in Australia – JB Racks`,
    description: persona.lp001.subheadline,
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-10">
      <h2
        className="font-bold whitespace-nowrap"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: 'clamp(22px, 3vw, 28px)',
          color: 'var(--ink)',
        }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px min-w-5" style={{ background: 'var(--rule)' }} />
    </div>
  );
}

export default async function Lp001PersonaPage({ params }: { params: Promise<{ persona: string }> }) {
  const { persona: slug } = await params;
  const persona = getPersona(slug);
  if (!persona) notFound();

  const { lp001: copy, utmCampaign } = persona;
  const shopUrl = `https://jbracks.com.au?utm_source=bikereviews&utm_medium=lp&utm_campaign=${utmCampaign}&utm_content=footer`;

  return (
    <>
      <div
        className="text-center py-2.5 px-5 text-[13px] font-semibold tracking-widest uppercase text-white"
        style={{ background: 'var(--ink)', fontFamily: "'Libre Franklin', sans-serif" }}
      >
        {copy.bannerText}
      </div>

      <header className="border-b py-4 text-center" style={{ background: 'var(--white)', borderColor: 'var(--rule)' }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-oe-black.svg"
            alt="Bikers Review"
            className="h-12 w-auto mx-auto"
          />
        </div>
      </header>

      <section className="py-16 px-6" style={{ background: 'var(--white)', borderBottom: '3px solid var(--brand)' }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase mb-5"
            style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'var(--brand)' }}
          >
            <span className="block w-6 h-0.5" style={{ background: 'var(--brand)' }} />
            {copy.heroLabel}
          </div>
          <h1
            className="font-black leading-tight mb-5"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: 'clamp(32px, 5vw, 54px)',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
            }}
          >
            {copy.h1Line1}
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>{copy.h1Emphasis}</em>{' '}
            {copy.h1Line2}
          </h1>
          <p
            className="text-lg leading-relaxed font-light italic mb-7 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', serif", color: 'var(--ink-mid)' }}
          >
            {copy.subheadline}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jb-racks-family-image.jpg"
            alt="Family loading bikes onto a vertical bike rack"
            className="w-full rounded-xl object-cover mb-7"
            style={{ maxHeight: '420px' }}
          />
          <div
            className="flex items-center gap-5 flex-wrap text-[13px] pt-5 border-t"
            style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'var(--ink-muted)', borderColor: 'var(--rule)' }}
          >
            <span className="font-semibold" style={{ color: 'var(--ink)' }}>JB Racks Editorial</span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--rule)' }} />
            <span>Review · 2026</span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--rule)' }} />
            <span>6 racks compared</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-start">
        <main>
          <div className="space-y-4 mb-10">
            <p className="text-xl leading-relaxed drop-cap" style={{ fontFamily: "'Source Serif 4', serif", color: 'var(--ink)' }}>
              Transporting multiple bikes can quickly become complicated, especially for families heading out for weekend rides or holidays. Traditional platform racks often struggle once you move beyond two or three bikes — which is exactly why vertical bike racks have become the go-to solution for serious riding families across Australia.
            </p>
            <p className="leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif", color: 'var(--ink-mid)' }}>
              Vertical racks allow several bikes to be carried securely using the vehicle&apos;s hitch, while keeping the footprint compact and the loading process relatively simple. This makes them particularly useful for families, mountain bikers, and groups transporting four or more bikes at a time.
            </p>
          </div>

          <blockquote className="my-8 py-4 px-6 rounded-r-lg" style={{ borderLeft: '4px solid var(--brand)', background: 'var(--brand-light)' }}>
            <p className="text-xl italic leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'var(--ink)' }}>
              &ldquo;Traditional platform racks struggle once you move beyond three bikes. Vertical racks solve this — without the bulk.&rdquo;
            </p>
          </blockquote>

          <SectionHeading>At a Glance: All Six Racks</SectionHeading>
          <div className="rounded-xl overflow-hidden mb-10" style={{ border: '1px solid var(--rule)' }}>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: 'var(--ink)' }}>
                  {[
                    { h: 'Rack', mobile: true },
                    { h: 'RRP (AUD)', mobile: true },
                    { h: 'Weight', mobile: false },
                    { h: 'Capacity', mobile: true },
                    { h: 'Warranty', mobile: false },
                    { h: 'Mount', mobile: false },
                  ].map(({ h, mobile }) => (
                    <th
                      key={h}
                      className={`px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider${mobile ? '' : ' hidden sm:table-cell'}`}
                      style={{ fontFamily: "'Libre Franklin', sans-serif", color: h === 'Rack' ? 'white' : 'rgba(255,255,255,0.6)' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.name} className="border-b" style={{ borderColor: 'var(--rule)', background: row.featured ? 'var(--brand-light)' : 'var(--white)' }}>
                    {[
                      { val: row.name, mobile: true },
                      { val: row.price, mobile: true },
                      { val: row.weight, mobile: false },
                      { val: row.capacity, mobile: true },
                      { val: row.warranty, mobile: false },
                      { val: row.mount, mobile: false },
                    ].map(({ val, mobile }, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3${mobile ? '' : ' hidden sm:table-cell'}`}
                        style={{
                          fontFamily: "'Libre Franklin', sans-serif",
                          color: i === 0 ? (row.featured ? 'var(--brand-dark)' : 'var(--ink)') : 'var(--ink-mid)',
                          fontWeight: i === 0 ? 600 : 400,
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>

          <SectionHeading>The Racks, Reviewed</SectionHeading>
          <div className="space-y-6">
            {racks.map((rack) => (
              <RackCard key={rack.name} rack={rack} />
            ))}
          </div>

          <div className="rounded-xl p-7 mt-10" style={{ background: 'var(--ink)' }}>
            <h2 className="font-bold text-white mb-5" style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '22px' }}>
              What to Look for When Buying a Vertical Bike Rack
            </h2>
            {buyersGuide.map((item, i) => (
              <div key={item.num} className="flex gap-3.5 py-3.5" style={{ borderBottom: i < buyersGuide.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold text-white flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--brand)', fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {item.num}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'rgba(255,255,255,0.6)' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <div className="sticky top-6 hidden lg:block">
          <Sidebar />
        </div>
      </div>

      <footer className="py-16 px-6 text-center" style={{ background: 'var(--ink)' }}>
        <div className="max-w-lg mx-auto">
          <h2 className="font-black text-white leading-tight mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)' }}>
            The Rack Built for Australian {persona.who}
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'rgba(255,255,255,0.65)' }}>
            Sponsored by JB Racks
          </p>
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold px-8 py-3.5 rounded-lg mb-4"
            style={{ fontFamily: "'Libre Franklin', sans-serif", background: 'var(--brand)', fontSize: '15px' }}
          >
            Shop JB Racks Now
          </a>
          <div className="flex justify-center gap-7 mt-7 flex-wrap">
            {['Designed in Australia', 'Free Shipping', 'Secure Checkout'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[12px] uppercase tracking-wider" style={{ fontFamily: "'Libre Franklin', sans-serif", color: 'rgba(255,255,255,0.45)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand)' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
