import type { PortfolioProject } from "../types";

export const projectData: PortfolioProject[] = [
  {
    title: "Real-Time Detection of Cheating Activities in Written Exams Based on Deep Learning",
    slug: "cheating-detection-yolov8",
    description: "Aug 2024 - Jul 2025",
    category: "Computer Vision & AI",
    status: "Completed",
    bgImage: "/exam-cheating.png",
    link: "https://github.com/agik20/Exam-Cheating",
    technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Jetson Orin Nano"],
    features: [
      "Real-time object and pose detection for proctoring use cases",
      "Edge deployment with lightweight dashboard integration",
      "Automatic evidence capture and activity logging",
    ],
    achievements: [
      "Reached high detection performance with practical latency",
      "Reduced manual monitoring effort through automation",
    ],
  },
  {
    title: "Criminal Suspect Localization Using CCTV-Based Face Recognition and Object Detection",
    slug: "criminal-localization-cctv",
    description: "Aug 2025 - Aug 2025",
    category: "Surveillance & Security AI",
    status: "Completed",
    bgImage: "/face-recognition.png",
    link: "https://github.com/agik20/criminal-suspect-localization",
    technologies: ["YOLOv10", "FaceNet", "SVM", "OpenCV", "TensorFlow"],
    features: [
      "Real-time face detection in CCTV-like environments",
      "Identity matching workflow with simulated records",
      "Live dashboard for search and monitoring",
    ],
    achievements: [
      "Demonstrated consistent recognition performance",
      "Delivered CPU/GPU-ready implementation flow",
    ],
  },
  {
    title: "UI/UX Portfolio Design",
    slug: "uiux-portfolio-design",
    description: "Aug 2025 - Sep 2025",
    category: "Web Development & Design",
    status: "Completed",
    bgImage: "/uiux.png",
    link: "https://github.com/agik20/nextjs-portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive portfolio layout with modular section architecture",
      "Smooth UI interaction and visual transitions",
      "SEO-friendly page composition for discoverability",
    ],
    achievements: [
      "Maintained strong UX quality across screen sizes",
      "Improved maintainability through modularized structure",
    ],
  },
  {
    title: "California Housing Prices - Machine Learning Project",
    slug: "california-housing-prices",
    description: "Aug 2025 - Present",
    category: "Data Science & Machine Learning",
    status: "Completed",
    bgImage: "/work-3.png",
    link: "https://github.com/agik20/californiahousinprice",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
    features: [
      "End-to-end ML pipeline from EDA to deployment",
      "Regression model comparison and evaluation",
      "Interactive prediction interface for experimentation",
    ],
    achievements: [
      "Improved model quality over baseline approaches",
      "Packaged inference flow for reproducible deployment",
    ],
  },
];
