// --- Enum (Перерахування статусів) ---
export enum ProjectStatus {
  Active = 'Active',
  Completed = 'Completed',
  Archived = 'Archived'
}

export interface ProjectSpecs {
  framework: string;
  durationMonths: number;
}

export interface Project {
  id: string;                
  title: string;            
  description: string;      
  imageUrl: string;          
  price: number;             
  releaseDate: Date;         
  status: ProjectStatus;    
  tags: string[];           
  specs?: ProjectSpecs; 
  isPromo: boolean;   
  quantity: number;   
}