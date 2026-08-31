export interface ProjectItem {
  _id: string;
  title: string;
  image: string;
  linkDemo?: string;
  linkGithub?: string;
  description?: string;
  mainStack: string[];
  tool: string[];
}
