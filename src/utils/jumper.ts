
export const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
};