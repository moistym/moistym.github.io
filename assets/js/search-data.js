// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-curriculum-vitae",
          title: "curriculum vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-development-of-a-6-degrees-of-freedom-6dof-flight-dynamics-model-for-the-airbus-a320",
          title: 'Development of a 6 Degrees of Freedom (6DOF) Flight Dynamics Model for the...',
          description: "MATLAB-based rigid-body flight dynamics model capturing full translational and rotational aircraft motion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-esa-spark-2026-spacecraft-detection-and-segmentation",
          title: 'ESA SPARK 2026 – Spacecraft Detection and Segmentation',
          description: "Deep learning pipeline for spacecraft classification and semantic segmentation in synthetic orbital imagery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-orbitflex-cubesat-team",
          title: 'OrbitFlex CubeSat Team',
          description: "3U CubeSat optical SSA mission for GEO line-of-sight measurement collection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-navigating-enhanced-exploration-assistance-nexa",
          title: 'Navigating Enhanced Exploration Assistance (NEXA)',
          description: "Edge AI for autonomous drone security and real-time alerting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-light-intensity-measurement-amp-validation-of-radiative-laws",
          title: 'Light Intensity Measurement &amp;amp; Validation of Radiative Laws',
          description: "Experimental validation of the inverse-square law and Lambert’s cosine law using Arduino sensing and MATLAB analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-attitude-dynamics-and-control-of-a-rigid-spacecraft-in-leo",
          title: 'Attitude Dynamics and Control of a Rigid Spacecraft in LEO',
          description: "Quaternion simulation, gravity-gradient torque, and PD stabilization in MATLAB.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-mixture-ratio-sensitivity-of-a-hydrogen-oxygen-rocket-engine-using-nasa-cea",
          title: 'Mixture-Ratio Sensitivity of a Hydrogen–Oxygen Rocket Engine Using NASA CEA',
          description: "How Tc and Isp change with O/F for GH2/GO2 at 68 atm, restricted vs full equilibrium chemistry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-ai-driven-collision-avoidance-for-crowded-orbital-environments",
          title: 'AI-Driven Collision Avoidance for Crowded Orbital Environments',
          description: "Artificial intelligence methods for conjunction screening, uncertainty modeling, and autonomous maneuver planning in LEO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-experimental-boundary-layer-analysis-using-hot-wire-anemometry",
          title: 'Experimental Boundary Layer Analysis Using Hot-Wire Anemometry',
          description: "Turbulent flat-plate boundary layer characterization using hot-wire measurements, FFT analysis, and comparison with classical theory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-finite-element-structural-analysis-using-simcenter-femap-with-nastran",
          title: 'Finite Element Structural Analysis Using Simcenter Femap with NASTRAN',
          description: "Static structural analysis of beam and rod elements with validation against analytical solutions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-wind-tunnel-aerodynamic-testing-of-a-space-shuttle-orbiter-scale-model",
          title: 'Wind Tunnel Aerodynamic Testing of a Space Shuttle Orbiter Scale Model',
          description: "Low-speed wind tunnel testing of a 1:286 scale Space Shuttle Orbiter with lift and drag measurements across angle of attack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
