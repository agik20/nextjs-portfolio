---
A full-cycle machine learning investigation into what the 1990 California census data can tell us about housing values — from geographic patterns to feature engineering, from five model comparisons to a final R² of 0.83.
---

## The Question

How well can we predict the median house value of a California census tract from its demographic and geographic attributes?

This isn't a theoretical exercise. California has the widest housing price dispersion in the United States — from $15,000 inland tracts to $500,000+ coastal ones. A model that learns to separate signal from noise here reveals something real about how geography, income, and housing stock shape value.

---

## The Data

**20,640 census tracts.** Nine original features. One target: `median_house_value`.

| Feature | What it measures |
|---------|-----------------|
| `median_income` | Median income of households in the tract |
| `housing_median_age` | Median house age in the tract |
| `total_rooms` / `total_bedrooms` | Aggregate housing stock |
| `population` / `households` | Demographic density |
| `latitude` / `longitude` | Geographic position |
| `ocean_proximity` | Distance to coast (<1H OCEAN, INLAND, ISLAND, NEAR BAY, NEAR OCEAN) |

The target ranges from **$15,000 to $500,001**, with a mean of **$206,864** and a median of **$179,700**. The standard deviation is $115,436 — a wide spread that suggests the problem is tractable but not trivial.

> **Key question:** Which of these features actually predict value, and which are noise?

---

## What the Raw Data Shows

### Feature Distributions

The raw data tells us immediately that some features are heavily skewed — total_rooms, total_bedrooms, population, and households all have long right tails. Most tracts cluster at low values; a few are extreme outliers.

![Feature distributions before transformation — skewed right-tail patterns](/plots/train_hist_before.png)

> Skewed distributions like this tend to penalize linear models. A log transform is the standard first response.

### Geographic Patterns

The geographic scatter plot reveals something striking immediately: high-value tracts cluster along the coast, especially near San Francisco and Los Angeles. Inland tracts (central valley) are consistently cheaper.

![Scatter plot of latitude vs longitude, colored by median house value](/plots/train_scatter.png)

> **Observation:** Geography matters — but is it the geography itself, or the income and housing characteristics that correlate with it?

### Correlation Structure

Before any transformation, the correlation heatmap shows `median_income` as the strongest single predictor (r ≈ 0.69 with target), and `ocean_proximity` variables as moderate contributors. But there's also a red flag: `total_rooms`, `total_bedrooms`, `population`, and `households` are nearly perfectly correlated (0.87–0.97). This is multicollinearity — they carry redundant information.

![Correlation matrix before feature engineering](/plots/train_corr_before.png)

---

## Preprocessing & Feature Engineering

Three transformations were applied before modeling:

1. **Log transformation** on `total_rooms`, `total_bedrooms`, `population`, `households` — compresses the long right tails into more symmetric distributions.
2. **One-hot encoding** of `ocean_proximity` — converts 5 categories into 5 binary columns.
3. **Domain-specific engineered features** — two ratios derived from housing stock relationships:
   - `bedroom_ratio` = total_bedrooms / total_rooms
   - `household_rooms` = total_rooms / households

After log transform, the distributions become visibly more normal:

![Feature distributions after log transformation](/plots/train_hist_after.png)

The correlation matrix shifts — the engineered features appear in the lower-right corner and show interesting patterns:

![Correlation matrix after log transform and one-hot encoding](/plots/train_corr_after.png)

And after adding the two engineered features:

![Final correlation matrix including engineered features](/plots/train_corr_final.png)

> **Key insight:** `bedroom_ratio` correlates with the target at r ≈ 0.26 — stronger than `ocean_proximity_NEAR BAY` (r ≈ 0.16) and comparable to `ocean_proximity_<1H OCEAN` (r ≈ 0.26). `household_rooms` has a strong negative correlation with `bedroom_ratio` (r ≈ −0.74), confirming they capture different aspects of housing stock.

---

## The Pipeline

```
Raw CSV (20,640 records)
    ↓ Drop rows with NaN (total_bedrooms missing in ~5% of tracts)
    ↓ 80/20 train-test split (random_state=42)
    ↓ Log transform + one-hot + engineered features
    ↓ StandardScaler (mean=0, std=1)
    ↓ Train → Evaluate
```

Five models were trained and compared on the held-out test set:

| Model | Approach | Complexity |
|-------|----------|-----------|
| Linear Regression | Baseline, no tuning | Low |
| Random Forest | GridSearchCV (81 combos, 5-fold CV) | Medium |
| XGBoost | n_estimators=300, lr=0.05, max_depth=6 | High |
| CatBoost | iterations=300, depth=6 | High |
| LightGBM | n_estimators=300, depth=6 | High |

