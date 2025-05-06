import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Política de Privacidade</h1>

      <h2>1. Coleta de Dados</h2>
      <p>Nossa calculadora de vale transporte não coleta, armazena ou compartilha dados pessoais dos usuários. Todas as informações inseridas são processadas localmente no seu navegador.</p>

      <h2>2. Uso de Cookies</h2>
      <p>Não utilizamos cookies para rastrear ou armazenar informações dos usuários.</p>

      <h2>3. Anúncios</h2>
      <p>Nossa aplicação pode exibir anúncios de terceiros. Estes anunciantes podem usar cookies e tecnologias similares para coletar dados sobre suas visitas, mas não coletamos ou compartilhamos suas informações pessoais com eles.</p>

      <h2>4. Armazenamento Local</h2>
      <p>Podemos usar o armazenamento local do seu navegador para salvar suas preferências de uso, como o valor da passagem, para melhorar sua experiência. Estas informações permanecem apenas no seu dispositivo.</p>

      <h2>5. Compartilhamento</h2>
      <p>A função de compartilhamento usa a API nativa do seu dispositivo e não armazena ou transmite dados para nossos servidores.</p>

      <h2>6. Atualizações</h2>
      <p>Esta política de privacidade pode ser atualizada ocasionalmente. Recomendamos verificar periodicamente para se manter informado sobre nossas práticas.</p>

      <h2>7. Contato</h2>
      <p>Para questões relacionadas à privacidade, entre em contato através do site da <a href="https://pixalar.vercel.app/" target="_blank" rel="noopener noreferrer">Pixalar Tech</a>.</p>

      <Link to="/" className="back-link">← Voltar para a calculadora</Link>
    </div>
  );
};

export default PrivacyPolicy; 