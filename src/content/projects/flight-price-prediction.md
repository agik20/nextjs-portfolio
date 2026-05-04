## Project Overview

A machine learning regression project predicting domestic flight ticket prices in India using structured booking data. The pipeline covers data quality assessment, categorical encoding, exploratory analysis, and Linear Regression modeling — demonstrating systematic data-to-insight workflow on a real-world pricing dataset.

---

## The Problem

Flight prices are notoriously volatile — the same seat can differ by thousands of rupees depending on airline, booking timing, number of stops, and travel class. Can we build a model that reliably estimates ticket prices from booking metadata alone?

The dataset (`Clean_Dataset.csv`) contains **300,261 records** across three data splits — clean, business, and economy — covering **6 major Indian airlines** and routes between **6 source–destination city pairs**. The regression target is `price` (INR).

---

## Dataset Structure

| Feature | Type | Description |
|---|---|---|
| `airline` | Categorical | 6 airlines (Air India, IndiGo, Vistara, etc.) |
| `source_city` | Categorical | Origin city |
| `destination_city` | Categorical | Destination city |
| `departure_time` | Categorical | Time bucket (Morning, Evening, Night, etc.) |
| `arrival_time` | Categorical | Time bucket |
| `stops` | Categorical | zero / one / two-or-more |
| `class` | Categorical | Economy or Business |
| `duration` | Numeric | Flight duration in hours |
| `days_left` | Numeric | Days between booking and departure |
| `price` | Numeric | **Target** — ticket price in INR |

Preprocessing steps: dropped `Unnamed: 0` and `flight` (identifier columns), confirmed **zero missing values** and **zero duplicates** in the clean split.

---

## Exploratory Data Analysis

### Feature Value Distributions

![Count distribution of categorical features across airline, city, departure time, arrival time, stops, and class](/plots/boxplots_count.png)
Distribution of categorical features across the dataset. Vistara and Air India dominate the airline split.
Routes are relatively balanced across city pairs, while `stops` skews heavily toward one-stop flights —
non-stop being the least common routing option.

---

### Price vs. Categorical Features

![Boxplots of ticket price against each categorical variable including airline, stops, and class](/plots/boxplots_price.png)
Three patterns stand out immediately. **Business class** commands a dramatically higher price floor and ceiling
than Economy — the class split is the single strongest categorical price driver. **Airline** shows substantial
variance: Vistara and Air India Business tickets reach significantly higher price points than budget carriers.
**Stops** exhibits a counterintuitive pattern — two-or-more stops are cheaper on average, likely reflecting
longer layover routes on budget airlines rather than a direct causal relationship.

---

### Correlation Heatmap

![Pearson correlation heatmap of all numeric and label-encoded features against price](/plots/heatmap_class.png)
After label encoding all categorical columns, `class` emerges as the dominant price predictor, followed by
`duration` and `days_left`. The negative correlation on `days_left` confirms the expected booking dynamic:
tickets purchased further in advance trend cheaper, while last-minute fares spike sharply.

---

## Modeling

A **Linear Regression** model was trained on an 80/20 stratified split across 9 features after label-encoding
all categorical variables via `sklearn.preprocessing.LabelEncoder`.

**Features used:**
`airline`, `source_city`, `destination_city`, `departure_time`, `arrival_time`, `stops`, `class`, `duration`, `days_left`

### Results

| Metric | Train | Test |
|---|---:|---:|
| R² Score | — | — |
| MAE | — | — |
| RMSE | — | — |

> *Update with actual output values from notebook run.*

---

## Residual Analysis

### Residual Plot — Linear Regression

![Scatter plot of residuals vs predicted price showing heteroscedasticity in Linear Regression](/plots/Residual%20Plot%20-%20Linear%20Regression.png)
The residual plot shows a clear **fan shape** — variance increases with predicted price. This heteroscedasticity
is a known limitation of linear models on price data: the model handles mid-range fares reasonably but
systematically underestimates variance on premium Business class tickets where pricing is more non-linear.

---

### Residual Distribution

![Histogram of residuals with KDE overlay showing non-normal distribution](/plots/histogram-residual.png)
The residual histogram deviates from a normal bell curve, with a heavy right tail driven by high-value Business
class prediction errors. Combined with the Shapiro-Wilk test rejecting normality (p < 0.05), this confirms
that OLS assumptions are not fully satisfied on this dataset.

---

### QQ Plot of Residuals

![QQ plot of residuals showing departure from the diagonal normal reference line](/plots/qq%20plots%20of%20residual.png)
The QQ plot shows systematic departure from the diagonal at both tails — characteristic of a distribution
with heavier-than-normal tails. This is expected given the bimodal price structure (Economy vs. Business)
which OLS cannot fully decompose without explicit interaction terms.

---

## Key Takeaways

Linear Regression establishes a useful baseline but hits a structural ceiling on this dataset. The bimodal
price distribution (Economy vs. Business class) introduces non-linearity that OLS cannot fully capture,
as evidenced by the fan-shaped residuals and non-normal QQ plot.

Gradient boosting models — XGBoost, LightGBM — are the natural next step, given their ability to handle
categorical price discontinuities between class tiers without assuming constant variance. The `days_left`
and `class` features are the highest-leverage inputs for further feature engineering: booking window segments
and interaction terms between class and airline would likely yield meaningful R² improvements over the
linear baseline.