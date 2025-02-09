const container = document.querySelector('#container');

/**
 * @param {() => [ string , () => void ]} pageFunc
 */
export const setPage = (pageFunc) => {
  const [innerHTML, initFunc] = pageFunc();
  container.innerHTML = innerHTML;
  initFunc();
};

/**
 * @returns {[string, () => void]}
 */
export const PageHome = () => {
  const init = () => {
    const formLink = document.querySelector('#form-link');
    formLink.addEventListener('click', () => {
      setPage(PageForm);
    });
  };
  const res = [
    `
<main>
<h1>Home Page</h1>
<div id="form-link" class="fake-link">form</div>
</main>
`,
    init,
  ];
  return res;
};

/**
 * @returns {[string, () => void]}
 */
export const PageForm = () => {
  const init = () => {
    const formLink = document.querySelector('#home-link');
    formLink.addEventListener('click', () => {
      setPage(PageHome);
    });
  };
  return [
    `
<main>
<h1>Form Page</h1>
<div class="fake-link" id="home-link">home</div>
</main>
`,
    init,
  ];
};
