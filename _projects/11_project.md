---
layout: page
title: ESA SPARK 2026 – Spacecraft Detection and Segmentation
description: Deep learning pipeline for spacecraft classification and semantic segmentation in synthetic orbital imagery
img: assets/img/spark_stream1_preview.png
importance: 11
---

## Overview

This project was completed as part of the **European Space Agency (ESA) SPARK 2026 AI Challenge – Stream 1**, which focuses on **spacecraft detection and semantic segmentation** from synthetic orbital imagery.

The objective of the competition is to develop a machine learning model capable of:

- **Classifying spacecraft type**
- **Detecting spacecraft location via bounding boxes**
- **Segmenting spacecraft body and solar panels**

These tasks must be solved simultaneously while maintaining low computational cost, since the challenge evaluates models on a **combined metric including accuracy, FLOPs, and parameter count**.

To address this problem, I developed a **multi-task computer vision pipeline** trained on thousands of simulated space scenes containing spacecraft in diverse orientations, lighting conditions, and backgrounds.

## Dataset and Scene Complexity

The dataset contains **synthetic orbital imagery** of several spacecraft types rendered under a wide range of viewing conditions. Scenes include:

- Variable spacecraft orientation
- Earth limb and planetary backgrounds
- Deep-space star fields
- Sun glare and lens flare
- Partial occlusions and extreme lighting

Each image includes annotations for:

- **Class label**
- **Bounding box**
- **Body segmentation mask**
- **Solar panel segmentation mask**

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/spark_stream1_preview.png" title="Sample spacecraft detection outputs" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Examples of spacecraft detection results. Red boxes indicate predicted bounding boxes and spacecraft labels across several orbital scenes.
</div>

## Model Architecture

The solution was implemented using a **deep convolutional neural network trained for multi-task learning**. The model predicts spacecraft class, bounding box location, and segmentation masks in a single forward pass.

The pipeline includes:

- Backbone feature extractor for spatial feature learning
- Detection head for bounding box regression and classification
- Segmentation heads for spacecraft body and solar panels

Training was performed using **GPU acceleration on Kaggle using a P100 GPU**, allowing efficient experimentation with architecture and hyperparameters.

## Segmentation Output

In addition to detection, the model predicts detailed segmentation masks that distinguish between **spacecraft body structures and solar panels**.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/spark_stream1_2.png" title="Segmentation predictions for spacecraft components" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Predicted segmentation masks for spacecraft components. Red overlays represent predicted spacecraft structures used for evaluation in the challenge.
</div>

## Validation Performance

During validation, the model achieved strong performance across the three primary evaluation tasks:

- **Classification Accuracy:** 93.98%  
- **Bounding Box IoU:** 0.927  
- **Body Segmentation IoU:** 0.497  
- **Solar Panel Segmentation IoU:** 0.021  

The bounding box performance demonstrates reliable spacecraft localization across varying scene conditions. Segmentation performance shows clear body identification but remains challenging for thin solar panel structures, which often occupy only a small fraction of the image.

## Key Capabilities

- Multi-task spacecraft **classification, detection, and segmentation**
- Robust detection across **complex orbital backgrounds**
- Training on **synthetic space environment datasets**
- GPU-accelerated training using **Kaggle P100 hardware**
- Model design optimized for **accuracy vs computational cost tradeoff**

## Challenges

Several factors make this task particularly difficult:

- **Extreme scale variation** between spacecraft and scene background
- **Thin solar panel structures** that are difficult for segmentation models to capture
- **Lighting variation and sun glare**
- **Spacecraft orientation changes** across all three axes

These conditions require models to learn strong spatial and geometric features while remaining computationally efficient.

## Future Work

Potential improvements to this system include:

- Higher-resolution segmentation heads for thin structures
- Attention mechanisms for panel detection
- Domain adaptation between synthetic and real imagery
- Edge deployment optimization for onboard spacecraft perception systems

## Takeaways

This project demonstrates how modern computer vision techniques can be applied to **space situational awareness and autonomous spacecraft perception**.

Accurate spacecraft detection and segmentation are key capabilities for:

- On-orbit inspection
- Autonomous rendezvous and proximity operations
- Space traffic monitoring
- Satellite servicing and debris tracking

The work highlights both the promise and the challenges of deploying machine learning models in **space-domain applications with limited compute resources**.

## Tools and Techniques

- Python
- PyTorch
- Deep learning for computer vision
- Semantic segmentation
- Object detection
- GPU training (Kaggle P100)
- Synthetic dataset training
