export const serviceIconKeys = [
  "web_icon",
  "mobile_icon",
  "ui_icon",
  "graphics_icon",
] as const;

export const toolIconKeys = [
  "anaconda",
  "tensorflow",
  "docker",
  "git",
  "github",
  "jupyter",
  "vscode",
  "figma",
  "react",
  "mongodb",
  "firebase",
] as const;

export type ServiceIconKey = (typeof serviceIconKeys)[number];
export type ToolIconKey = (typeof toolIconKeys)[number];
