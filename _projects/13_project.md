---
layout: page
title: Space Debris Detection for Orbital Scene Awareness
description: YOLOv8-based object detection model for identifying debris and satellites in synthetic orbital imagery
img: assets/img/9.jpg
importance: 13
---

## Overview

This project focused on the development of a **space debris detection model** for **orbital scene understanding and space situational awareness (SSA)** applications.

The objective was to train a computer vision model capable of detecting two object classes in synthetic space imagery:

- **Debris**
- **Satellite**

This type of detection problem is important for future applications in:

- **Debris tracking**
- **Space traffic monitoring**
- **Autonomous spacecraft perception**
- **On-orbit inspection and servicing**
- **Collision risk awareness**

To address this problem, I trained a **YOLOv8-based object detection model** on thousands of labeled orbital images containing debris fragments and spacecraft under a wide range of viewing conditions.

## Dataset and Scene Complexity

The model was trained on a synthetic orbital imagery dataset containing:

- **6,479 total images**
- **42,686 total annotations**
- **2 object classes**
- **6.6 annotations per image on average**

Class distribution:

- **Debris:** 36,808 annotations
- **Satellite:** 5,878 annotations

The dataset was split into:

- **Train:** 4,701 images
- **Validation:** 1,181 images
- **Test:** 597 images

Scenes included a range of challenging orbital conditions, including:

- **Earth limb backgrounds**
- **Planetary views and cloud cover**
- **Deep-space star fields**
- **Small objects against dark backgrounds**
- **Large variation in object scale**
- **Cluttered scenes containing both spacecraft and multiple debris fragments**

All images were resized to **832 × 832** during preprocessing.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/9.jpg" title="Example debris and satellite detections" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Example inference results from the trained model. Blue boxes indicate detected debris objects, while cyan boxes indicate detected satellites.
</div>

## Model Architecture

The detection pipeline was implemented using **YOLOv8**, a one-stage deep learning architecture designed for fast and accurate object detection.

The trained model performs:

- **Object localization** through bounding box prediction
- **Class prediction** for debris and satellites
- **Confidence scoring** for each detected object

This approach is well suited for orbital detection tasks because it can identify small objects efficiently while maintaining strong performance across visually different scene types.

Based on the saved training weights, the final detector was built on a **YOLOv8m** backbone and trained using an image size of **832 pixels**.

## Inference Results

The trained model produced strong qualitative results across several scene types, including:

- **Dense debris fields near Earth**
- **Single satellite detections over planetary backgrounds**
- **Deep-space scenes with sparse visual features**
- **Mixed scenes containing both spacecraft and debris**

The model was able to detect both large spacecraft and smaller debris-like targets in the same frame, demonstrating useful behavior across a wide range of scales and backgrounds.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/space_debris_examples.png" title="Selected model outputs across multiple orbital scenes" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Selected detection outputs across different orbital scenarios, including Earth-limb views, star-field backgrounds, and cluttered multi-object scenes.
</div>

## Key Capabilities

- Detection of **debris and satellites** in orbital imagery
- Robust behavior across **Earth-background and deep-space scenes**
- Detection in both **single-object** and **multi-object cluttered scenes**
- Strong qualitative performance on **small object localization**
- Practical use of **deep learning for SSA-related perception tasks**

## Challenges

Several factors make orbital debris detection difficult:

- **Small target size** relative to the full image
- **Large scale variation** between scenes and objects
- **Low-contrast targets** against dark backgrounds
- **Cluttered scenes** with many nearby objects
- **Changing viewpoint and orientation** of spacecraft
- **Visually complex Earth backgrounds** that can distract detectors

These conditions require the model to learn both fine local features and broad scene context.

## Future Work

Potential next steps for this project include:

- Quantitative evaluation using full validation metrics such as **precision, recall, and mAP**
- Threshold tuning to reduce over-detection in dense debris scenes
- Class balancing improvements for the less frequent satellite class
- Domain adaptation from synthetic imagery to more realistic or flight-like imagery
- Deployment optimization for low-SWaP onboard vision systems

## Takeaways

This project demonstrates how modern object detection methods can be applied to **space-domain perception problems**, especially in the context of **space debris monitoring and orbital scene awareness**.

Reliable detection of debris and spacecraft is a foundational capability for future autonomous space systems. It supports safer operations in increasingly congested orbital environments and helps enable more advanced functions such as inspection, rendezvous support, and traffic awareness.

## Tools and Techniques

- Python
- Ultralytics YOLOv8
- Object detection
- Deep learning for computer vision
- Synthetic dataset training
- Orbital scene analysis
- Space situational awareness applications
