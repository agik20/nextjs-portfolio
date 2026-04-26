export const toolAssetKeys = [
  "vscode",
  "jupyter",
  "git",
  "github",
  "anaconda",
  "docker",
  "tableau",
  "tensorflow",
] as const;

export const socialLinkData = [
  { name: "Instagram", url: "https://www.instagram.com/ar.giii" },
  { name: "Github", url: "https://github.com/agik20" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ardutra-agi-ginting-56216b316" },
] as const;

export const getCurrentYearValue = () => new Date().getFullYear();
