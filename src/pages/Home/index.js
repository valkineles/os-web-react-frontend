import React from 'react';

export default function Home() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>Home</h1>
      </form>
    </div>
  );
}
