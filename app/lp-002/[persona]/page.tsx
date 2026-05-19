import { notFound } from 'next/navigation';
import { personas, getPersona } from '../../personas';
import { CountdownBar } from '../../families/CountdownBar';

export function generateStaticParams() {
  return personas.map((p) => ({ persona: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }) {
  const { persona: slug } = await params;
  const persona = getPersona(slug);
  if (!persona) return {};
  return {
    title: `7 Reasons ${persona.what} Are ${persona.who}'s Secret Weapon – JB Racks`,
    description: persona.lp002.summary,
  };
}

const reasons = [
  {
    num: 1,
    flip: false,
    summary: "No more platform rack chaos — load in seconds",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-black-new-photo-2.webp?v=1771565727&width=900",
    imgAlt: "JB Racks 4 bike vertical rack loaded with bikes",
    title: "Your whole family's bikes loaded in under 60 seconds",
    paragraphs: [
      "With a platform rack, you're lifting bikes up and over, threading them through arms, adjusting frame clamps. With a vertical rack, you simply roll each bike up and clip the front wheel in — one motion, done.",
      "JB Racks holds your bikes by the front wheel in a vertical position, meaning they load faster, take up less width behind your car, and stay completely secure at highway speeds.",
    ],
    stat: { value: "4–6 bikes loaded", label: "In the time it takes a platform rack to load two" },
    pills: ["Front wheel holder", "No frame contact", "Vertical = compact"],
  },
  {
    num: 2,
    flip: true,
    summary: "The Swing Arm — access your boot without unloading a single bike",
    img: "https://jbracks.com.au/cdn/shop/files/swing-arm-jb-racks.webp?v=1764917182&width=900",
    imgAlt: "JB Racks Swing Arm pivoting away from vehicle",
    title: "One pull and the whole rack swings clear of your boot",
    paragraphs: [
      "Every parent knows this moment: you're at the trailhead, bikes are on, and someone left their shoes/helmet/snacks in the boot. With a standard rack — vertical or platform — you're unloading to get in.",
      "The JB Racks Swing Arm fixes this permanently. Pull the release, and the entire loaded rack pivots 90 degrees, giving you full boot access without touching a single bike.",
      "It's the accessory we didn't know we needed until we had it. Now we can't imagine going back.",
    ],
    stat: { value: "JB Swing Arm — $499", label: "Full boot access with all bikes loaded. Fits all JB Racks models." },
    pills: ["90° pivot", "One-pull release", "Boot access in seconds"],
  },
  {
    num: 3,
    flip: false,
    summary: "The Slow-Fold Strut — no more rack smashing your bumper",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-black-new-photo-4.webp?v=1771565727&width=900",
    imgAlt: "JB Racks slow-fold strut detail",
    title: "The rack folds down gently — every single time",
    paragraphs: [
      "If you've ever owned a rack that drops hard when folded, you know the anxiety. The sudden clang, the paint scratch risk, the kids jumping back. JB Racks' Slow-Fold Strut changes this entirely.",
      "Gas-assisted struts slow the fold-down to a controlled, smooth motion. The rack eases down, not crashes down. It's the kind of detail that shows they've actually used their product with a family.",
      "The Slow-Fold Strut is included in all JB Racks bundles — no extra cost when you buy the rack, strut, and shed stand together.",
    ],
    stat: { value: "Included in all bundles", label: "Rack + Slow-Fold Strut + Shed Stand from $1,199 — save $300" },
    pills: ["Gas-assisted", "Controlled fold", "FREE right now"],
  },
  {
    num: 4,
    flip: true,
    summary: "E-bike rated — carry any bike your family owns",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-black-new-photo-5.webp?v=1771562629&width=900",
    imgAlt: "JB Racks loaded with various bike types including e-bikes",
    title: "110kg capacity. Heavy e-bikes? Not a problem.",
    paragraphs: [
      "As families upgrade to e-bikes, most older racks become useless. A typical adult e-bike weighs 22–28kg — put four on a platform rack and you're well over the limit and dealing with a wobbling, stressed hitch.",
      "JB Racks is rated to 110kg total, designed and tested specifically for heavy e-bikes from day one. Mountain bikes, kids' bikes, fat bikes, e-bikes — it handles the full family quiver without drama.",
    ],
    stat: { value: "110kg total capacity", label: "Tested for the heaviest e-bikes on Australian trails" },
    pills: ["E-bike rated", "110kg capacity", "All bike types", "Load & vibration tested"],
  },
  {
    num: 5,
    flip: false,
    summary: "Compact behind the car — no width creep, no carpark anxiety",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-black-new-photo-3.webp?v=1771565727&width=900",
    imgAlt: "JB Racks showing compact width behind vehicle",
    title: "Platform racks get wide. Vertical racks stay narrow.",
    paragraphs: [
      "Platform racks fan bikes out sideways. Load four bikes and you're suddenly a wide load. Squeezing through drive-throughs, reversing into tight spots, negotiating car parks — all become stressful events.",
      "Vertical racks keep bikes stacked in a tight row behind the vehicle. The footprint is narrower, visibility is better, and you can actually reverse like a normal human being again.",
      "For families who do trail runs at busy car parks — this is genuinely life-changing.",
    ],
    stat: null,
    pills: ["Narrow footprint", "Better rear visibility", "Tight car parks — no drama"],
  },
  {
    num: 6,
    flip: true,
    summary: "4-year warranty & direct-from-manufacturer pricing",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-velo-new-photo-1.webp?v=1773012669&width=900",
    imgAlt: "JB Racks quality construction detail",
    title: "Built to last — and backed to prove it",
    paragraphs: [
      "JB Racks sells direct to you, cutting out distributors and retail mark-ups. That's why a rack this well-built costs what it does — you're not paying for shelf space at a bike shop.",
      "The steel construction is load and vibration tested before release. The 4-year warranty isn't fine-print — it's a genuine statement of confidence in what they've built.",
      "15,247+ customers and counting. That's not a new brand hoping for the best. That's a track record.",
    ],
    stat: { value: "15,247+ customers", label: "4-year warranty · Direct-to-you pricing · Free shipping*" },
    pills: ["4-year warranty", "Direct pricing", "Free shipping*", "Secure checkout"],
  },
  {
    num: 7,
    flip: false,
    summary: "Family sizes for every family — 4, 5, or 6 bikes from $899",
    img: "https://jbracks.com.au/cdn/shop/files/4-bike-rack-velo-new-photo-3.webp?v=1773012669&width=900",
    imgAlt: "JB Racks family of bikes loaded on rack at trailhead",
    title: "One rack for the whole crew — kids' bikes included",
    paragraphs: [
      "JB Racks comes in 4, 5, and 6-bike configurations — all starting at $899. With optional 16–20 inch wheel brackets, even the smallest family member's bike fits perfectly.",
      "The rack, strut, and shed stand bundle currently saves $300 off individual pricing — you get the rack, the slow-fold strut, and a shed storage stand to keep the rack when it's not on the car.",
      "It's everything a family needs for bikes — at the trail and at home.",
    ],
    stat: { value: "Bundle from $1,199 (save $300)", label: "Rack + Slow-Fold Strut + Shed Stand — everything included" },
    pills: ["4, 5 or 6 bikes", "Kids' bikes fit", "$300 bundle saving"],
  },
];

const reviews = [
  { quote: "Very surprised at the quality for the price. I was a little unsure about JB Racks but now I'm so happy I went with it. Three kids' bikes load in under a minute.", author: "Roger D." },
  { quote: "Great rack! Just took it out for the first time fully loaded and it handled everything with ease. Our e-bikes sit perfectly — so much better than our old platform rack.", author: "Dale W." },
  { quote: "Very good for the money — our e-bikes are so much easier to transport now. The swing arm is a game-changer, I can grab things from the boot without unloading anything.", author: "Helen M." },
  { quote: "Very happy with the rack, better than I expected. Customer service helped me get the build right. Loading all four family bikes takes less than 2 minutes. Highly recommended!", author: "Rowan B." },
  { quote: "Easy to load and unload and looks great. The slow-fold strut is such a good addition — no more worrying about the rack dropping onto the bumper.", author: "Andrew S." },
  { quote: "Awesome rack. Material is sturdy and feels high quality. We've done four road trips with it since it arrived. Couldn't be happier — this thing doesn't move at all at highway speeds.", author: "Austin E." },
];

const ugcPhotos = [
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/ab00a254-0ba8-411c-b535-d84dbf0433a4/aa230f0b-d80d-4e92-8ee6-35f5904894e7.jpg?d=x1200", alt: "Happy JB Racks customer" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/ab00a254-0ba8-411c-b535-d84dbf0433a4/aea8bb7d-0964-4880-82f8-a05c812074fc.jpg?d=x1200", alt: "JB Racks customer review photo" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/442d4e28-7f23-47f9-ae79-9c376bb2d2c3/8722f514-09b1-41bf-ac96-92a50d68075f.jpg?d=x1200", alt: "JB Racks UGC customer photo" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/442d4e28-7f23-47f9-ae79-9c376bb2d2c3/3b4bfbc1-c4b0-4f94-b014-74ec8065abaf.jpg?d=x1200", alt: "JB Racks bikes loaded" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/442d4e28-7f23-47f9-ae79-9c376bb2d2c3/56cd3b1b-f375-4d24-9bdc-b61ea004a131.jpg?d=x1200", alt: "Family bike rack customer photo" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/442d4e28-7f23-47f9-ae79-9c376bb2d2c3/30edd2e8-3d26-489b-b6d5-f8530a9f7a12.jpg?d=x1200", alt: "JB Racks customer UGC" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/442d4e28-7f23-47f9-ae79-9c376bb2d2c3/06f903ac-1d39-4d81-a9bc-e699cf20f077.jpg?d=x1200", alt: "Happy customer with JB Racks" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/ab00a254-0ba8-411c-b535-d84dbf0433a4/ed92ab9d-d57b-44e6-a2c0-25681917879b.jpg?d=x1200", alt: "JB Racks family adventure" },
  { src: "https://d3g5hqndtiniji.cloudfront.net/images/ab00a254-0ba8-411c-b535-d84dbf0433a4/6881871e-72a9-4a0e-b7ea-10474d0406d0.jpg?d=x1200", alt: "JB Racks loaded with bikes" },
];

const fbComments = [
  { initials: "KL", name: "Karen L.", time: "3d", text: "We've been using platform racks for years and always struggled getting four bikes on without them knocking each other. Switched to JB Racks six weeks ago and the difference is unreal. The kids can actually help load their own bikes now — it's that easy. The swing arm means I can still get into the boot for snacks 😂", likes: "❤️ 124", liked: true, color: "#4a7fb5" },
  { initials: "MT", name: "Michael T.", time: "3d", text: "Bought the 6-bike rack for our crew — 2 adults, 3 kids, and sometimes my dad's e-bike. It handles all of it without breaking a sweat. The slow-fold strut is genuinely excellent, especially when you've got kids running around near the car. Worth every cent.", likes: "👍 98", liked: false, color: "#3a9e6e" },
  { initials: "JR", name: "Jess R.", time: "2d", text: "I was comparing JB Racks to VelociRAX and Dirty Possum — went with JB Racks because of the swing arm and the 4-year warranty. So glad I did. Customer service is also excellent. When I had a question about fitting it to our Fortuner they responded within an hour.", likes: "👍 76", liked: false, color: "#b55a3a" },
  { initials: "DW", name: "Dave W.", time: "1d", text: "Three road trips to the South West now. The rack has been flawless. We do about 3–4 hours of highway driving each way and the bikes don't move a centimetre. Wish I'd done this years ago instead of faffing with roof racks.", likes: "👍 54", liked: false, color: "#7a5ab5" },
  { initials: "SH", name: "Sarah H.", time: "22h", text: "The kids call it 'the bike tower' which I think is the highest praise possible from an 8-year-old 😂 Genuinely great product, shipping was fast, and the instructions were clear. Already recommended it to two other school families.", likes: "❤️😍 211", liked: true, color: "#b5894a" },
];

export default async function Lp002PersonaPage({ params }: { params: Promise<{ persona: string }> }) {
  const { persona: slug } = await params;
  const persona = getPersona(slug);
  if (!persona) notFound();

  const { lp002: copy, utmCampaign } = persona;
  const shopUrl = `https://jbracks.com.au/collections/vertical-bike-racks?utm_source=bikereviews&utm_medium=lp&utm_campaign=${utmCampaign}&utm_content=cta`;

  return (
    <div className="max-w-[1140px] mx-auto" style={{ fontFamily: "'Libre Franklin', system-ui, sans-serif" }}>
      {/* <CountdownBar /> */}

      <header className="border-b py-4 text-center" style={{ background: 'var(--white)', borderColor: 'var(--rule)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-oe-black.svg"
          alt="Bikers Review"
          className="h-12 w-auto mx-auto"
        />
      </header>

      {/* HERO */}
      <div style={{ background: 'var(--white)', padding: '44px 40px 36px', borderBottom: '3px solid var(--brand)' }}>
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex items-center justify-center flex-shrink-0 text-lg overflow-hidden"
            style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--brand-light)' }}
          >
            👩
          </div>
          <div style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
            <strong style={{ color: 'var(--ink)', display: 'block' }}>By {copy.authorName}</strong>
            {copy.authorDesc}
          </div>
        </div>

        <h1
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: 'var(--ink)',
            marginBottom: '18px',
            letterSpacing: '-0.02em',
          }}
        >
          {copy.h1Main}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>{copy.h1Emphasis}</em>{' '}
          {copy.h1Suffix}
        </h1>

        <div
          style={{
            fontSize: '16px',
            color: 'var(--ink-mid)',
            background: 'var(--brand-light)',
            borderLeft: '4px solid var(--brand)',
            padding: '14px 18px',
            borderRadius: '0 6px 6px 0',
          }}
        >
          <strong style={{ color: 'var(--ink)' }}>Summary:</strong> {copy.summary}
        </div>
      </div>

      {/* ARTICLE */}
      <div style={{ background: 'var(--white)', padding: '36px 40px 0' }}>
        <p style={{ fontSize: '17px', color: 'var(--ink-mid)', marginBottom: '14px', lineHeight: 1.75 }}>
          I never thought I&apos;d be writing about a bike rack. But after what happened over the past two months, I had
          to share this with every family I know who&apos;s struggling with the same problem.
        </p>
        <p style={{ fontSize: '17px', color: 'var(--ink-mid)', marginBottom: '14px', lineHeight: 1.75 }}>
          My name is Sarah. I&apos;m a 38-year-old mum from Brisbane&apos;s north side, and for three years, every
          Sunday morning started the same way — wrestling bikes onto a roof rack, fighting with straps, forgetting the
          kids&apos; helmets were still inside, and arriving at the trail already exhausted. Then we found JB Racks, and
          our weekends changed completely.
        </p>

        {/* 7 REASONS */}
        {reasons.map((r) => (
          <div key={r.num} style={{ padding: '48px 0', borderTop: '1px solid var(--rule)' }}>
            <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
              <span style={{ color: 'var(--brand)', marginRight: '6px' }}>{r.num}.</span>
              {r.summary}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
              <div className={r.flip ? 'md:order-last' : ''}>
                <div style={{ borderRadius: '10px', overflow: 'hidden', background: 'var(--bg)', aspectRatio: '4/3' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.imgAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '24px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '14px' }}>
                  {r.title}
                </h3>
                {r.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: '12px' }}>{p}</p>
                ))}
                {r.stat && (
                  <div style={{ background: 'var(--brand-light)', border: '1px solid rgba(255,120,0,0.2)', borderRadius: '8px', padding: '14px 16px', marginTop: '16px', fontSize: '14px', color: 'var(--ink-mid)' }}>
                    <strong style={{ color: 'var(--brand-dark)', display: 'block', fontSize: '20px', fontWeight: 700, marginBottom: '2px' }}>{r.stat.value}</strong>
                    {r.stat.label}
                  </div>
                )}
                <div className="flex flex-wrap gap-x-5 gap-y-2.5 mt-4">
                  {r.pills.map((pill) => (
                    <span key={pill} className="flex items-center gap-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink-mid)' }}>
                      <span className="flex items-center justify-center flex-shrink-0" style={{ width: '20px', height: '20px', background: 'var(--green)', color: 'white', fontSize: '12px', fontWeight: 700, borderRadius: '50%' }}>✓</span>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* INLINE CTA */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'var(--ink)', color: 'white', borderRadius: '12px', padding: '28px 32px', margin: '40px 0' }}
        >
          <div className="md:text-left text-center">
            <h4 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
              Ready to upgrade your family&apos;s weekends?
            </h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
              4, 5 &amp; 6-bike racks. Free Slow-Fold Strut included. Limited Mid-Season offer.
            </p>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'var(--brand)', marginTop: '6px', display: 'block' }}>
              From $899 — Bundles from $1,199
            </span>
            <div className="flex flex-wrap gap-5 mt-3.5">
              {['4-year warranty', 'Free shipping*', '15,247+ customers', 'Secure checkout'].map((item) => (
                <div key={item} className="flex items-center gap-1.5" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0" style={{ background: 'var(--brand)', color: 'white', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block', letterSpacing: '0.02em' }}>
            SHOP JB RACKS →
          </a>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div style={{ background: 'var(--bg)', padding: '48px 40px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="text-center mb-8" style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '28px', fontWeight: 900, color: 'var(--ink)' }}>
          Join Over 15,000+ Happy Families
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.author} style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '20px' }}>
              <div style={{ color: 'var(--brand)', fontSize: '15px', marginBottom: '10px', letterSpacing: '2px' }}>★★★★★</div>
              <blockquote style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '12px' }}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>
                {r.author} <span style={{ fontWeight: 400, color: 'var(--ink-muted)' }}>· Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHOTO STRIP */}
      <div style={{ background: 'var(--white)', padding: '0 40px 48px' }}>
        <div className="grid grid-cols-3 gap-2.5">
          {ugcPhotos.map((photo) => (
            <div key={photo.src} style={{ aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', background: 'var(--bg)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>

      {/* FACEBOOK COMMENTS */}
      <div style={{ background: 'var(--bg)', padding: '0 40px 48px' }}>
        <div style={{ background: '#fff', border: '1px solid #dddfe2', borderRadius: '8px', overflow: 'hidden', fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif", boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div className="flex items-center gap-2" style={{ background: '#3b5998', padding: '10px 14px' }}>
            <div style={{ color: 'white', fontSize: '20px', fontWeight: 900, fontFamily: 'Georgia, serif', letterSpacing: '-1px' }}>f</div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600 }}>JB Racks Australia</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>Facebook · 15,247 people like this</div>
            </div>
          </div>
          <div style={{ padding: '14px 14px 0', borderBottom: '1px solid #e4e6ea' }}>
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="flex items-center justify-center flex-shrink-0" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1877f2', fontSize: '14px', fontWeight: 800, color: 'white' }}>JB</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505' }}><span style={{ color: '#1877f2' }}>JB Racks Australia</span></div>
                <div style={{ fontSize: '12px', color: '#65676b' }}>🌐 3 days ago</div>
              </div>
            </div>
            <div style={{ fontSize: '15px', color: '#050505', lineHeight: 1.6, marginBottom: '12px' }}>
              Which family adventure are you heading to this long weekend? 🚴‍♀️🚴 Tag a family who needs a JB Rack for their next trip! 👇
            </div>
            <div className="flex items-center justify-between" style={{ padding: '6px 14px', borderTop: '1px solid #e4e6ea', borderBottom: '1px solid #e4e6ea', margin: '0 -14px' }}>
              <div className="flex items-center gap-1" style={{ fontSize: '13px', color: '#65676b' }}><span>👍❤️😍</span><span>847</span></div>
              <div style={{ fontSize: '13px', color: '#65676b' }}>214 comments · 38 shares</div>
            </div>
            <div className="flex" style={{ paddingBottom: '2px' }}>
              {['👍 Like', '💬 Comment', '↗ Share'].map((btn) => (
                <div key={btn} className="flex items-center gap-1.5" style={{ padding: '6px 12px', fontSize: '14px', fontWeight: 600, color: '#65676b', cursor: 'pointer' }}>{btn}</div>
              ))}
            </div>
          </div>
          <div style={{ padding: '10px 14px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {fbComments.map((c) => (
              <div key={c.initials} className="flex gap-2 items-start">
                <div className="flex items-center justify-center flex-shrink-0" style={{ width: '32px', height: '32px', borderRadius: '50%', background: c.color, fontSize: '12px', fontWeight: 800, color: 'white' }}>{c.initials}</div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div style={{ background: '#f0f2f5', borderRadius: '18px', padding: '8px 14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#050505', marginBottom: '2px' }}>{c.name}</div>
                    <div style={{ fontSize: '14px', color: '#050505', lineHeight: 1.5 }}>{c.text}</div>
                  </div>
                  <div className="flex items-center gap-2.5 pl-2">
                    <span style={{ fontSize: '12px', fontWeight: 700, color: c.liked ? '#1877f2' : '#65676b', cursor: 'pointer' }}>👍 Like</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#65676b', cursor: 'pointer' }}>Reply</span>
                    <span style={{ fontSize: '11px', color: '#65676b' }}>{c.time}</span>
                    <span style={{ fontSize: '12px', color: '#65676b', marginLeft: 'auto', paddingRight: '4px' }}>{c.likes}</span>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#65676b', cursor: 'pointer', padding: '4px 8px', marginTop: '4px' }}>View 209 more comments...</div>
            <div className="flex items-center gap-2" style={{ padding: '8px 0 4px' }}>
              <div className="flex items-center justify-center flex-shrink-0" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1877f2', fontSize: '12px', fontWeight: 800, color: 'white' }}>Y</div>
              <div style={{ flex: 1, background: '#f0f2f5', borderRadius: '20px', padding: '9px 16px', fontSize: '14px', color: '#65676b' }}>Write a comment...</div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ background: 'var(--brand)', padding: '52px 40px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'white', color: 'var(--brand-dark)', fontSize: '13px', fontWeight: 700, padding: '5px 16px', borderRadius: '20px', marginBottom: '24px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          🔴 Limited Mid-Season Offer — Ends Soon
        </div>
        <h2 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '12px' }}>
          Get Your Family on the Trails Every Weekend
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '10px' }}>
          4, 5 &amp; 6-bike racks from $899. Bundles from $1,199 — save $300.
        </p>
        <br />
        <a href={shopUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: 'var(--brand-dark)', fontSize: '17px', fontWeight: 700, padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.02em', marginBottom: '16px' }}>
          SHOP JB RACKS NOW
        </a>
        <div className="flex justify-center flex-wrap gap-7 mt-4">
          {['4-year warranty', 'Free shipping*', '15,247+ customers', 'Secure checkout'].map((item) => (
            <div key={item} className="flex items-center gap-1.5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
              <span style={{ fontWeight: 700, color: 'white' }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* DEAL STRIP */}
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 text-center" style={{ background: 'var(--ink)', padding: '8px 40px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
        <span>🔒 <strong style={{ color: 'white' }}>Secure Checkout</strong></span>
        <span>📦 <strong style={{ color: 'white' }}>Free Shipping*</strong> on orders over $150</span>
      </div>
    </div>
  );
}
