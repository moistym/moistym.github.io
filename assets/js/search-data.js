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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
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
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
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
