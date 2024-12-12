import type { ReactElement } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { SiLinkedin, SiGithub, SiTelegram } from '@icons-pack/react-simple-icons';
import cn from 'classnames';

export const meta: MetaFunction = () => {
  return [
    { title: 'Anatolii Litvinov' },
  ];
};

const SHOW_PROFILE_PHOTO = false;

type Social = {
  key: string;
  Icon: ReactElement;
  href: string;
  caption: string;
};

type Data = {
  name: string;
  photoUrl: string;
  cv: {
    url: string;
    downloadName: string;
  };
  position: string;
  socials: Social[];
};

const socialClassName = 'size-[2rem]';

const data: Data = {
  name: 'Anatolii Litvinov',
  photoUrl: 'https://withlitvinov-assets.s3.eu-west-1.amazonaws.com/profile/profile_photo.jpg',
  cv: {
    url: 'https://withlitvinov-assets.s3.eu-west-1.amazonaws.com/profile/anatolii_litvinov_software_engineer_cv.pdf',
    downloadName: 'anatolii_litvinov_software_engineer_cv',
  },
  position: 'Software engineer',
  socials: [
    {
      key: 'linkedin',
      Icon: <SiLinkedin className={socialClassName} />,
      href: 'https://www.linkedin.com/in/anatolii-litvinov/',
      caption: 'Linkedin',
    },
    {
      key: 'github',
      Icon: <SiGithub className={socialClassName} />,
      href: 'https://github.com/anatoliilitvinovr/',
      caption: 'Github',
    },
    {
      key: 'telegram',
      Icon: <SiTelegram className={socialClassName} />,
      href: 'https://t.me/anatolii_litvinov/',
      caption: 'Telegram',
    },
  ],
};

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="space-y-[48px]">
        <section
          id="about"
          className="space-y-[32px] sm:space-y-[24px]"
        >
          <div
            className={
              cn('flex flex-col items-center gap-[1.5rem]', {
                'sm:flex-row sm:items-start': SHOW_PROFILE_PHOTO,
              })
            }
          >
            {SHOW_PROFILE_PHOTO && (
              <div className="relative h-[12rem] w-[12rem]">
                <img
                  src={data.photoUrl}
                  alt="profile"
                  className="rounded-full"
                />
              </div>
            )}
            <div
              className={cn('flex flex-col items-center', {
                'sm:items-start': SHOW_PROFILE_PHOTO,
              })}
            >
              <h1 className="font-inter-tight text-[2rem] font-bold leading-[2.5rem]">
                { data.name }
              </h1>
              <h2 className="mt-[0.25rem] text-[1rem] leading-[1.25rem] text-gray-500">
                { data.position }
              </h2>
              <div className="mt-[12px] flex flex-row items-center gap-x-[12px]">
                <div className="flex flex-row gap-x-[8px]">
                  {data.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      title={social.caption}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-300 hover:cursor-pointer hover:text-blue-500"
                    >
                      {social.Icon}
                    </a>
                  ))}
                </div>
                <a
                  href={data.cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[2rem] flex-row items-center gap-x-[0.5rem] rounded-full bg-neutral-950 px-[0.75rem] text-white transition duration-300 hover:bg-neutral-700"
                >
                  Get CV
                </a>
              </div>
              <div className="mt-[24px] text-[1.1rem] font-medium text-sky-700">
                #WorkingOnSomething
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
