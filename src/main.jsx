import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import TelaAcesso from './routes/TelaAcesso.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Ajuda from './routes/Ajuda.jsx';
import CadastroCriado from './routes/CadCriado.jsx';
import Termos from './routes/Termos.jsx';
import Main from './routes/Main.jsx';
import Dinheiro from './routes/Dinheiro.jsx';
import Resposta from './routes/Resposta.jsx';
import Confirmada from './routes/Confirmada.jsx';
import Negada from './routes/Negada.jsx';
import AddCartão from './routes/AddCartão.jsx';
import AddCartão2 from './routes/AddCartão2.jsx';
import QuaseLa from './routes/QuaseLa.jsx';
import QuaseLa2 from './routes/QuaseLa2.jsx';
import Perfil from './routes/Perfil.jsx';
import Cupom from './routes/Cupom.jsx';
import PrimeiraCompra from './routes/PrimeiraCompra.jsx';
import Fidelidade from './routes/Fidelidade.jsx';
import Brinde from './routes/Brinde.jsx';
import InfoLogin from './routes/InfoLogin.jsx';
import AlterarSenha from './routes/AlterarSenha.jsx';
import Pix from './routes/Pix.jsx';
import DescItem from './routes/DescItem.jsx';
import DescItem2 from './routes/DescItem2.jsx';
import Cardapio from './routes/Cardapio.jsx';
import Config from './routes/Config.jsx';



// const router = createBrowserRouter([
// {
// path: "/",
// element: <Home/>
// },
// {
// path: "contact",
// element: <Contact/>
// }
// ])

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <TelaAcesso/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/cadastro",
      element: <Cadastro/>
    },
    { path:"/ajuda",
      element: <Ajuda/>
    },
    {
     path:"/Cadastrocriado",
     element: <CadastroCriado/>
    },
    {
      path:"/termos",
      element: <Termos/>
    },
    {
      path:"/Principal",
      element: <Main/>
    },
    {
      path:"/Dinheiro",
      element: <Dinheiro/>
    },
    {
      path:"/Aguardando-Resposta",
      element: <Resposta/>
    },
    {
      path: "/Compra-Confirmada",
      element: <Confirmada/>
    },
    {
      path: "/Compra-Negada",
      element: <Negada/>
    },
    {
      path: "/Adicionar-Cartão",
      element: <AddCartão/>
    },
    {
      path: "/Adicionar-Cartão-Débito",
      element: <AddCartão2/>
    },
    {
      path:"/Carrinho-Confirmar-Compra",
      element: <QuaseLa/>
    },
    {
      path:"/Carrinho-Alterar-Pagamento",
      element: <QuaseLa2/>
    },
    {
      path:"/Perfil",
      element: <Perfil/>
    },
    {
      path:"/Cupons",
      element: <Cupom/>
    },
    {
      path: "/Cupons-Primeira-Compra",
      element: <PrimeiraCompra/>
    },
    {
      path: "/Cupons-Fidelidade",
      element: <Fidelidade/>
    },
    {
      path: "/Cupons-Brinde-Compra",
      element: <Brinde/>
    },
    {
      path: "/Informações-de-Login",
      element: <InfoLogin/>
    },
    {
      path: "/Perfil-Alterar-Senha",
      element: <AlterarSenha/>
    },
    {
      path: "/Pix",
      element: <Pix/>
    },
    {
      path: "/Descrição-Item",
      element: <DescItem/>
    },
    {
      path:"/Item-Indisponível",
      element: <DescItem2/>
    },
    {
      path: "/Cardápio",
      element: <Cardapio/>
    },
    {
      path: "/Configurações",
      element: <Config/>
    }
  ],

  },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
