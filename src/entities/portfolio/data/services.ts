import type { ServiceCapability } from "../types";
import type { ServiceIconKey } from "../asset-keys";

export type ServiceCapabilitySeed = Omit<ServiceCapability, "icon"> & {
  iconKey: ServiceIconKey;
};

export const serviceCapabilityData: ServiceCapabilitySeed[] = [
  {
    iconKey: "web_icon",
    title: "Data Science & Machine Learning",
    description:
      "End-to-end ML pipelines from exploratory data analysis through model training, evaluation, and production deployment.",
    professionalDetails: {
      businessValue:
        "Transforms raw datasets into predictive models that drive data-informed decisions — from housing price estimation to flight cost forecasting.",
      collaboration:
        "Works with data engineers and domain experts to define KPIs, validate model performance, and operationalize ML solutions in production.",
      keyAchievements: [
        "Built regression pipeline achieving R²=0.83 across 5 model comparisons (XGBoost, CatBoost, LightGBM)",
        "Developed feature engineering modules with 3x improvement over baseline predictions",
        "Containerized ML inference with Docker and Flask for reproducible deployment",
      ],
      toolsTechnologies: ["Python", "XGBoost", "CatBoost", "LightGBM", "scikit-learn", "pandas", "numpy", "Flask"],
    },
  },
  {
    iconKey: "mobile_icon",
    title: "Computer Vision & Deep Learning",
    description:
      "Real-time object detection, pose estimation, and activity recognition systems deployed on edge devices.",
    professionalDetails: {
      businessValue:
        "Enables automated visual intelligence for security, safety, and operational monitoring — reducing manual surveillance effort.",
      collaboration:
        "Partner with hardware and infrastructure teams to deploy CV models on edge devices (Jetson Orin Nano) with optimized inference pipelines.",
      keyAchievements: [
        "Recognized with Top 3 Favorite Thesis Award for real-time exam cheating detection system",
        "Achieved sub-3s latency on edge deployment with TensorRT-optimized YOLOv8 models",
        "Built complete data pipeline: acquisition → annotation → augmentation → training → inference",
      ],
      toolsTechnologies: ["YOLOv8", "PyTorch", "OpenCV", "ALBumentations", "TensorRT", "ultralytics", "FaceNet"],
    },
  },
  {
    iconKey: "ui_icon",
    title: "AI Engineering & RAG Systems",
    description:
      "Production-grade AI assistants combining LLMs, vector databases, and intelligent routing for enterprise workflows.",
    professionalDetails: {
      businessValue:
        "Bridges the gap between raw LLM capabilities and practical enterprise needs through RAG, classification, and contextual memory.",
      collaboration:
        "Integrates with IT operations teams to build assistants that reduce incident resolution time and improve CMDB query accuracy.",
      keyAchievements: [
        "Designed adaptive routing system with IP-pattern detection for deterministic IT infrastructure lookups",
        "Implemented zero-shot classification (BART-Large-MNLI) for 5-domain query categorization with 0.6+ confidence threshold",
        "Built production FastAPI service with CSRF protection, CORS hardening, and segregated logging",
      ],
      toolsTechnologies: ["FastAPI", "Groq API", "Qdrant", "sentence-transformers", "Transformers", "pydantic", "uvicorn"],
    },
  },
  {
    iconKey: "graphics_icon",
    title: "Full-stack Web Development",
    description:
      "Modern React-based applications with design systems, state management, and responsive UI components.",
    professionalDetails: {
      businessValue:
        "Delivers polished, accessible web applications with clean architecture that users enjoy interacting with daily.",
      collaboration:
        "Applies editorial design principles and component-driven development to create maintainable, scalable frontends.",
      keyAchievements: [
        "Architected feature-based Next.js portfolio with markdown-driven content system and static generation",
        "Built finance tracker with 100% client-side data persistence, interactive charts, and dark/light theming",
        "Implemented shadcn/ui + Radix UI component library with Tailwind CSS v4 design tokens",
      ],
      toolsTechnologies: ["Next.js 15", "React 18/19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Recharts", "Framer Motion"],
    },
  },
];
