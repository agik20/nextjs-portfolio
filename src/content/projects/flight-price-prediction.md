---
A machine learning regression project predicting domestic flight ticket prices in India across 6 major airlines using 300,261 booking records from Ease My Trip. Covers data quality assessment, categorical encoding, exploratory analysis, and Linear Regression baseline modeling.
---

## Architecture

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Data Collection | Octoparse web scraper | Flight booking data from Ease My Trip platform |
| Data Processing | Pandas, NumPy | Cleaning, validation, and feature transformation |
| Visualization | Matplotlib, Seaborn, Plotly | EDA charts, correlation heatmaps, distribution plots |
| Modeling | scikit-learn, XGBoost, CatBoost, LightGBM | Regression baseline and ensemble comparison |
| Development | Jupyter Notebook, VS Code | Interactive analysis workflow |

---

## Dataset

**Source:** Ease My Trip platform, collected via Octoparse (Feb 11 – Mar 31, 2022)

| Attribute | Value |
|-----------|-------|
| Total Records | 300,261 |
| Features | 11 |
| Airlines | 6 (Air India, IndiGo, Vistara, etc.) |
| Routes | 6 source–destination city pairs |
| Timeframe | 50 days |
| Classes | Economy, Business |
| Target | `price` (INR) |

**Data splits:** clean (300K+), business, economy — with zero missing values and zero duplicates after cleaning.

### Feature Overview

| Feature | Type | Description |
|---------|------|-------------|
| `airline` | Categorical | 6 unique carriers |
| `source_city` | Categorical | Origin city |
| `destination_city` | Categorical | Destination city |
| `departure_time` | Ordinal | Time bucket (Morning/Evening/Night) |
| `arrival_time` | Ordinal | Arrival time bucket |
| `stops` | Ordinal | 0 / 1 / 2+ stops |
| `class` | Binary | Economy or Business |
| `duration` | Numeric | Travel time in hours |
| `days_left` | Numeric | Booking-to-departure gap |
| `price` | Numeric | **Target** — ticket price (INR) |

---

## Key Findings

### Price Drivers

- **`class`** is the dominant predictor — Business class commands dramatically higher price floors
- **`airline`** shows substantial variance: Vistara and Air India reach premium price points vs. budget carriers
- **`days_left`** exhibits negative correlation with price — last-minute fares spike sharply
- **`stops`** shows counterintuitive pattern: 2+ stops are cheaper on average (longer layover routes on budget airlines)

### Model Performance

Linear Regression establishes a baseline but reveals structural limitations:

- **Heteroscedasticity** detected — fan-shaped residuals indicating increasing variance at higher predicted prices
- **Non-normal residuals** (Shapiro-Wilk p < 0.05) — bimodal distribution from Economy/Business split
- **QQ plot** shows systematic tail departure — OLS cannot capture pricing discontinuities between class tiers

**Recommendation:** Gradient boosting models (XGBoost, LightGBM) are the natural next step for handling categorical price jumps and interaction effects between `class` and `airline`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Python 3.8+ |
| Data Processing | Pandas, NumPy |
| Visualization | Matplotlib, Seaborn, Plotly |
| ML Framework | scikit-learn, XGBoost, CatBoost, LightGBM |
| Development | Jupyter Notebook, VS Code |
| Version Control | Git, GitHub |
| License | MIT |

---

## Impact

Demonstrates systematic data-to-insight workflow on a large real-world pricing dataset. The bimodal price structure (Economy vs. Business) and heteroscedastic residuals reveal the limitations of linear models on airline pricing — establishing a clear path toward ensemble methods for production-grade price prediction.