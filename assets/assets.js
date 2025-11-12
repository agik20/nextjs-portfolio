import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import moon_icon from './moon_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import anaconda from './anaconda.png';
import github from './github.png';
import jupyter from './jupyter.png';
import docker from './docker.png';
import tableau from './tableau.png';
import tensorflow from './tensorflow.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    moon_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark, 
    anaconda,
    github,
    jupyter,
    docker,
    tensorflow,
    tableau
};

export const workData = [
  {
    title: 'Real-Time Detection of Cheating Activities in Written Exams Based on Deep Learning',
    slug: 'cheating-detection-yolov8',
    description: 'Aug 2024 - Jul 2025',
    category: 'Computer Vision & AI',
    status: 'Completed',
    bgImage: '/work-1.png',
    link: 'https://github.com/agik20/Exam-Cheating',
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch', 'Jetson Orin Nano', 'Computer Vision', 'Pose Estimation', 'Edge Computing'],
    features: [
      'YOLOv8-based model for object and pose detection in real-time exam monitoring',
      'Edge deployment on Jetson Orin Nano with web-based dashboard',
      'Automatic alert system with visual evidence and activity logging',
      'Supports multiple cheating categories including smartphone use and peer interaction'
    ],
    achievements: [
      'Achieved 96% pose estimation accuracy and 98% object detection precision',
      'Operated at 8–9 FPS with 2.9 s average latency per detection',
      'Reduced manual supervision effort by 60%',
      'Integrated dashboard for live proctoring and evidence review'
    ],
    content: `
## Overview
A deep learning–based real-time proctoring system that detects cheating activities during written exams. Built using YOLOv8 for both object detection and pose estimation, the system identifies suspicious behaviors like smartphone use or interactions between students.

## Highlights
- Designed for deployment on **Jetson Orin Nano** with 1080p camera input.
- Processes live video streams with **low-latency inference**.
- Delivers automated evidence capture with timestamps and classification labels.
- Developed to assist academic integrity through intelligent automation.

## Impact
Enabled educational institutions to maintain fair and efficient exam supervision while demonstrating scalable AI integration in real-time environments.
    `
  },
  {
    title: 'Criminal Suspect Localization Using CCTV-Based Face Recognition and Object Detection',
    slug: 'criminal-localization-cctv',
    description: 'Aug 2025 - Aug 2025',
    category: 'Surveillance & Security AI',
    status: 'Completed',
    bgImage: '/work-2.png',
    link: 'https://github.com/agik20/criminal-suspect-localization',
    technologies: ['YOLOv10', 'FaceNet', 'SVM', 'OpenCV', 'Python', 'TensorFlow', 'CCTV Integration', 'Web Dashboard'],
    features: [
      'Real-time face detection using YOLOv10s optimized for CCTV environments',
      'High-accuracy face recognition with FaceNet and SVM classification',
      'Mock database for suspect identity matching via simulated NIK input',
      'Web interface for live monitoring, history tracking, and suspect search'
    ],
    achievements: [
      'Achieved 100% accuracy, precision, and recall across all classes',
      'Seamless operation on both CPU and GPU environments',
      'Fully integrated front-end dashboard for law enforcement simulation',
      'Demonstrated strong potential for intelligent video surveillance systems'
    ],
    content: `
## Overview
A computer vision system for automatic suspect localization through CCTV feeds using **YOLOv10** for detection and **FaceNet + SVM** for recognition. Built to support law enforcement with automated, accurate identity tracking.

## Highlights
- Detects and classifies faces in real-time from CCTV streams.
- Provides match results and visual logs through an interactive web dashboard.
- Uses a simulated NIK-based database for demonstration without using real data.

## Impact
Streamlines surveillance operations by automating suspect recognition and reducing manual monitoring time, showcasing the potential of AI-assisted security infrastructure.
    `
  },
  {
    title: 'UI/UX Portfolio Design',
    slug: 'uiux-portfolio-design',
    description: 'Aug 2025 - Sep 2025',
    category: 'Web Development & Design',
    status: 'Completed',
    bgImage: '/work-4.png',
    link: 'https://github.com/agik20/nextjs-portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'SEO Optimization'],
    features: [
      'Fully responsive personal portfolio built with Next.js and Tailwind CSS',
      'Dark/light mode with smooth animation transitions using Framer Motion',
      'SEO-optimized structure for performance and visibility',
      'Modular, maintainable codebase designed for scalability'
    ],
    achievements: [
      'Deployed live at 98% Lighthouse performance score',
      'Achieved WCAG 2.1 accessibility compliance',
      'Responsive across all devices and screen sizes',
      'Showcases projects, skills, and experience interactively'
    ],
    content: `
## Overview
A personal portfolio website developed to present my technical projects and skills in a visually engaging way. Built using **Next.js 14**, it emphasizes performance, accessibility, and smooth user experience.

## Highlights
- Integrated **dark/light theme toggle** with custom animations.
- Structured content for **SEO optimization and fast load times**.
- Implemented responsive layouts ensuring consistency across devices.
- Deployed seamlessly to **Vercel** for global accessibility.

## Impact
Serves as my professional digital presence, showcasing AI, data science, and engineering projects through a clean and modern interface.
    `
  },
  {
  title: 'California Housing Prices – Machine Learning Project',
  slug: 'california-housing-prices',
  description: 'Aug 2025 - Present',
  category: 'Data Science & Machine Learning',
  status: 'Completed',
  bgImage: '/work-3.png',
  link: 'https://github.com/agik20/californiahousinprice',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Flask', 'Docker', 'Data Visualization'],
  features: [
    'End-to-end ML pipeline from EDA to web app deployment',
    'Comprehensive data preprocessing and feature engineering',
    'Regression modeling with Random Forest and XGBoost',
    'Interactive Flask app for real-time housing price prediction',
    'Dockerized environment for scalable deployment'
  ],
  achievements: [
    'Achieved R² score of 0.83 using XGBoost',
    'Reduced MAE by 30% compared to baseline model',
    'Developed fully functional Flask web interface for predictions',
    'Visualized key housing trends and geographic correlations'
  ],
  content: `
## Overview
A full-cycle machine learning project focused on predicting **California housing prices** using census data. This project demonstrates the application of advanced regression models, feature engineering, and data visualization for real-world predictive analytics.

## Key Components
- **Exploratory Data Analysis**: Detailed statistical and spatial exploration of housing attributes.
- **Feature Engineering**: Created ratio-based features such as \`rooms_per_household\` and \`bedrooms_per_room\` to improve model performance.
- **Modeling**: Implemented Linear Regression, Random Forest, and XGBoost with hyperparameter optimization via GridSearchCV.
- **Deployment**: Packaged into a **Flask web application** with Docker support for scalable inference.

## Results
| Model | MAE | RMSE | R² Score |
|--------|------|-------|----------|
| Linear Regression | 48,660 | 67,305 | 0.67 |
| Random Forest | 32,187 | 49,243 | 0.82 |
| XGBoost | 31,827 | 48,125 | 0.83 |

## Insights
- **Median income** shows the highest correlation with housing prices (≈0.69).
- **Coastal proximity** strongly increases property value.
- **Feature engineering** significantly improved prediction accuracy.
- Random Forest and XGBoost effectively captured non-linear relationships between socio-economic and geographic factors.

## Impact
Showcases strong proficiency in machine learning pipeline design, from **data acquisition to model deployment**, and demonstrates the capability to extract actionable insights from real-world datasets through **statistical rigor and automation**.
  `
},

];


