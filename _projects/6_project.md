---
layout: page
title: AI-Driven Collision Avoidance for Crowded Orbital Environments
description: Artificial intelligence methods for conjunction screening, uncertainty modeling, and autonomous maneuver planning in LEO
img: assets/img/ai_collision_cover.jpg
importance: 10
---

## Background
The risk of in-space collisions has grown due to the increasing number of active satellites and orbital debris in low Earth orbit. Thousands of monitored objects, and many more untracked fragments, raise the probability of cascading collision outcomes associated with the Kessler syndrome.

Collision avoidance, often referred to as conjunction analysis, includes predicting close approaches, estimating collision likelihood, and planning avoidance maneuvers. Historically, this process has relied on orbit propagation models such as SGP4, ground-based sensors such as radar and telescopes, and human operators to decide whether to execute avoidance maneuvers.

These manual processes are strained by rising conjunction alerts per satellite, which is amplified by megaconstellations. This drives the need for intelligent and automated collision avoidance systems. Recent AI advances show promise for improving space situational awareness, especially collision avoidance and orbit prediction.

## Analysis of Research Readings
Recent work in AI-based orbital collision avoidance spans multiple approaches. Ten notable studies are summarized below.

- **Machine Learning Competition:** ESA sponsored a challenge using CDM datasets to predict final collision risk. Ensemble models slightly outperformed a physics-based baseline, and results emphasized the role of feature engineering.
- **Conjunction Screening:** Binary classifiers using neural networks and tree ensembles reduced computational cost and improved conjunction detection compared to classical filters.
- **Event Pruning:** PCA and clustering filtered low-risk events, reducing operator burden by up to 70% while preserving safety.
- **Decision Support:** Combined ML with Dempster–Shafer theory to classify events and recommend maneuvers under uncertainty.
- **Bayesian RNNs:** Used RNNs with uncertainty estimation to predict collision probability from CDM time series.
- **Graph Neural Networks:** Modeled satellite interactions as dynamic links and improved conjunction prediction accuracy.
- **Reinforcement Learning:** Developed a DRQN-based system to autonomously trigger fuel-efficient collision avoidance maneuvers in simulation.
- **Low-Thrust RL:** Demonstrated PPO and DQN agents for low-thrust maneuvering and re-orbiting.
- **Multi-Debris Avoidance:** Used genetic algorithms to optimize maneuvers under simultaneous threats and constraints.
- **Literature Review:** Tracked progress from classifiers to ensemble deep models, and highlighted explainability and hybrid AI-physics modeling.

## Potential Development Directions
Future work should focus on the following.

- **On-orbit validation:** Many models rely on synthetic or historical data. Mission demonstrations, including efforts like ESA’s CREAM project, are needed to establish real-world reliability.
- **Improved orbit prediction:** Ephemeris imperfections motivate hybrid approaches that combine machine learning with higher-fidelity propagation.
- **Multi-agent coordination:** Autonomous strategies for large constellations remain underexplored and are important for scalability.
- **Explainability:** Interpretable methods such as SHAP values and saliency maps support operator trust and acceptance.
- **Policy and safety integration:** AI-enabled autonomy requires fail-safes, overrides, and alignment with international space traffic norms.

## References
[1] C. Uriot et al., “ESA Collision Avoidance Challenge: Predicting Final Collision Risk,” *Acta Astronautica*, vol. 198, pp. 121–131, 2022.  
[2] D. Stevenson et al., “Machine Learning Methods for Conjunction Screening in Space Traffic Management,” *IEEE Trans. Aerospace Electron. Syst.*, vol. 59, no. 1, pp. 78–90, Jan. 2023.  
[3] T. Henry et al., “Clustering Approaches for Conjunction Event Pruning,” in *Proc. AIAA Scitech*, Jan. 2023.  
[4] J. Sánchez and M. Vasile, “Evidence-Theoretic Framework for Collision Avoidance Under Uncertainty,” *Journal of Guidance, Control, and Dynamics*, vol. 45, no. 4, pp. 764–777, 2022.  
[5] A. Pinto et al., “Bayesian RNNs for Conjunction Event Risk Forecasting,” *Advances in Space Research*, vol. 65, no. 3, pp. 902–912, 2020.  
[6] Y. Li et al., “Graph Neural Networks for Orbital Conjunction Prediction,” arXiv:2303.01045 [cs.LG], 2023.  
[7] J. Bourriez et al., “Deep Reinforcement Learning for Autonomous CAM Planning,” *Acta Astronautica*, vol. 207, pp. 77–89, 2023.  
[8] D. Solomon and T. Păduraru, “Optimized Low-Thrust Collision Avoidance with Deep RL,” *IEEE Aerospace Conference*, 2025.
[9] A. Choumos et al., “AI Applications in Space Traffic Management: A Review,” *Journal of Space Safety Engineering*, vol. 11, no. 1, pp. 1–15, 2024.  
[10] H. D. Curtis, *Orbital Mechanics for Engineering Students*, Butterworth-Heinemann, 2020.

## Documentation
<iframe 
  src="/assets/pdf/AI_Collision_Avoidance.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
