import getPage from './services/get-page';
import { useEffect, useState } from 'react';
import { SDUIRenderer } from '@redotlabs/sdui-renderer';
import { ThemeProvider } from '@redotlabs/themes';

function App() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getPage().then((data) => setPage(data));
  }, []);

  if (!page) return <div>Loading...</div>;

  return (
    <ThemeProvider color="blue" font="pretendard">
      <main>
        {page.contents.map((content: any) => (
          <SDUIRenderer key={content.id} content={content} />
        ))}
      </main>
    </ThemeProvider>
  );
}

export default App;
