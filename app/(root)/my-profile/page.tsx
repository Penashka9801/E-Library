'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { sampleBooks } from '@/constants';
import BookList from '@/components/BookList';

const Page = () => {
    return (
        <>
          {/* Logout button should be a normal button with onClick */}
          <Button className="mb-10" onClick={() => signOut()}>
            Logout
          </Button>
    
          {/* Book List */}
          <BookList title="Borrowed Books" books={sampleBooks} />
        </>
      );
//   return (
//     <>
//         <form action={async () => {

//             await  signOut();
//         }}
//         className='mb-10'
//         >
//             <Button>
//                 Logout
//             </Button>
//         </form>
//         <BookList title="Borrowed Books" books = {sampleBooks}/>
//     </>
//   )
};

export default Page
