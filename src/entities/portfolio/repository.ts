import {
  assets,
} from "@/assets/assets";
import { learningMaterialData } from "./data/learning";
import { getCurrentYearValue, socialLinkData, toolAssetKeys } from "./data/meta";
import { projectData } from "./data/projects";
import { serviceCapabilityData } from "./data/services";
import type { LearningMaterial, PortfolioProject, ServiceCapability } from "./types";

export function getProjects(): PortfolioProject[] {
  return projectData;
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getLearningMaterials(): LearningMaterial[] {
  return learningMaterialData;
}

export function getLearningMaterialBySlug(slug: string): LearningMaterial | undefined {
  return getLearningMaterials().find((material) => material.slug === slug);
}

export function getServiceCapabilities(): ServiceCapability[] {
  return serviceCapabilityData.map((item) => ({
    ...item,
    icon: assets[item.iconKey],
  }));
}

export function getPortfolioAssets() {
  return assets;
}

export function getToolIcons() {
  return toolAssetKeys.map((key) => assets[key]);
}

export function getSocialLinks() {
  return [...socialLinkData];
}

export function getCurrentYear() {
  return getCurrentYearValue();
}
