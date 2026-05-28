---
layout: page
title: Parrot Mambo Quadcopter Control
description: Experimental dynamics and control project using MATLAB/Simulink to model, simulate, and implement attitude control on a Parrot Mambo quadcopter.
img: assets/img/Mambo-pic-9.jpg
importance: 8
---

## Overview
This project focused on modeling, simulating, and controlling the Parrot Mambo quadcopter as part of an experimental dynamics and control lab. The objective was to evaluate the quadcopter response using nonlinear and linear models, reduce the system to its attitude dynamics, derive roll and pitch transfer functions, and design a controller to improve stability and tracking performance.

The work showed that the open-loop system could not reliably track attitude commands on its own. A proportional-derivative controller was then designed and implemented in simulation, significantly reducing oscillations and improving the roll and pitch response.

## Role
Controls and Simulation Engineer

## Responsibilities
- Modeled the quadcopter attitude dynamics using MATLAB and Simulink.
- Compared nonlinear and linear airframe responses for roll and pitch tracking.
- Reduced the full model to attitude states and angular rates.
- Derived transfer functions for roll and pitch from the reduced state-space model.
- Designed and tuned a PD controller using a second-order system approximation.
- Compared simulation results with experimental flight test data from the physical drone.

## Technical Summary
The reduced attitude model was used to describe the roll and pitch dynamics of the quadcopter. Open-loop simulations showed poor tracking behavior, with noticeable oscillations and slow settling. After deriving the roll and pitch transfer functions, a PD controller was designed to improve the closed-loop response.

The controller reduced oscillations, improved damping, and helped the quadcopter track the commanded attitude inputs more closely. Experimental flight results were noisier than simulation due to IMU noise, estimation error, motor variability, and small external disturbances, but the drone was still able to maintain stable flight and follow the general reference behavior.

## Report
You can view the full project report here:

<iframe 
  src="/assets/pdf/Mambo_Parrot_Project.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