---

## The Results

| Model | RMSE | MAE | R² | Interpretation |
|-------|-----:|----:|---:|---------------|
| Linear Regression | $67,305 | $48,660 | 0.6687 | Baseline — explains ~67% of variance |
| Random Forest | $49,243 | $32,187 | 0.8227 | +15% R² improvement |
| **XGBoost** ✦ | **$48,125** | **$31,827** | **0.8306** | Best overall |
| LightGBM | $48,017 | $32,062 | 0.8314 | Nearly tied with XGBoost |
| CatBoost | $51,106 | $34,753 | 0.8090 | Slightly worse |

> **Takeaway:** The jump from Linear Regression (R²=0.67) to tree-based models (R²≈0.83) is large — **non-linear relationships matter**. Among the boosting models, XGBoost and LightGBM are essentially tied; CatBoost trails slightly.

### How Well Does the Best Model Predict?

The XGBoost predicted-vs-actual plot shows clustering around the diagonal — the model captures the general trend well, but errors grow at the high end (expensive coastal tracts are harder to predict).

![XGBoost predicted vs actual values](/plots/XGBoost_pred_vs_actual.png)

> An RMSE of $48,125 means the typical prediction error is about **$48K** on a market where the median home is $180K — roughly a 27% relative error. Not bad for a model trained on 1990 census data with no renovation or school-quality features.

---

## What the Model Learned

The Random Forest feature importance ranking (most predictive features):

| Rank | Feature | Importance | What it means |
|------|---------|-----------:|---------------|
| 1 | `median_income` | 0.4917 | Income dominates — nearly half the predictive signal |
| 2 | `ocean_proximity_INLAND` | 0.1458 | Being inland (vs coastal) significantly lowers value |
| 3 | `longitude` | 0.0986 | West-coast tracts command premiums |
| 4 | `latitude` | 0.0887 | Bay Area vs SoCal vs Central Valley patterns |
| 5 | `housing_median_age` | 0.0466 | Older housing stock ≈ cheaper |
| 6 | `bedroom_ratio` | 0.0295 | Engineered ratio adds predictive power |
| 7 | `population` | 0.0262 | Density matters modestly |

> **The story in the numbers:** Income alone explains ~49% of what the model uses. Geography (latitude + longitude + inland proximity) accounts for another ~28%. Everything else — housing age, room ratios, population — is secondary. The model is primarily learning **"where is it, and who lives there?"**

---

## Where the Model Breaks

Every model has blind spots. Here are the honest ones for this project:

1. **Data is from 1990.** California housing has changed dramatically since then — prices have more than tripled in many areas. This model is a historical snapshot, not a current forecast.

2. **Tract-level aggregation.** Each row is a census tract (population ~1,000–10,000). The model learns aggregate patterns, not individual home values.

3. **No renovation or quality features.** Condition of the housing stock, school districts, crime rates — none of these appear in the dataset. They would improve predictions significantly.

4. **Capped target at $500K.** The original dataset clips `median_house_value` at $500,001. Tracts above this threshold are truncated, losing information.

5. **Geographic extrapolation fails.** The model was trained on California data. It cannot predict housing values in other states, and even within California, it struggles with areas not well-represented in the census (newer suburbs, rapidly gentrifying neighborhoods).

---

## Deployment

The trained model (`house_price_model.pkl`) and scaler (`scaler.pkl`) are saved and loaded by a Flask web app (`app.py`) that accepts housing feature inputs and returns predicted values. The app is containerized with Docker.

```bash
docker build -t house-price-app .
docker run -d -p 5000:5000 --name house-price-app house-price-app
```

An API endpoint `POST /predict` accepts JSON input and returns the predicted median house value.

---

## What I Would Do Next

This was a complete ML lifecycle from raw data to deployed inference. Here's what I'd add if given more time:

- **1990 → 2020 data**: Repeat with the ACS 2020 release to see if the feature importance ranking holds after three decades of market shifts.
- **SHAP explainability**: Replace the RF importance ranking with SHAP values for model-agnostic feature attribution.
- **Interactive prediction tool**: The current Flask app works, but a proper UI with geographic heatmaps would make the model's predictions more intuitive.
- **Ensemble stacking**: Combine XGBoost, LightGBM, and CatBoost predictions rather than picking a single best model.
- **Error analysis**: Systematically study where the model fails most — high-value coastal tracts, rural inland tracts, or specific regions — to understand what information is missing from the dataset.
