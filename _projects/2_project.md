---
layout: page
title: "NEXA: Edge AI Drone Surveillance System"
description: Real-Time Autonomous Perception on Embedded Hardware
img: assets/img/IMG_1429.jpeg
importance: 2
---

## Role
**Principal Investigators:** Azhari Abbas, Caleb Fakunle  
**Team Members:** Ryan Powell, Donovan Livingston  
**Faculty Advisor:** Dr. William MacKunis

## Overview
NEXA is an AI-powered surveillance system designed to enhance property monitoring through autonomous drones for passive threat detection and response. By combining onboard perception, embedded edge AI, and autonomous flight capabilities, the platform supports automated monitoring and instant alerts while reducing reliance on fixed cameras and cloud-based processing. This improves privacy, lowers latency, and expands area coverage for real-world surveillance tasks.

## Applications
- **Residential security:** mobile perimeter monitoring and real-time alerts
- **Agricultural monitoring:** livestock, wildlife, and anomaly detection across farmland
- **Search and rescue:** autonomous patrol and rapid target identification

## Hardware
- **Compute:** NVIDIA Jetson Orin NX 16GB
- **Flight Control:** CubePilot Orange Cube (ArduPilot via Mission Planner)
- **Sensing & Comms:**
  - Intel RealSense Depth Camera D455
  - CubePilot Here3+ CAN GNSS GPS Module
  - RF receiver + transmitter

## System Architecture
<div class="row justify-content-center">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/nexa_system_architecture.png" 
      title="NEXA End-to-End System Architecture" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>

The NEXA system operates through an end-to-end edge pipeline that integrates perception, classification, and autonomous response. Onboard sensing feeds into real-time object detection using YOLOv11 deployed on embedded hardware, followed by event interpretation and a decision layer that triggers autonomous responses and user alerts.

## Data & Training Pipeline
- **Model:** YOLOv11 with pretrained initialization
- **Datasets:** COCO, UAVDT, and VisDrone
- **Dataset size:** 100,000+ images
- **Classes:** person, vehicle, animal
- **Augmentations:** scaling, flipping, lighting variation
- **Training hardware:** NVIDIA T4 ×2

## Discussion
- Speed vs. accuracy remains a key tradeoff under edge compute constraints
- Small, high-altitude objects remain the most challenging to detect reliably
- Environmental variation can affect confidence and recall
- Edge deployment reduces reliance on fixed cameras and cloud processing, improving privacy, latency, and area coverage

## Limitations & Future Work
**Current limitations**
- Very small targets remain difficult to detect
- Extreme lighting and weather can reduce confidence
- Flight time constrains long-duration patrol coverage
- Dataset diversity can still be improved

**Next steps**
- Multi-drone coordination
- Infrared and thermal sensing integration
- Better low-light and adverse-weather evaluation
- Label-scarce update strategies in field trials
- Long-duration patrol and docking workflows

## References
- Nascimento, Renato G., et al., *Quadcopter Control Optimization through Machine Learning*, AIAA SciTech Forum, 2020.
- *Weather Constraints on Global Drone Flyability*, Scientific Reports.
- *How Artificial Intelligence Learns Through Machine Learning Algorithms*, Spiceworks.

## NEXA Drone
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/IMG_1429.jpeg" title="NEXA Drone" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Posters
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/nexa_spie_poster.png" title="SPIE Poster" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/nexa_ncur_2026_poster.png" title="NCUR 2026 Poster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
