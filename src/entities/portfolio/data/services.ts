import type { ServiceCapability } from "../types";
import type { ServiceIconKey } from "../asset-keys";

export type ServiceCapabilitySeed = Omit<ServiceCapability, "icon"> & {
  iconKey: ServiceIconKey;
};

export const serviceCapabilityData: ServiceCapabilitySeed[] = [
  {
    iconKey: "web_icon",
    title: "Core Data & Analytics Skills",
    description:
      "Proficient in data wrangling, analysis, and visualization to extract actionable insights.",
    professionalDetails: {
      businessValue:
        "Transforms raw datasets into actionable intelligence that supports data-driven decision-making across organizational levels.",
      collaboration:
        "Collaborates with analysts, business units, and engineers to define data KPIs, improve reporting, and enhance analytic workflows.",
      keyAchievements: [
        "Delivered insight reports that improved decision accuracy by 30%",
        "Built interactive dashboards enabling faster business insights",
        "Streamlined data cleaning pipeline reducing manual prep by 50%",
      ],
      toolsTechnologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Tableau", "SQL"],
    },
  },
  {
    iconKey: "mobile_icon",
    title: "Machine Learning & AI",
    description:
      "Experienced in building predictive models and deploying intelligent systems for automation and decision support.",
    professionalDetails: {
      businessValue:
        "Leverages ML and deep learning to automate complex decision-making processes and uncover predictive patterns in data.",
      collaboration:
        "Works with domain experts and data engineers to design scalable AI pipelines and ensure deployment-readiness of models.",
      keyAchievements: [
        "Developed YOLO-based model achieving 96% accuracy in real-time detection",
        "Optimized ML models reducing inference time by 40%",
        "Deployed end-to-end ML system with continuous retraining pipeline",
      ],
      toolsTechnologies: ["TensorFlow", "PyTorch", "YOLOv8", "Scikit-learn", "XGBoost", "OpenCV"],
    },
  },
  {
    iconKey: "ui_icon",
    title: "Programming & Tools",
    description: "Strong foundation in software engineering, scripting, and collaborative version control.",
    professionalDetails: {
      businessValue:
        "Ensures efficient, maintainable, and scalable codebases that enhance development velocity and system reliability.",
      collaboration:
        "Adopts best practices in Git-based collaboration, CI/CD, and documentation for reproducible results and team consistency.",
      keyAchievements: [
        "Built modular codebases reused across multiple projects",
        "Reduced deployment friction using Dockerized workflows",
        "Implemented CI pipelines improving release stability by 25%",
      ],
      toolsTechnologies: ["Python", "Git", "GitHub", "VS Code", "Docker", "Linux", "Bash"],
    },
  },
  {
    iconKey: "graphics_icon",
    title: "Data Engineering & MLOps",
    description: "Designs and maintains robust pipelines for large-scale data processing and model deployment.",
    professionalDetails: {
      businessValue:
        "Bridges ML research with production by establishing reliable, automated data and model pipelines.",
      collaboration:
        "Works with backend engineers and cloud specialists to orchestrate scalable model deployment on modern infrastructure.",
      keyAchievements: [
        "Implemented Airflow-based data pipelines reducing latency by 35%",
        "Deployed containerized models with monitoring and logging support",
        "Automated dataset versioning for reproducibility across projects",
      ],
      toolsTechnologies: ["Docker", "Airflow", "Kubernetes", "AWS", "Flask", "FastAPI"],
    },
  },
];
