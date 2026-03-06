# acad_INFO — Future Ideas & TODO

> **Status:** Rough notes — implement when ready

---

## 1. UI & Branding Overhaul
- [ ] Finalize project name, logo, and page title
- [ ] Improve contrast on low-contrast text (accessibility pass)
- [ ] Big UI overhaul (layout, spacing, visual hierarchy)
- [ ] Optimize performance (lazy loading, code splitting, minification)
- [ ] Improve mobile/phone responsiveness as well as desktop

## 2. Acadally Ranked Leaderboard Sync *(Future)*
- [ ] Reverse-engineer Acadally's own ranked leaderboard API
- [ ] Add HTTP API calls to scraper to fetch official leaderboard data
- [ ] Create new leaderboard section in dashboard showing Acadally's official rankings alongside acad_INFO's custom score

## 3. High-Accuracy Gender Prediction
**Goal**: Acadally's native gender data is highly inaccurate (many missing or wrong). We need to programmatically guess gender based on student first names (~95-99% accuracy expected for Indian names).

- [ ] **Dual-Algorithm Approach in `export_data.py`:**
  1. **Primary**: Use a static, curated list of Indian names. We will create or provide a `indian_names_gender.csv` file mapping common names to male/female probabilities. Check this list first.
  2. **Fallback**: If the name isn't in the CSV, fall back to the `gender-guesser` Python library (install via `pip`).
- [ ] During the data export pipeline, overwrite the raw `gender` field from the API with this computed gender before saving to `students.json`.
- [ ] This will fix the statistics on the "Classes" page and make the demographic data actually useful.
