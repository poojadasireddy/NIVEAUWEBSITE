
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#4F46E5"/>
      <path d="M16 6L26 16L16 26L6 16L16 6Z" fill="white"/>
    </svg>
    <span className="font-bold text-xl text-zinc-900">Niveau</span>
  </div>
);

const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
    <a href={href} className="text-zinc-500 hover:text-zinc-800 transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
  const navItems = ['Services', 'Our Work', 'Achievements', 'FAQs', 'Contact'];

  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <Logo />
                <p className="text-zinc-600 max-w-xs">
                    Your digital success starts here. We design, build, and scale products that perform globally.
                </p>
                <div className="flex space-x-4">
                    <SocialIcon href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </SocialIcon>
                    <SocialIcon href="#">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </SocialIcon>
                     <SocialIcon href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.435 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd" /></svg>
                    </SocialIcon>
                </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-zinc-900">Services</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Web Development</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">App Development</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">AI Applications</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">UI/UX Design</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-zinc-900">Company</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">About Us</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Our Work</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Careers</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-zinc-900">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Privacy Policy</a></li>
                        <li><a href="#" className="text-zinc-600 hover:text-zinc-900">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Niveau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
