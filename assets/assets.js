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
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch', 'Computer Vision', 'Pose Estimation', 'Real-time Processing'],
    features: [
      'Real-time object detection for prohibited items',
      'Pose estimation for unusual behavior detection',
      'Multi-object tracking in exam environments',
      'Automated alert system with timestamped evidence'
    ],
    achievements: [
      '76% accuracy for smartphone detection',
      '62-67% accuracy for normal pose classification',
      'Real-time processing at 30 FPS',
      'Reduced manual monitoring effort by 60%'
    ],
    content: `
## Project Overview
A comprehensive real-time exam monitoring system designed to automatically detect cheating behaviors using advanced computer vision techniques. This system helps educational institutions maintain academic integrity during examinations.

## Problem Statement
Manual monitoring of exams is resource-intensive and prone to human error. This solution provides automated, consistent surveillance capable of detecting subtle cheating behaviors that might be missed by human proctors.

## Technical Implementation
- **Object Detection**: YOLOv8 model trained on custom dataset of exam-related objects
- **Pose Estimation**: Real-time body pose analysis to detect unusual movements
- **Multi-camera Support**: Synchronized processing across multiple camera feeds
- **Alert System**: Immediate notifications with visual evidence for proctors

## Key Features
- Real-time video processing with low latency
- Support for multiple cheating behavior patterns
- Scalable architecture for large examination halls
- Privacy-preserving design (no facial recognition)
    `
  },
  {
    title: 'Criminal Suspect Localization Using CCTV-Based Face Recognition and Object Detection',
    slug: 'criminal-localization-cctv',
    description: 'Aug 2025 - Aug 2025',
    category: 'Surveillance & Security AI',
    status: 'Completed',
    bgImage: '/work-2.png',
    link: 'https://github.com/agik20/yolov10-facenet-surveillance',
    technologies: ['YOLOv10', 'FaceNet', 'Python', 'OpenCV', 'TensorFlow', 'Multi-camera Tracking', 'Face Recognition'],
    features: [
      'Real-time face recognition across CCTV network',
      'Multi-camera suspect tracking and synchronization',
      'Automated suspect database matching',
      'Location-based alert system'
    ],
    achievements: [
      '94% face recognition accuracy in controlled environments',
      'Real-time processing across 4+ camera feeds',
      'Reduced suspect identification time from hours to seconds',
      'Successfully integrated with existing CCTV infrastructure'
    ],
    content: `
## Project Overview
An intelligent surveillance system that integrates object detection and face recognition to automatically identify and track criminal suspects across CCTV networks in real-time.

## Solution Architecture
- **Detection Layer**: YOLOv10 for real-time object and face detection
- **Recognition Layer**: FaceNet for high-accuracy face embedding and matching
- **Tracking Layer**: Multi-camera synchronization and trajectory prediction
- **Alert Layer**: Instant notifications with suspect location and movement patterns

## Technical Highlights
- Optimized for low-light CCTV conditions
- Support for partial face recognition
- Scalable database for suspect records
- Privacy-compliant data handling
    `
  },
  {
    title: 'California Housing Prices – Machine Learning Mini Project',
    slug: 'california-housing-prices',
    description: 'Aug 2025 - Present',
    category: 'Data Science & Machine Learning',
    status: 'In Progress',
    bgImage: '/work-3.png',
    link: 'https://github.com/agik20/californiahousingprices',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter', 'Regression Models'],
    features: [
      'Comprehensive data preprocessing and cleaning',
      'Advanced feature engineering',
      'Multiple regression model comparison',
      'Interactive data visualization'
    ],
    achievements: [
      'Achieved R² score of 0.85 on test data',
      'Reduced MAE by 30% compared to baseline model',
      'Identified key housing price determinants',
      'Created interactive prediction dashboard'
    ],
    content: `
## Project Overview
A comprehensive machine learning project analyzing California housing prices to identify key market factors and build accurate price prediction models.

## Data Analysis
- **Dataset**: California Housing Prices from 1990 census
- **Features**: Median income, housing age, rooms, location, ocean proximity
- **Preprocessing**: Handling missing values, feature scaling, outlier detection

## Modeling Approach
- **Algorithms**: Linear Regression, Decision Trees, Random Forest, Gradient Boosting
- **Evaluation**: Cross-validation, MAE, R², RMSE metrics
- **Feature Importance**: Identification of key price determinants

## Insights
- Location and median income are strongest predictors
- Ocean proximity significantly impacts property values
- Non-linear relationships require advanced modeling techniques
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
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'UI/UX Principles'],
    features: [
      'Fully responsive design for all devices',
      'Dark/light mode toggle',
      'Smooth animations and transitions',
      'SEO optimized structure',
      'Fast loading with optimized images'
    ],
    achievements: [
      '98% Lighthouse performance score',
      'Fully accessible (WCAG 2.1 compliant)',
      'Mobile-first responsive design',
      'Reduced bounce rate by 40% compared to previous portfolio'
    ],
    content: `
## Project Overview
A modern, performant portfolio website showcasing my projects and skills with emphasis on user experience, accessibility, and visual design.

## Design Philosophy
- **User-Centered**: Intuitive navigation and clear information hierarchy
- **Performance**: Optimized loading times and smooth interactions
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Maintainability**: Clean, modular code structure for easy updates

## Technical Implementation
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS for consistent design system
- **Animations**: Framer Motion for smooth interactions
- **Deployment**: Vercel with CI/CD pipeline

## Features
- Project filtering and search functionality
- Contact form with validation
- Blog section for technical articles
- Analytics integration for user behavior tracking
    `
  },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Core Data & Analytics Skills', description: 'Skilled in extracting insights through statistical analysis and data-driven decision-making.', link: '' },
    { icon: assets.mobile_icon, title: 'Machine Learning & AI', description: 'Experienced in building, training, and optimizing predictive and deep learning models.', link: '' },
    { icon: assets.ui_icon, title: 'Programming & Tools', description: 'Proficient in Python, SQL, and Git with strong practices in clean, scalable coding.', link: '' },
    { icon: assets.graphics_icon, title: 'Data Engineering & MLOps', description: 'Capable of handling pipelines, deployment, and cloud-based workflows for production-ready AI.', link: '' },
]

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