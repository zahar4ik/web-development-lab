import { Project, ProjectStatus } from './models/project';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A fully functional online store with payment integration.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500',
    price: 1500,
    releaseDate: new Date('2025-12-20'),
    status: ProjectStatus.Active,
    tags: ['Angular', 'Node.js', 'Stripe'],
    specs: { framework: 'Angular 19', durationMonths: 6 },
    isPromo: true,   
    quantity: 5      
  },
  {
    id: '2',
    title: 'Fitness Tracker App',
    description: 'Mobile-first application to track daily workouts and calories.',
    imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500',
    price: 800,
    releaseDate: new Date('2026-01-15'),
    status: ProjectStatus.Completed,
    tags: ['Mobile', 'Health', 'TypeScript'],
    specs: { framework: 'Ionic', durationMonths: 3 }, // ПОВЕРНУЛИ СТРОКУ
    isPromo: false,
    quantity: 10     
  },
  {
    id: '3',
    title: 'Corporate Portfolio',
    description: 'Minimalist portfolio for a local architecture studio.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    price: 500,
    releaseDate: new Date('2024-11-10'),
    status: ProjectStatus.Archived,
    tags: ['UI/UX', 'Portfolio', 'CSS'],
    specs: { framework: 'Vanilla JS', durationMonths: 1 },
    isPromo: false,
    quantity: 0      
  },
  {
    id: '4',
    title: 'Recipe Book Site',
    description: 'Community-driven site for sharing and rating cooking recipes.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500',
    price: 300,
    releaseDate: new Date('2025-05-22'),
    status: ProjectStatus.Completed,
    tags: ['Blog', 'Recipes', 'SEO'],
    specs: { framework: 'Angular', durationMonths: 2 },
    isPromo: true,   
    quantity: 2     
  },
  {
    id: '5',
    title: 'AI Image Generator',
    description: 'Integration with DALL-E API to generate custom graphics.',
    imageUrl: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=500',
    price: 3500,
    releaseDate: new Date('2026-02-14'),
    status: ProjectStatus.Active,
    tags: ['AI', 'Python', 'Innovation'],
    specs: { framework: 'Angular 19', durationMonths: 5 },
    isPromo: false,
    quantity: 1      
  }
];