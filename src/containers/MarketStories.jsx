import marketStories from '@/content/market-stories';
import Image from 'next/image';
import Link from 'next/link';

const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-3/12 p-5 ${className}`}>
      <h1 className='hidden heading-primary md:block'>Market Stories</h1>

      <div className='grid grid-cols-1 gap-5 py-9 px-7 overflow-scroll'>
        {marketStories.map(({ img, text, id, url }) => (
          <Link
            key={id}
            href={url}
            target='_blank'
            className='group relative h-48 cursor-pointer overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-700'
          >
            <Image
              src={img}
              alt={url}
              width={300}
              height={200}
              className='object-cover w-full h-full'
            />
            <div className='absolute inset-0 z-10 flex items-end p-3 px-5 text-white to-black-black/70 bg-gradient-to-t from-black/70 hover:from-orange-700 group-focus:from-orange-700'>
              <h4 className='mt-5 text-sm'>{text}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MarketStories;
