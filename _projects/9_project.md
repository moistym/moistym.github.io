---
layout: page
title: Wind Tunnel Aerodynamic Testing of a Space Shuttle Orbiter Scale Model
description: Low-speed wind tunnel testing of a 1:286 scale Space Shuttle Orbiter with lift and drag measurements across angle of attack
img: assets/img/SS1.jpg
importance: 13
---

## Overview
This project involved the **design, execution, and analysis of a low-speed wind tunnel experiment** to evaluate the aerodynamic performance of a **1:286 scale Space Shuttle Orbiter**. The objective was to quantify how **angle of attack (AoA)** affects lift, drag, and aerodynamic efficiency, and to compare experimental trends with **published NASA flight and sub-scale data**.

The model was tested over an AoA range from **−10° to 30°** at a freestream velocity of **20 m/s**, representative of low-speed approach and landing conditions.

## Experimental Setup
A scaled three-dimensional model of the Space Shuttle Orbiter was fabricated and mounted in a low-speed wind tunnel using a calibrated force balance.

Key setup parameters:
- **Scale:** 1:286  
- **Freestream velocity:** 20 m/s  
- **Angle of attack range:** −10° to 30°  
- **Measured quantities:** lift force, drag force  
- **Data processing:** MATLAB post-processing and uncertainty analysis  

The force balance was calibrated prior to testing to ensure accurate lift and drag measurements.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/SS1.jpg" title="3-D model of the Space Shuttle Orbiter" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/SS2.jpg" title="Calibration of drag portion of the force balance" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Three-dimensional CAD model of the 1:286 scale Space Shuttle Orbiter and experimental calibration of the force balance prior to testing.
</div>

## Test Procedure
The model was incrementally rotated to prescribed angles of attack. At each AoA, steady-state force measurements were recorded and converted to aerodynamic coefficients using standard nondimensionalization.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/SS3.jpg" title="Space Shuttle model at various angles of attack" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Space Shuttle model mounted in the wind tunnel at angles of attack of −10°, 0°, 10°, 20°, and 30°.
</div>

## Results and Analysis
Lift and drag coefficients were computed from the measured forces and analyzed as functions of angle of attack.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/SS4.jpg" title="Drag coefficient versus angle of attack" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Drag coefficient as a function of angle of attack, including experimental uncertainty. Drag increases rapidly with AoA, with higher drag observed at negative angles due to the orbiter’s lifting-body geometry.
</div>

### Key Findings
- **Maximum lift coefficient:**  
  - \( C_L \approx 1.01 \) at **20°**, followed by stall behavior
- **Maximum lift-to-drag ratio:**  
  - \( L/D \approx 1.88 \) at **10°**
- **Lift behavior:**  
  - Approximately linear at low angles of attack
- **Drag behavior:**  
  - Rapid growth with increasing AoA, consistent with bluff-body and lifting-body aerodynamics

Although the experimental Reynolds number (**~1×10⁵**) was significantly lower than full-scale Shuttle flight conditions, the **qualitative aerodynamic trends matched NASA sub-scale test data**.

## Comparison to Flight Data
Compared to flight conditions:
- Drag was higher due to low Reynolds number effects
- Maximum \( L/D \) was lower than flight values
- The AoA corresponding to peak efficiency aligned with Shuttle approach and landing data (≈10–12°)

Despite scaling limitations, the experiment successfully reproduced the expected aerodynamic behavior of the Space Shuttle Orbiter.

## Takeaways
This project demonstrated the full experimental aerodynamics workflow:
- Model scaling and fabrication
- Force balance calibration
- Wind tunnel testing
- Data reduction and uncertainty analysis
- Comparison with real flight data

The results confirmed that even at reduced Reynolds numbers, **wind tunnel testing captures the dominant aerodynamic trends** governing Space Shuttle approach and landing performance.

## Tools and Techniques
- Low-speed wind tunnel testing
- Force balance calibration
- Aerodynamic coefficient calculation
- MATLAB data analysis and plotting
- Experimental uncertainty analysis
