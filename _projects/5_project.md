---
layout: page
title: Mixture-Ratio Sensitivity of a Hydrogen–Oxygen Rocket Engine Using NASA CEA
description: How Tc and Isp change with O/F for GH2/GO2 at 68 atm, restricted vs full equilibrium chemistry
img:
importance: 5
---

## Overview
This project studied how **combustion chamber temperature (Tc)** and **specific impulse (Isp)** vary with **oxidizer-to-fuel ratio (O/F)** for a **gaseous hydrogen–oxygen** rocket engine using **NASA CEA (Chemical Equilibrium with Applications)**. The engine operated at **Pc = 68 atm** and expanded to **sea-level conditions**. Mixture ratios from **O/F = 2 to 10** were evaluated to identify performance trends and the mixture ratio that maximizes Isp.

Two chemical models were compared:

- **Case A (restricted products):** H₂O, H₂, O₂ only  
- **Case B (full equilibrium):** all species active (CEA default equilibrium chemistry)

## Method
For each O/F value, NASA CEA was used to compute equilibrium products and performance metrics. The outputs of interest were:

- **Chamber temperature, Tc**
- **Specific impulse, Isp** (sea-level expansion)

This comparison isolates how **chemistry model fidelity** influences predicted performance.

## Key Results
### Case A (restricted chemistry)
The restricted product set suppressed both temperature and performance. The output was not physically realistic for combustion conditions:

- **Tc fixed at ~298 K**
- **Isp peak ~736 m/s**

### Case B (full equilibrium chemistry)
Full equilibrium chemistry produced physically realistic rocket-combustion behavior:

- **Tc increased from ~2070 K at O/F = 2** to **~3670 K** at higher O/F
- **Isp peaked near O/F ≈ 2** at **~1790 m/s (≈183 s)**

This reflects a known trade-off: as the mixture becomes more oxidizer-rich, Tc rises but **average molecular weight increases**, which reduces exhaust velocity. The optimum occurs on the **fuel-rich side**, where lower molecular weight exhaust compensates for a slight temperature drop and increases jet momentum.

## Performance Summary (from CEA outputs)

| Model  | Chemistry                         | Pc     | Expansion | O/F range | Tc trend                  | Isp peak                 |
|:------|:----------------------------------|------:|:---------|---------:|:--------------------------|:-------------------------|
| Case A | Restricted (H₂O, H₂, O₂)          | 68 atm | Sea level | 2–10     | ~298 K (non-physical)     | ~736 m/s                 |
| Case B | Full equilibrium (all species)    | 68 atm | Sea level | 2–10     | ~2070 → ~3670 K           | ~1790 m/s at O/F ≈ 2     |

## Takeaways
- Chemistry assumptions strongly affect predicted rocket performance.
- Restricting products can produce misleading outputs for combustion modeling.
- For GH2/GO2, the best Isp often occurs fuel-rich because lower molecular weight exhaust increases effective exhaust velocity.

## Tools
- **NASA CEA** for equilibrium chemistry and performance prediction  
- Plotting and post-processing (MATLAB)

## Documentation
### Case A (restricted chemistry)
<iframe 
  src="/assets/pdf/Case_A.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
<hr>
### Case B (full equilibrium chemistry)
<iframe 
  src="/assets/pdf/Case_B.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
