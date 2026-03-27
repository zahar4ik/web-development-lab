// --- Enum (Перерахування статусів) ---
export enum ProjectStatus {
    Active = 'Active',
    Completed = 'Completed',
    Archived = 'Archived'
  }
  
  // --- Nested Object (Вкладений інтерфейс для характеристик) ---
  export interface ProjectSpecs {
    framework: string;
    durationMonths: number;
  }
  
  // --- Основна сутність (Interface) ---
  export interface Project {
    id: string;                // id (string)
    title: string;             // title
    description: string;       // description
    imageUrl: string;          // imageUrl
    price: number;             // price (number)
    releaseDate: Date;         // Date
    status: ProjectStatus;     // Enum
    tags: string[];            // Array (string[])
    specs: ProjectSpecs;       // Nested Object
  }