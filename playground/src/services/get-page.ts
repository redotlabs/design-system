const getPage = async () => {
  const page = await fetch('/page.json');
  const pageJson = await page.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pageJson);
    }, 1000);
  });
};

export default getPage;
