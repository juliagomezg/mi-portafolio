export interface BaseProject {
    id: number;
    name: string;
    description: string;
}

export interface WebProject extends BaseProject {
    url: string;
}

export interface BackendProject extends BaseProject {
    apiEndpoint: string;
}

