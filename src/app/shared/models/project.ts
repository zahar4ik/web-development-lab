export enum ProjectStatus {
  Active = 'В ПРОЦЕСІ',
  Completed = 'ЗАВЕРШЕНО',
  Archived = 'В АРХІВІ'
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
  isPromo: boolean;
  quantity: number;
  // Додаємо опис об'єкта specs (робимо його опціональним через ?, бо у проекті №2 його немає)
  specs?: {
    framework: string;
    durationMonths: number;
  };
}