---
layout: page
title: Finite Element Structural Analysis Using Simcenter Femap with NASTRAN
description: Static structural analysis of beam and rod elements with validation against analytical solutions
img: assets/img/fea_cover.jpg
importance: 9
---

## Overview
This project applied **finite element analysis (FEA)** using **Simcenter Femap with NASTRAN** to model and analyze fundamental aerospace structural problems. The objective was to validate numerical solutions against **theoretical hand calculations**, while developing proficiency in structural modeling, meshing, boundary condition definition, and post-processing of FEA results.

All analyses were linear static cases and focused on understanding load paths, deflection behavior, stress distributions, and reaction forces.

## Model Definition
Structural models were constructed using **beam and rod elements**, with geometry and boundary conditions chosen to replicate classic textbook problems.

Key setup features included:

- **Material:** isotropic aluminum  
  - Young’s modulus: 10,000,000  
  - Poisson’s ratio: 0.3  
- **Element types:** rod and beam elements  
- **Cross-section:** circular beam properties defined analytically  
- **Boundary conditions:** fixed constraints at reference nodes  
- **Load cases:** applied forces and moments distributed along the beam  

The finite element mesh was generated to balance numerical accuracy with computational efficiency.

## Solution and Outputs
NASTRAN was used to compute:

- Nodal translations and rotations  
- Reaction forces and constraint moments  
- Internal beam forces and bending moments  
- Combined stress at beam end sections

## Validation Against Theory
Numerical results were compared directly with analytical solutions derived from classical beam theory. Tabulated results showed close agreement between theoretical and FEA predictions.

- Nodal displacements matched hand calculations within small percentage error
- Reaction forces and moments satisfied static equilibrium
- Stress distributions followed expected bending profiles

These comparisons confirmed the correctness of the finite element formulation and boundary condition implementation.

## Key Results
- Accurate prediction of **deflections and rotations** using beam elements  
- Correct capture of **reaction forces and constraint moments**  
- Physically consistent **stress and bending moment distributions**  
- Low percentage error relative to analytical solutions  

## Takeaways
This project demonstrated how finite element methods efficiently solve structural mechanics problems that become cumbersome or impractical with purely analytical approaches. It reinforced the importance of proper model setup, element selection, and validation against theory when applying FEA to aerospace structures.

## Tools and Techniques
- Simcenter Femap
- NASTRAN (linear static analysis)
- Beam and rod finite elements
- Structural mechanics and beam theory
- Post-processing of displacement, stress, and force results

## Documentation
<iframe 
  src="/assets/pdf/FEA.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
