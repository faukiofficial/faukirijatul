import legalize from '@/assets/projects/legalize.webp';
import hikasir from '@/assets/projects/hikasir.webp';
import docduit from '@/assets/projects/docduit.webp';
import kodingup from '@/assets/projects/kodingup.webp';
import tokobaju from '@/assets/projects/tokobaju.webp';
import faukiblog from '@/assets/projects/faukiblog.webp';
import tokoKita from '@/assets/projects/tokokita.webp';

import type { ProjectItem } from '@/types/project';

export const projects: ProjectItem[] = [
  {
    _id: 'legalize',
    title: 'Legal-ize',
    image: legalize,
    description:
      'A web application for an information center on official Indonesian laws related to finance, such as presidential regulations, Bank Indonesia regulations, and others.',
    linkDemo: '',
    linkGithub: '',
    mainStack: ['TypeScript', 'Next JS', 'Zustand', 'Socket.io', 'SWR'],
    tool: [
      'TypeScript',
      'Next JS',
      'Zustand',
      'Radix UI',
      'Tailwind CSS',
      'SWR',
      'Socket.io',
    ],
  },
  {
    _id: 'hi-kasir',
    title: 'Hi-Kasir',
    image: hikasir,
    description:
      'A POS (Point of Sale) application integrated with an Indonesian state-owned digital bank, featuring comprehensive management tools and intuitive data visualizations.',
    linkDemo: '',
    linkGithub: '',
    mainStack: ['TypeScript', 'React JS', 'React Query', 'Chart JS'],
    tool: ['TypeScript', 'React JS', 'React Query', 'Tailwind CSS', 'Chart JS'],
  },
  {
    _id: 'docduit',
    title: 'Docduit - Web App',
    image: docduit,
    description: 'A financial consultation web application integrated with AI',
    linkDemo: '',
    linkGithub: '',
    mainStack: [
      'TypeScript',
      'Next JS',
      'Radix UI',
      'Tailwind CSS',
      'SWR',
      'React Query',
    ],
    tool: [
      'TypeScript',
      'Next JS',
      'Radix UI',
      'Tailwind CSS',
      'SWR',
      'React Query',
      'Context API',
    ],
  },
  {
    _id: 'kodingup',
    title: 'Koding Up - CMS',
    image: kodingup,
    description:
      'A web-based Content Management System for Learning Management Systems to manage digital learning, including live class scheduling, assignments, automated attendance, and course materials efficiently.',
    linkDemo: '',
    linkGithub: '',
    mainStack: [
      'TypeScript',
      'React JS',
      'Radix UI',
      'Tailwind CSS',
      'React Query',
    ],
    tool: ['TypeScript', 'Next JS', 'Radix UI', 'Tailwind CSS', 'React Query'],
  },
  {
    _id: 'tokobaju',
    title: 'Tokobaju - E-Commerce',
    image: tokobaju,
    description:
      'An online clothing store offering a wide selection of trendy fashion, integrated with a payment gateway for fast, secure, and seamless transactions.',
    linkDemo: '',
    linkGithub: '',
    mainStack: [
      'JavaScript',
      'React',
      'Redux Toolkit',
      'Stripe',
      'Express JS',
      'MongoDB',
    ],
    tool: [
      'JavaScript',
      'React',
      'CSS',
      'HTML',
      'Tailwind CSS',
      'Context API',
      'Redux Toolkit',
      'Express JS',
      'Node JS',
      'Cloudinary',
      'Stripe',
      'MongoDB',
      'Mongoose',
      'Json Web Token',
      'Nodemailer',
      'Vercel',
    ],
  },
  {
    _id: 'fauki-blog',
    title: 'Personal Blog',
    description:
      'A full-stack personal blog designed to publish articles, showcase portfolios, and manage content seamlessly with a custom back-end and dynamic UI.',
    image: faukiblog,
    linkDemo: '',
    linkGithub: '',
    mainStack: [
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Express JS',
      'MongoDB',
    ],
    tool: [
      'TypeScript',
      'React',
      'CSS',
      'Tailwind CSS',
      'Redux Toolkit',
      'Express JS',
      'Node JS',
      'Cloudinary',
      'OAuth',
      'MongoDB',
      'Json Web Token',
    ],
  },
  {
    _id: 'toko-kita',
    title: 'Toko Kita - E-Commerce',
    description:
      'A general online store offering a wide selection of products, featuring real-time order tracking for convenient shipment monitoring.',
    image: tokoKita,
    linkDemo: '',
    linkGithub: '',
    mainStack: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Express JS',
      'MongoDB',
    ],
    tool: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Redux Toolkit',
      'Express JS',
      'Node JS',
      'Cloudinary',
      'MongoDB',
      'Json Web Token',
    ],
  },
];
