import Link from 'next/link';

function Tomato() {
  return (
    <div>
      <h2>Link to "index" page</h2>
      <Link href="/">Move to "/"</Link>
    </div>
  );
}

export default Tomato;
