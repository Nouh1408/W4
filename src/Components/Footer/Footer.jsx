import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center text-xl bg-red-400 p-10 w-3/4">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}
