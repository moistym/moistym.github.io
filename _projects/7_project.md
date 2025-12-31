---
layout: page
title: Experimental Boundary Layer Analysis Using Hot-Wire Anemometry
description: Turbulent flat-plate boundary layer characterization using hot-wire measurements, FFT analysis, and comparison with classical theory
img: assets/img/ebla_cover.jpg
importance: 7
---

## Overview
This project experimentally analyzed a **turbulent boundary layer over a flat plate** using **hot-wire anemometry**. The objective was to compute key aerodynamic parameters from measured velocity data and to compare the resulting boundary layer structure with **classical laminar and turbulent boundary layer theory**.

Measurements were obtained at multiple wall-normal locations using calibrated hot-wire and pitot-static probes. These data were used to determine free-stream velocity, boundary layer thickness, wall shear stress, friction coefficient, turbulence intensity, and turbulent kinetic energy.

## Experimental Method
Voltage signals from the hot-wire and pitot-static probes were converted to physical quantities using calibration coefficients and polynomial fits. The following steps were performed:

- Converted raw voltage data to velocity, pressure, and temperature
- Computed free-stream velocity with uncertainty bounds
- Identified boundary layer thickness using the **99% velocity criterion**
- Calculated near-wall velocity gradients to estimate wall shear stress
- Determined friction coefficient from shear stress and free-stream conditions
- Applied FFT analysis to quantify turbulence intensity and temporal behavior
- Computed instantaneous turbulent kinetic energy from velocity fluctuations

## Boundary Layer Profiles
Both dimensional and non-dimensional boundary layer profiles were constructed and compared against classical solutions.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/EBLA1.jpg" title="Dimensional boundary layer velocity profile" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/EBLA2.jpg" title="Non-dimensional boundary layer comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Dimensional and non-dimensional boundary layer velocity profiles. Experimental data closely follow turbulent boundary layer theory and deviate from laminar predictions.
</div>

The non-dimensional velocity profile showed strong agreement with turbulent boundary layer theory, confirming the presence of a **zero or weak pressure gradient** across the test section.

## Turbulence Analysis
Time-resolved velocity measurements were used to quantify turbulence characteristics through spectral and statistical analysis.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/EBLA3.jpg" title="Instantaneous turbulent kinetic energy vs time" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/EBLA4.jpg" title="Turbulence intensity vs time" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Time-domain turbulence analysis showing turbulent kinetic energy and turbulence intensity derived from hot-wire velocity fluctuations.
</div>

FFT analysis revealed dominant turbulent frequency bands and confirmed statistically stationary turbulence over the measurement interval. Turbulence intensity remained consistent with expectations for a fully developed turbulent boundary layer.

## Key Results
- **Free-stream velocity:** approximately **15 m/s**, consistent with test conditions  
- **Boundary layer regime:** turbulent, with zero or mild pressure gradient  
- **Boundary layer thickness:** determined using the 99% velocity criterion  
- **Wall shear stress and friction coefficient:** extracted from near-wall velocity gradients  
- **Turbulence metrics:** successfully captured using FFT and time-domain analysis  

## Takeaways
This experiment demonstrated how **hot-wire anemometry** can be used to fully characterize turbulent boundary layers. The strong agreement between experimental data and turbulent boundary layer theory validated the measurement and calibration approach. The project combined signal processing, fluid mechanics theory, and experimental uncertainty analysis to produce physically consistent aerodynamic results.

## Tools and Techniques
- Hot-wire anemometry
- Pitot-static measurements
- Polynomial calibration (polyval)
- FFT-based turbulence analysis
- Boundary layer theory (laminar and turbulent)
- MATLAB data processing and visualization
