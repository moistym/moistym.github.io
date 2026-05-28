---
layout: page
title: Vision-Generative Assurance for Spacecraft Rendezvous and Proximity Operations
description: AIAA SciTech 2027 research project on assurance-centered generative autonomy for spacecraft RPO.
img: assets/img/vision_generative_rpo.png
importance: 15
---

## Overview

Rendezvous and proximity operations are safety-critical because a spacecraft must reason about target geometry, relative motion, keep-out zones, sensor uncertainty, lighting conditions, and abort conditions during close approach. A purely learned controller is difficult to justify in this environment because mission rules must remain explicit, auditable, and enforceable.

This project explores a vision-generative autonomy architecture for spacecraft rendezvous and proximity operations, with a focus on keeping learned systems bounded by deterministic mission safety rules. The goal is not to let an AI model directly command a spacecraft. Instead, the system uses perception to estimate the scene, binds mission rules into machine-checkable constraints, generates traceable mission procedures, and verifies every candidate action through a deterministic safety shield before execution.

The work was developed as an AIAA SciTech 2027 research project. It combines spacecraft computer vision, generative procedure planning, offline reinforcement learning verification, and safety-constrained autonomy for RPO scenarios.

## System Architecture

The architecture is divided into two paths:

### Runtime Path

The runtime path converts live spacecraft observations into safe, executable procedures:

1. **Sensors** collect visual observations of the target spacecraft.
2. **VLM perception** converts images into structured scene state and uncertainty estimates.
3. **Mission rules and constraints** are bound into machine-checkable logic.
4. **Procedure generation** proposes traceable step-by-step mission actions.
5. **Safety shield** checks each candidate action against deterministic constraints.
6. **GNC execution** receives only verified actions.

### Offline Assurance Path

The offline path supports verification before flight use:

1. Simulation and digital twin testing evaluate candidate procedures.
2. Monte Carlo stress testing exposes weak cases under uncertainty.
3. Reinforcement learning is used only as an offline verifier and repair loop.
4. Version control, V&V, and approval gates determine what can enter the runtime system.

No online learning or direct reinforcement-learning-to-actuator path is allowed.

## Project Diagram

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/vision_generative_rpo.png" title="Vision-generative assurance architecture for spacecraft RPO" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Figure:** Vision-generative assurance architecture for spacecraft rendezvous and proximity operations. The runtime path converts sensor observations into structured scene state and uncertainty estimates, binds mission rules into constraints, generates traceable procedures, and verifies candidate actions through a deterministic safety shield. The offline assurance path uses simulation, Monte Carlo testing, and RL-based verifier/repair loops before version-controlled approval.

## Perception Foundation

To support the architecture, I developed a spacecraft perception foundation using the ESA SPARK 2026 Stream 1 dataset. The perception model was designed as a multi-task spacecraft vision system capable of predicting:

- Spacecraft class
- Bounding box location
- Spacecraft body segmentation mask
- Solar panel segmentation mask

The baseline model used an EfficientNet-B0 encoder with task-specific heads for classification, bounding box regression, and segmentation. The model was trained on synthetic orbital imagery with varying spacecraft classes, lighting, orientation, scale, and background conditions.

## Dataset and Preprocessing

The dataset included synthetic spacecraft imagery across 10 spacecraft classes, with labels for classification, bounding boxes, and segmentation masks. A major preprocessing challenge was that the masks were stored as JPEG images, which introduced compression artifacts and thousands of unique pixel values. Exact RGB thresholding was unreliable, so I developed a grayscale-based extraction method to separate foreground, spacecraft body, and solar-panel regions.

This preprocessing step was necessary to produce usable segmentation targets and improve the body-mask training results.

## Modeling Approach

Two main experiments were performed:

### Supervised Multi-Task Baseline

The baseline model was trained directly on the supervised SPARK tasks. It used a shared visual encoder and separate heads for classification, localization, and segmentation.

The best supervised baseline achieved:

| Metric | Result |
|---|---:|
| Classification Accuracy | 0.9843 |
| Bounding Box IoU | 0.9101 |
| Body Mask IoU | 0.7558 |
| Solar Panel Mask IoU | 0.2151 |
| Overall Score | 0.7163 |

### Pair-Based View-Transformation Pretraining

A second experiment used pair-based view-transformation pretraining. Two augmented views of the same spacecraft image were created using rotation, scale changes, translation, brightness and contrast changes, blur, and partial occlusion. The goal was to make the encoder more robust to viewpoint-like changes before supervised fine-tuning.

The pair-pretrained model improved classification accuracy slightly, but did not improve the overall multi-task validation score. This showed that same-image transformed-pair pretraining was not strongly aligned with the hardest downstream task: thin solar-panel segmentation.

## Key Results

The supervised baseline produced the best overall validation score. It performed strongly on spacecraft classification and bounding box localization, and reached usable body segmentation performance. Solar panel segmentation remained the primary technical bottleneck because panels are thin, low-pixel-occupancy structures that are sensitive to downsampling, lighting, and mask artifacts.

The final comparison was:

| Model | Class Acc. | BBox IoU | Body IoU | Panel IoU | Score |
|---|---:|---:|---:|---:|---:|
| Supervised Baseline | 0.9843 | 0.9101 | 0.7558 | 0.2151 | 0.7163 |
| Pair-Pretrained Fine-Tuned | 0.9912 | 0.9074 | 0.7483 | 0.2028 | 0.7124 |

## Assurance Concept

The central contribution of the project is the safety structure around learned autonomy. The system is intentionally conservative:

- The perception model estimates scene state but does not command the spacecraft.
- The generative model proposes procedures but does not modify mission rules.
- Reinforcement learning is used only offline for stress testing and repair.
- The deterministic safety shield remains the final authority before execution.
- An independent abort monitor can trigger HOLD, RETREAT, or ABORT.

This creates a path for using vision-generative models in spacecraft RPO without giving up the safety hierarchy required for flight-critical systems.

## Future Work

Future improvements include higher-resolution segmentation, stronger decoder architectures such as U-Net or FPN-style heads, better uncertainty estimation, and true multi-view synthetic spacecraft pretraining. The next step is to connect perception outputs to structured RPO state variables such as relative pose, keep-out margin, approach corridor status, visible appendages, and confidence flags.

Additional work will focus on constrained MLLM procedure generation and simulation-based RL stress testing, while keeping all execution authority inside deterministic safety logic.

## Report
You can view the full project report here:

<iframe 
  src="/assets/pdf/rpo_aiaa_scitech2027.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