export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Core Data & Analytics Skills', 
    description: 'Proficient in data wrangling, analysis, and visualization to extract actionable insights.',
    professionalDetails: {
      businessValue: "Transforms raw datasets into actionable intelligence that supports data-driven decision-making across organizational levels.",
      collaboration: "Collaborates with analysts, business units, and engineers to define data KPIs, improve reporting, and enhance analytic workflows.",
      keyAchievements: [
        "Delivered insight reports that improved decision accuracy by 30%",
        "Built interactive dashboards enabling faster business insights",
        "Streamlined data cleaning pipeline reducing manual prep by 50%"
      ],
      toolsTechnologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Tableau", "SQL", "Jupyter Notebook"]
    }
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Machine Learning & AI', 
    description: 'Experienced in building predictive models and deploying intelligent systems for automation and decision support.',
    professionalDetails: {
      businessValue: "Leverages ML and deep learning to automate complex decision-making processes and uncover predictive patterns in data.",
      collaboration: "Works with domain experts and data engineers to design scalable AI pipelines and ensure deployment-readiness of models.",
      keyAchievements: [
        "Developed YOLO-based model achieving 96% accuracy in real-time detection",
        "Optimized ML models reducing inference time by 40%",
        "Deployed end-to-end ML system with continuous retraining pipeline"
      ],
      toolsTechnologies: ["TensorFlow", "PyTorch", "YOLOv8", "Scikit-learn", "XGBoost", "OpenCV", "Jetson Orin Nano"]
    }
  },
  { 
    icon: assets.ui_icon, 
    title: 'Programming & Tools', 
    description: 'Strong foundation in software engineering, scripting, and collaborative version control.',
    professionalDetails: {
      businessValue: "Ensures efficient, maintainable, and scalable codebases that enhance development velocity and system reliability.",
      collaboration: "Adopts best practices in Git-based collaboration, CI/CD, and documentation for reproducible results and team consistency.",
      keyAchievements: [
        "Built modular codebases reused across multiple projects",
        "Reduced deployment friction using Dockerized workflows",
        "Implemented CI pipelines improving release stability by 25%"
      ],
      toolsTechnologies: ["Python", "Git", "GitHub", "VS Code", "Docker", "Linux", "Bash"]
    }
  },
  { 
    icon: assets.graphics_icon, 
    title: 'Data Engineering & MLOps', 
    description: 'Designs and maintains robust pipelines for large-scale data processing and model deployment.',
    professionalDetails: {
      businessValue: "Bridges ML research with production by establishing reliable, automated data and model pipelines.",
      collaboration: "Works with backend engineers and cloud specialists to orchestrate scalable model deployment on modern infrastructure.",
      keyAchievements: [
        "Implemented Airflow-based data pipelines reducing latency by 35%",
        "Deployed containerized models with monitoring and logging support",
        "Automated dataset versioning for reproducibility across projects"
      ],
      toolsTechnologies: ["Docker", "Airflow", "Kubernetes", "AWS", "Flask", "FastAPI", "GitHub Actions"]
    }
  },
];

export const toolsData = [
    assets.vscode, assets.jupyter, assets.git, assets.github, assets.anaconda, assets.docker, assets.tableau, assets.tensorflow
];

export const currentYear = new Date().getFullYear()

export const socialLinks = [
{
    name: 'Instagram',
    url: 'https://www.instagram.com/ar.giii',
    icon: assets.instagram
},
{
    name: 'Github',
    url: 'https://github.com/agik20',
    icon: assets.github
},
{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ardutra-agi-ginting-56216b316',
    icon: assets.linkedin
}
];