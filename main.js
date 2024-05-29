import Navigo from 'navigo';
import {el, setChildren} from 'redom';

const ghpPathPart = '/skillbox-npm-less2-4/';
const router = new Navigo(
  window.location.pathname.includes(ghpPathPart)
    ? ghpPathPart
    : '/');

function navigate(event) {
  event.preventDefault();
  router.navigate(event.target.getAttribute('href'));
}

function postList() {
  const list = el('ul', el('li', 'Loading...'));

  fetch('https://gorest.co.in/public/v2/posts/').then(async response => {
    const data = await response.json();

    setChildren(
      list,
      data.map(post =>
        el(
          'li',
          el('a', {
            href: `/post/${post.id}`,
            onclick: navigate
          }, post.title),
        ),
      ),
    );
  });

  return el('div', {className: 'container'}, [el('h1', 'Post list'), list]);
}

function postPage(id) {
  const body = el('p', 'Loading...');

  fetch(`https://gorest.co.in/public/v2/posts/${id}`).then(async response => {
    const post = await response.json();

    setChildren(body, [
      el('h2', post.title),
      el('p', post.body),
      el(
        'a',
        {
          href: `/`,
          onclick: navigate,
        },
        'Вернуться к списку',
      ),
    ]);
  });

  return el('div', {className: 'container'}, [el('h1', 'Post'), body]);
}

router.on(`/`, () => {
  setChildren(document.body, postList());
});

router.on(`/post/:id`, ({data: {id}}) => {
  setChildren(document.body, postPage(id));
});

router.resolve();
