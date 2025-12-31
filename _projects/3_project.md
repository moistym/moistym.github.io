---
layout: page
title: Light Intensity Measurement & Validation of Radiative Laws
description: Experimental validation of the inverse-square law and Lambert’s cosine law using Arduino sensing and MATLAB analysis.
img: assets/img/arduino_ldr_cover.jpg
importance: 3
---

## Overview

This project focused on experimentally measuring light intensity using an Arduino-based sensing platform to validate two fundamental radiative principles: the inverse-square law and Lambert’s cosine law. The system combined hardware interfacing, data acquisition, and numerical analysis to compare theoretical predictions against measured results under controlled conditions.

## Experimental Setup

An Arduino Uno was configured with a light-dependent resistor (LDR) in a voltage-divider circuit to measure illumination in analog-to-digital converter (ADC) units. The sensor output voltage varied with incident light intensity and was sampled through the Arduino’s A0 analog input.

Two experimental configurations were conducted:

- **Intensity vs. Distance:** Measurements taken from 1 ft to 20 ft with the sensor oriented normal to the light source.
- **Intensity vs. Angle:** Measurements collected from −90° to +90° at a fixed distance to study angular dependence.

Data was streamed over serial communication and post-processed in MATLAB.

### Data Analysis & Modeling

Measured light-intensity data was fit against the following theoretical models:

**Inverse-Square Law**
$$
I(r) = \frac{a}{r^2}
$$

**Lambert’s Cosine Law**
$$
I(\alpha) = b \cos(\alpha) + c
$$

Custom MATLAB scripts were developed to perform nonlinear curve fitting, compute residuals, and evaluate goodness of fit using the coefficient of determination (R²).

### Key Results

- **Lambert’s Cosine Law:** Strong agreement with experimental data, achieving **R² = 0.927**, confirming angular dependence of irradiance.
- **Inverse-Square Law:** Qualitative agreement observed, though deviations from the ideal \(1/r^2\) trend occurred due to ambient light interference, alignment sensitivity, and the non-point nature of the light source.

## Technical Contributions

- Designed and implemented an Arduino LDR sensing circuit
- Developed MATLAB models for curve fitting and validation
- Performed experimental uncertainty analysis and diagnostics
- Integrated hardware sensing with numerical modeling workflows

## Conclusion

The experiment successfully validated Lambert’s cosine law with high accuracy and demonstrated qualitative inverse-square behavior under real-world constraints. This project highlights practical challenges in experimental physics while reinforcing core radiative principles through hands-on instrumentation and data-driven analysis.

## Documentation

<iframe 
  src="/assets/pdf/arduino-ldr-report.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
