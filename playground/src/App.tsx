import getPage from './services/get-page';
import { useEffect, useState } from 'react';
import { SDUIRenderer } from '@redotlabs/sdui-renderer';

function App() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getPage().then((data) => setPage(data));
  }, []);

  if (!page) return <div>Loading...</div>;

  return (
    <main>
      {page.contents.map((content: any) => (
        <SDUIRenderer key={content.id} content={content} />
      ))}
    </main>
  );
}

export default App;
