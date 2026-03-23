import { useState } from "react";

const initialForm = {
  title: "",
  price: "",
  area: "",
  beds: "1",
  baths: "1",
  distance: "",
  availability: "",
  description: "",
};

export default function AddListing({ onAddSublease }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.title.trim() ||
      !form.price ||
      !form.area.trim() ||
      !form.distance ||
      !form.availability.trim() ||
      !form.description.trim()
    ) {
      setError("Please complete all fields before posting your sublease.");
      return;
    }

    onAddSublease({
      title: form.title.trim(),
      price: Number(form.price),
      area: form.area.trim(),
      beds: Number(form.beds),
      baths: Number(form.baths),
      distance: Number(form.distance),
      availability: form.availability.trim(),
      description: form.description.trim(),
    });

    setForm(initialForm);
    setSuccess("Sublease posted to the Sublease Hub.");
  };

  return (
    <section className="add-listing-page">
      <div className="section-heading">
        <p className="eyebrow">Add Listing</p>
        <h3>Post a Sublease</h3>
      </div>

      <p className="listings-page-subtitle">
        Share your sublease so other SDSU students can browse all subleases in
        one centralized Sublease Hub.
      </p>

      <form className="add-listing-form" onSubmit={handleSubmit}>
        <label>
          Listing Title
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Example: Mission Valley 1BR Summer Sublease"
          />
        </label>

        <div className="add-listing-grid">
          <label>
            Monthly Rent ($)
            <input
              type="number"
              min="1"
              value={form.price}
              onChange={(e) => updateField("price", e.target.value)}
            />
          </label>

          <label>
            Area
            <input
              type="text"
              value={form.area}
              onChange={(e) => updateField("area", e.target.value)}
              placeholder="College Area"
            />
          </label>

          <label>
            Bedrooms
            <select
              value={form.beds}
              onChange={(e) => updateField("beds", e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </label>

          <label>
            Bathrooms
            <select
              value={form.baths}
              onChange={(e) => updateField("baths", e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </label>

          <label>
            Distance from SDSU (miles)
            <input
              type="number"
              min="0"
              step="0.1"
              value={form.distance}
              onChange={(e) => updateField("distance", e.target.value)}
            />
          </label>

          <label>
            Availability
            <input
              type="text"
              value={form.availability}
              onChange={(e) => updateField("availability", e.target.value)}
              placeholder="Available Jun 1"
            />
          </label>
        </div>

        <label>
          Description
          <textarea
            rows="4"
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Include lease term, furniture, parking, and utilities."
          />
        </label>

        {error && <p className="form-message error">{error}</p>}
        {success && <p className="form-message success">{success}</p>}

        <button type="submit" className="contact-btn">
          Post Sublease
        </button>
      </form>
    </section>
  );
}
