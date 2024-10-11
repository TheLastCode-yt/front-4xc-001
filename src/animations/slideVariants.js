// De baixo para cima
export const slideUp = {
  hidden: { opacity: 0, y: 50 }, // 50px abaixo
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Da direita para a esquerda
export const slideLeft = {
  hidden: { opacity: 0, x: 50 }, // 50px à direita
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Da esquerda para a direita
export const slideRight = {
  hidden: { opacity: 0, x: -50 }, // 50px à esquerda
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// De cima para baixo
export const slideDown = {
  hidden: { opacity: 0, y: -50 }, // 50px acima
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
