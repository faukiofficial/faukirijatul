import { Link } from 'react-router-dom';
import profilePicture from '@/assets/profile.webp';
import { GRADIENT_GLOW, GRADIENT_TEXT } from '@/constants/theme';
import { RESUME_URL, SOCIAL_LINKS } from '@/constants/social';

export function Header() {
  return (
    <header
      id="header"
      className="bg-gray-800 bg-[radial-gradient(rgba(229,231,235,0.05)_5%,transparent_20%)] bg-[size:10px_10px] pb-20 pt-32 text-white sm:pb-48 sm:pt-56 lg:bg-[size:20px_20px]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          {/* Profile Image */}
          <img
            src={profilePicture}
            alt="Fauki Rijatul H"
            className="mx-auto mb-8 h-52 w-52 rounded-full object-cover"
          />

          {/* Name */}
          <h1 className="text-4xl font-bold uppercase sm:text-5xl">
            <span className={GRADIENT_TEXT}>Fauki</span> Rijatul H
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-lg sm:text-xl">
            Dedicated{' '}
            <span className={`${GRADIENT_TEXT} font-bold`}>
              software engineer
            </span>{' '}
            committed to lifelong learning and continuous self-improvement.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex justify-center">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="mx-4 text-white transition-colors hover:text-blue-400"
              >
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-center gap-5">
            {/* Resume Button */}
            <div className="group relative">
              <div className={GRADIENT_GLOW} />
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex min-w-20 items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 transition-all duration-200 hover:text-blue-400 sm:min-w-40"
              >
                Resume
              </a>
            </div>

            {/* Experiences Button (mobile only) */}
            <div className="group relative block md:hidden">
              <div className={GRADIENT_GLOW} />
              <Link
                to="/experiences"
                className="relative inline-flex min-w-20 items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-gray-900 transition-all duration-200 hover:text-blue-400 sm:min-w-40"
              >
                Experiences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
