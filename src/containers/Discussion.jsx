import {  Post } from '@/components';
import posts from '@/content/post';

const Discussion = ({ className }) => {
  return (
    <section
      className={`flex-grow w-6/12 p-2 xl:p-8 h-screen  ${className}`}
    >
      <h1 className='hidden heading-primary md:block'>Discussion Forum</h1>

      <div className='px-1 py-3 space-y-2 xs:space-y-4  md:space-y-1 xl:px-10  '>
        
        {/* Posts */}
        <div className='h-[calc(100vh-400px)] xs:h-[calc(100vh-350px)] md:h-screen  py-3 space-y-8 '>
        

          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;