import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/faukirijatulh',
    icon: SiLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/faukirijatul',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/faukirijatul/',
    icon: FaInstagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6283805227327',
    icon: FaWhatsapp,
  },
] as const;

export const RESUME_URL =
  'https://docs.google.com/document/d/1LT2cfEXHMclTYSuzDeL12Ouym92rz_zX/edit?usp=sharing&ouid=107530896604415709600&rtpof=true&sd=true';
