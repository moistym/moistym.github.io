---
layout: page
title: OrbitFlex CubeSat Team
description: 3U CubeSat optical SSA mission for GEO line-of-sight measurement collection.
img: assets/img/of1.png
importance: 2
---

## Overview
OrbitFlex is a 3U CubeSat mission to support optical space situational awareness of objects in the geostationary belt. The mission collects multi-image datasets and produces a mini-catalog with line-of-sight measurements in right ascension and declination.

## Role
Environmental and Test Engineer

## Responsibilities
- Developed end-to-end verification and validation planning for the 3U spacecraft, aligned with NASA GEVS test philosophy and requirements.
- Defined vibroacoustic and shock test approaches to validate structural integrity and functional performance.
- Supported contamination control by applying ISO Class 8 cleanroom practices during assembly and test.
- Implemented surface cleanliness controls aligned with MIL-STD-1246C.

## Thermal Analysis

A passive thermal control approach was developed for OrbitFlex to regulate spacecraft temperatures without relying on active thermal hardware. The design used a mixed surface-property strategy, where low-emissivity insulated faces reduced radiative heat loss and higher-emissivity coated faces provided controlled heat rejection.

The thermal hardware stack included MLI blankets, surface tuning tapes, AZ-93 white coating, Aeroglaze Z306 black coating, gap pads, RTV/epoxy, heat spreaders, battery pocket insulation, and PEEK/G10 isolation mounts. Together, these features gave the spacecraft several passive methods to shape heat flow, retain heat in colder conditions, and reject heat during warmer sunlit cases.

Thermal performance was evaluated in ANSYS Mechanical using solar heat flux, radiation-to-ambient boundary conditions, and internal volumetric heat generation. Both hot-case and cold-case simulations were used to check whether the passive regulation concept could maintain stable spacecraft temperatures across expected operating conditions.

### Hot-Case Analysis

The hot-case model used the mixed passive thermal control configuration with low-emissivity insulated faces, $\epsilon = 0.05$, and higher-emissivity heat-rejecting faces, $\epsilon = 0.80$. A solar heat flux of 500 W/m² was applied to represent a sunlit thermal loading condition.

The final hot-case solution produced a global spacecraft temperature range of 29.48°C to 37.37°C. This showed a moderate and stable sunlit thermal response, with the passive surface-property layout providing enough heat rejection to prevent excessive temperature rise.

<div class="row justify-content-center">
  <div class="col-10 col-md-8 col-lg-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/HOTCASE.png" title="Hot Case Analysis" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-9 col-md-7 col-lg-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/HOTCASETABLE.png" title="Hot-Case Pass/Fail Assessment" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### Cold-Case Analysis

The cold-case model used the same mixed passive thermal architecture as the hot case, but with reduced solar heating of 150 W/m² and lower internal dissipation to represent cold operational or survival conditions.

The final cold-case solution produced a global spacecraft temperature range of -16.95°C to -13.95°C. This showed that the spacecraft retained heat effectively and did not collapse toward unrealistic deep-space temperatures, supporting the feasibility of the passive-first thermal regulation approach.

<div class="row justify-content-center">
  <div class="col-10 col-md-8 col-lg-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/COLDCASE.png" title="Cold Case Analysis" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-9 col-md-7 col-lg-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/COLDCASETABLE.png" title="Cold-Case Pass/Fail Assessment​" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Concept of Operations

I also supported the development of the OrbitFlex Concept of Operations, which defines the spacecraft mission flow from pre-launch rehearsal through end-of-life shutdown. The ConOps lays out the major operational phases, including deployer launch, transfer to GEO, spacecraft separation, power-on, detumble and attitude stabilization, solar panel deployment, first ground contact, subsystem checkout, payload calibration, image collection, data downlink, and recurring health monitoring.

The operational sequence was built around a two-year mission timeline. After deployment and checkout, OrbitFlex enters a repeating science operations cycle where the spacecraft captures images, performs astrometric onboard processing, downlinks verified image data, and periodically clears onboard storage. Battery charging and subsystem health checks are included as recurring operational activities to maintain spacecraft readiness during normal mission operations.

The ConOps also defines the repeat cadence for key activities. Image collection and downlink operations repeat every two hours, battery charging repeats daily, and full subsystem health data collection and downlink repeats every two weeks. At the end of the mission, the spacecraft powers off, closes out operations, and archives mission data.

<div class="row justify-content-center">
  <div class="col-10 col-md-8 col-lg-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ConOps (2).png" title="OrbitFlex Concept of Operations timeline showing deployment, checkout, recurring science operations, health checks, and end-of-life closeout." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Gallery
<div class="row justify-content-center">
  <div class="col-10 col-md-8 col-lg-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/Orbitflex 2.png" title="Exploded view with component identifiers" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-10 col-md-8 col-lg-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/Orbitflex 3.png" title="Deployed configuration" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## References
1. Weston, S. V., Burkhard, C. D., Stupl, J. M., Ticknor, R. L., Yost, B. D., Austin, R. A., Galchenko, P., Newman, L. K., and Santos Soto, L., "State-of-the-Art Small Spacecraft Technology," NASA/TP–20250000142, National Aeronautics and Space Administration, 2025. https://www.nasa.gov/smallsat-institute/sst-soa
2. "Space-Based Imaging," Nüvü Camēras, 2026. https://www.nuvucameras.com/space-based-imaging-nuspace/
3. "Onboard Computer (OBC)," EnduroSat, Sep. 30, 2025. https://www.endurosat.com/products/onboard-computer-with-gnss/
4. "OBC-Polar: A High-Performance Onboard Computer for CubeSat Missions," CAVU Aerospace UK. https://cavuaerospace.uk/onboard-computers/obc-polar/
5. "Dara OBC – On-Board Computer," Satsearch. https://satsearch.co/products/alenspace-dara-obc
6. "25 Whr High Energy Density LiPo Battery Array," Satsearch. https://satsearch.co/products/exa-25-whr-high-energy-density-li-po-battery-array
7. "B14-M45 14V Modular SmallSat Battery," Satsearch. https://satsearch.co/products/ibeos-14v-modular-smallsat-battery
8. "50 Whr High Energy Density LiPo Battery Array," Satsearch. https://satsearch.co/products/exa-50-whr-high-energy-density-li-po-battery-array
9. "Hinges Nano+: CubeSat Sized Hinges for Reliable Deploy Operations," Satsearch, Dec. 3, 2025. https://satsearch.co/products/exa-hinges-nano-cubesat-sized-hinges-for-reliable-deploy-operations
10. "SM03 CubeSat Structure," Satsearch, Sep. 2, 2025. https://satsearch.co/products/npcspacemind-sm03-cubesat-structure
11. "IXM-SP150 Camera," Phase One Corporate, Sep. 25, 2025. https://www.phaseone.com/solutions/geospatial-solutions/components/ixm-sp150/
12. "LEO2MP Engineering Camera," Satsearch, Nov. 16, 2025. https://satsearch.co/products/infinity-avionics-leo2mp-engineering-camera
13. "Rod & Spacer Kit," Pumpkin, Inc. https://www.pumpkinspace.com/store/p33/Rod_%26_Spacer_Kit.html
14. Schaire, S. H., "Near Earth Network (NEN) Users' Guide," 453-NENUG, Rev. 5, 2020.
