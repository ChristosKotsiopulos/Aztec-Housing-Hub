import "./styles.css";
import sdsuLogo from "./assets/sdsulogo.jpg";

const navLinks = ["Listings", "Add Listing", "Profile", "Roommates", "Login"];

const filters = [
  "Keyword search",
  "Price range",
  "Housing type",
  "Beds/Baths",
  "Neighborhood near SDSU",
];

const listings = [
  {
    title: "Room near SDSU",
    price: "$1,050 / month",
    area: "College Area",
    type: "Room",
    availability: "Available Aug 1",
  },
  {
    title: "2 Bed Apartment",
    price: "$2,400 / month",
    area: "La Mesa",
    type: "Apartment",
    availability: "Available Now",
  },
  {
    title: "Shared House",
    price: "$950 / month",
    area: "Mission Valley",
    type: "House",
    availability: "Available Sep 1",
  },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-row">
          <div className="brand-lockup">
            <img className="brand-logo" src={sdsuLogo} alt="San Diego State logo" />
            <div>
              <p className="eyebrow">San Diego State University</p>
              <h1>Aztec Housing Hub</h1>
            </div>
          </div>

          <nav className="top-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a href="/" key={link} onClick={(event) => event.preventDefault()}>
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-content">
        <section className="hero">
          <div>
            <h2>Find student housing near SDSU.</h2>
            <p className="hero-text">
              Browse listings, add housing posts, manage your profile, and
              connect with other students.
            </p>
          </div>

          <div className="hero-panel">
            <h3>Search Filters</h3>
            <div className="filter-list">
              {filters.map((filter) => (
                <span className="filter-chip" key={filter}>
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Listings Feed</p>
            <h3>Example housing listings</h3>
          </div>

          <div className="listing-grid">
            {listings.map((listing) => (
              <article className="listing-card" key={listing.title}>
                <h4>{listing.title}</h4>
                <p>{listing.price}</p>
                <p>{listing.area}</p>
                <p>{listing.type}</p>
                <p>{listing.availability}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
