import { goto } from '$app/navigation';

export function smoothScroll(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
      event.preventDefault();
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          goto(`#${id}`, { replaceState: true, noScroll: true });
        }
      }
    }
  };

  node.addEventListener('click', handleClick);

  return {
    destroy() {
      node.removeEventListener('click', handleClick);
    }
  };
}
