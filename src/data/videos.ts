
export interface Video {
  id: string;
  title: string;
  description: string;
  vimeoUrl: string;
  category: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: 'math-part1',
    title: '10th Mathematics Part 1',
    description: 'Comprehensive mathematics lesson covering fundamental concepts for 10th grade students. This video includes detailed explanations of algebraic expressions, equations, and problem-solving techniques that are essential for board examinations.',
    vimeoUrl: 'https://player.vimeo.com/video/1095495803?h=55eac0fa5a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    category: 'Mathematics',
    date: '2024-01-15'
  },
  {
    id: 'computer-class2',
    title: 'Operating a Computer - Class 2',
    description: 'Learn the basics of computer operations designed for Class 2 students. This interactive session covers how to start a computer, use basic functions, and understand the fundamental components of a computer system in a fun and engaging way.',
    vimeoUrl: 'https://player.vimeo.com/video/1095510347?h=adbdfa174b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    category: 'Computer Science',
    date: '2024-01-20'
  }
];
