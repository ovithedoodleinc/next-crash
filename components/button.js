"use client";

export default function Button() {
  return (
    <button
      onClick={() => console.log("clicked!")}
      className="bg-pink-400 px-4 py-2 rounded mt-4"
    >
      Click Me!
    </button>
  );
}
