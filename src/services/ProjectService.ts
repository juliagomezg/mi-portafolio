import { WebProject, BackendProject } from "../types/projectTypes";

class ProjectService {
    private projects: (WebProject | BackendProject)[] = [
        { id: 1, name: "Web App", description; "Aplicación Vue", url: "https://google.com" },
        { id: 2, name: "API Backend", description; "API en Flask", apiEndpoint: "https://google.com" }
    ];

    getAllProjects() {
        return this.projects;
    }
}

export const projectService = new ProjectService();