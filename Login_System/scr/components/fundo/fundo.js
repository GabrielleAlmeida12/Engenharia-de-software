

export default function Logo() {
    const estiloLogo = {
        position: 'fixed', // Para fixar o logotipo no fundo da página
        bottom: '20px', // Para alinhar o logotipo na parte inferior
        right: '20px', // Para alinhar o logotipo à direita
        zIndex: '-1', // Coloque o logotipo no fundo da pilha de camadas
      };

  return (
    <img src="../scr/components/fundo/logo.jpg'" alt="logo" />
  );
}

