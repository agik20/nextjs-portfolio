---
A full-cycle machine learning project predicting median house values across California using 1990 census data.
The workflow spans exploratory data analysis, feature engineering, multi-model benchmarking, and Flask deployment —
achieving a best **R² of 0.83** with XGBoost.

#### Stats:
| Label | Value | Unit |
|-------|:--------:|-----:|
| Dataset Size | 20,640 | records |
| Features | 9 | original |
| Models Trained | 5 | compared |
| Best RMSE | $48K | XGBoost |

featured: true

---

## Pipeline

| Step | Stage | Detail |
|------|-------|--------|
| 01 | Data Loading | 20,640 records · 9 features · 1990 CA Census |
| 02 | EDA | Distribution analysis · Missing value audit · Outlier detection |
| 03 | Preprocessing | Median imputation · One-hot encoding · Standard scaling |
| 04 | Feature Engineering | `rooms_per_household` · `bedrooms_per_room` · `population_per_household` |
| 05 | Modeling | Linear Regression → Random Forest → XGBoost · CatBoost · LightGBM |
| 06 | Deployment | Flask API · Docker container · Web interface |

---

## Exploratory Data Analysis

### Scatter Matrix — Predictor–Target Relationships

![Scatter matrix showing pairwise relationships between predictors and median_house_value](/plots/train_scatter.png)
Pairwise scatter plots reveal non-linear relationships between features and `median_house_value`,
particularly for `median_income` — motivating the use of ensemble methods over linear models.

---

### Feature Distributions — Before vs After Engineering

| Before Feature Engineering | After Feature Engineering |
|:--------------------------:|:-------------------------:|
| ![Feature distributions before engineering](/plots/train_hist_before.png) | ![Feature distributions after engineering](/plots/train_hist_after.png) |

Engineered ratio features (`rooms_per_household`, `bedrooms_per_room`) produce tighter, more
normally distributed signals compared to their raw counterparts.

---

### Correlation Matrix — Before vs After Engineering

| Before | After |
|:------:|:-----:|
| ![Correlation matrix before feature engineering](/plots/train_corr_before.png) | ![Correlation matrix after feature engineering](/plots/train_corr_after.png) |

### Final Correlation Analysis

![Final correlation heatmap including all engineered features](/plots/train_corr_final.png)

> **Key insight:** `median_income` alone explains ~48% of price variance (r = 0.69).
> Engineered features shifted the correlation structure — visible in the tighter heatmap post-engineering.

---

## Feature Correlation with Target

| Feature | Correlation | Note |
|---------|:-----------:|------|
| `median_income` | **+0.69** | Strongest predictor |
| `ocean_proximity` | +0.47 | Coastal premium |
| `rooms_per_household` | +0.41 | Engineered feature |
| `bedrooms_per_room` | −0.35 | Engineered feature |
| `housing_median_age` | +0.11 | Weak signal |

---

## Model Results

| Model | R² Score | RMSE | MAE |
|-------|:--------:|-----:|----:|
| Linear Regression | 0.6687 | $67,305 | $48,660 |
| Random Forest | 0.8227 | $49,243 | $32,187 |
| **XGBoost** ✦ | **0.8306** | **$48,125** | **$31,827** |

> Random Forest reduced RMSE by **27%** vs. linear baseline by capturing non-linear geographic patterns.
> XGBoost further improved R² to **0.8306** — translating to ~$1,100 better average prediction per house.

---

## Predicted vs Actual

### XGBoost

![XGBoost predicted vs actual values](/plots/XGBoost_pred_vs_actual.png)

### CatBoost

![CatBoost predicted vs actual values](/plots/CatBoost_pred_vs_actual.png)

### LightGBM

![LightGBM predicted vs actual values](/plots/LightGBM_pred_vs_actual.png)

Tighter clustering around the diagonal indicates better prediction accuracy.
XGBoost achieves the most consistent distribution across the full price range.

---

## Impact

Demonstrates complete machine learning lifecycle capability — from raw census data to a
containerized Flask API — with measurable, quantifiable improvements at each stage.
The project establishes a reproducible benchmark for regression-based real estate valuation.