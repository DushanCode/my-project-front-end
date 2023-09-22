import React from 'react';

const Quote = () => {
  return (
    <div className='bg-pinkBg'>
      <div className='container mx-auto text-center'>
        <div className='py-20'>
          <h2 className='text-3xl font-bold italic ff-quote'>
            "A reader lives a thousand lives before he dies... The man who never
            reads lives only one."
          </h2>
          <p className='mt-2'>-George R. R. Martin-</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
