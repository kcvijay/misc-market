import { Link } from '@remix-run/react';
import { FooterLinks } from '~/utils/misc/data';

const Footer = () => {
  return (
    <footer className='bg-slate-900 p-6 min-h-40'>
      <section className='max-w-[1200px] mx-auto flex justify-between flex-wrap items-start'>
        <div>
          <p className='font-serif text-xl font-bold text-slate-500 mb-2'>
            Misc. Market
          </p>
          <p className='text-sm text-slate-400 mb-4'>
            © {new Date().getFullYear()} Misc. Market. All rights reserved.
          </p>
          <p className='text-slate-400 text-sm'>
            Made with ❤️ by <Link to='/' className='hover:underline'>Vijay KC</Link> in Helsinki.{' '}
          </p>
        </div>
        <div className='flex gap-12'>
          {FooterLinks.map((section, index) => (
            <section key={index} className='mt-4'>
              <p className='text-slate-400 font-bold'>{section.title}</p>
              <ul className='mt-2 flex flex-col gap-2'>
                {section.links.map((link, index) => (
                  <li key={index} className='text-sm'>
                    <a
                      href={link.href}
                      className='text-slate-300 hover:text-slate-200'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
