import React from 'react';

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-1/2 text-center text-xl bg-red-400 p-14">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}
