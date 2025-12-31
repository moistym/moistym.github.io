---
layout: page
title: Attitude Dynamics and Control of a Rigid Spacecraft in LEO
description: Quaternion simulation, gravity-gradient torque, and PD stabilization in MATLAB.
img: assets/img/attitude_pd_cover.jpg
importance: 4
category: work
---

## Overview
Quaternion-based MATLAB simulation of rigid-body attitude dynamics in a 400 km circular orbit, including gravity-gradient disturbance torque and a diagonal quaternion–rate PD controller.

## Scenarios Studied
- Stable spin about maximum inertia axis
- Intermediate-axis instability (Dzhanibekov)
- Passive gravity-gradient response
- Active stabilization with PD control

## Results
Control reduced attitude error to near zero within about 0.6 orbital periods with peak torques below 0.01 N·m.

## Documentation

<iframe 
  src="/assets/pdf/attitude_pd_leo.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
