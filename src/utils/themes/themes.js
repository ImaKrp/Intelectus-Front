const frutas = [
  { name: "Banana", img: "banana.jpeg" },
  { name: "Limão", img: "limao.jpeg" },
  { name: "Maçã", img: "maca.jpeg" },
  { name: "Melancia", img: "melancia.jpeg" },
  { name: "Morango", img: "morango.jpeg" },
  { name: "Uva", img: "uva.jpeg" },
  { name: "Pera", img: "pera.jpeg" },
  { name: "Melão", img: "melao.jpeg" },
  { name: "Cereja", img: "cereja.jpeg" },
  { name: "Abacaxi", img: "abacaxi.jpeg" },
];

const animais = [
  { name: "Leão", img: "leao.jpeg" },
  { name: "Urso", img: "urso.jpeg" },
  { name: "Macaco", img: "macaco.jpeg" },
  { name: "Elefante", img: "elefante.jpeg" },
  { name: "Girafa", img: "girafa.jpeg" },
  { name: "Zebra", img: "zebra.jpeg" },
  { name: "Tigre", img: "tigre.jpeg" },
  { name: "Jacaré", img: "jacare.jpeg" },
];

const formas = [
  { name: "Círculo", img: "circulo.jpeg" },
  { name: "Quadrado", img: "quadrado.jpeg" },
  { name: "Retângulo", img: "retangulo.jpeg" },
  { name: "Triângulo", img: "triangulo.jpeg" },
];

const cores = [
  { name: "Vermelho", img: "vermelho.jpeg" },
  { name: "Amarelo", img: "amarelo.jpeg" },
  { name: "Verde", img: "verde.jpeg" },
  { name: "Azul", img: "azul.jpeg" },
  { name: "Roxo", img: "roxo.jpeg" },
  { name: "Laranja", img: "laranja.jpeg" },
];

const memoria = {
  cores,
  animais,
  frutas,
  name: "Jogo da memória",
  img: "jacare.jpeg",
};

const reconhecimento = {
  formas,
  cores,
  frutas,
  animais,
  name: "Jogo de Reconhecimento",
  img: "jacare.jpeg",
};

export const gamesThemes = {
  memoria,
  reconhecimento,
};
