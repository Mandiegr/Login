
---

 ## **🚀 Projeto de Login com React**

Este é um projeto de login simples desenvolvido com React utilizando o **Vite** como ferramenta de build. O projeto inclui:  
✅ Validação de **e-mail** e **senha**.  
🎨 Estilização com **styled-components**.

---
## **🌐 Acesse o Projeto**

O projeto está hospedado na **Vercel** e pode ser acessado através do link abaixo:

🔗 [Acesse o Projeto Online](https://login-rust-omega.vercel.app/)

---

##  **📝 Observações**
- **Correção do erro de validação do Password:** O operador **!**  no   **!password.length < 6** nega o valor de password, se password tivesse algum valor ele seria false. estava retornado senha inválida, pois no password a lógica pedia que recebesse uma string vázia, undefined ou null e retornária true. **O orreto: if (!password || password.length < 6)**

- **Styled Components** Adicionei para estilizar os componentes visando uma estilização mais limpa e organizada. Antes a estilização estava junto ao componente Login. O Componente Login foi movido para pasta padrão **components**

- **Email e Senha:** test@gmail.com e 123456

- **Modifiquei as cores do Design do Projeto no Figma**

- Design do projeto no Figma: [Figma Design](https://www.figma.com/design/KfO5juWJhYMRqv0hennMun/Untitled?node-id=0-1&t=D9Ai15caNYVpKoBw-1)
---

## 🧰 **Tecnologias Utilizadas**
- **[Vite](https://vitejs.dev/)**
- **[React](https://reactjs.org/)**
- **[Styled-Components](https://styled-components.com/)**


---

## ✅ **Pré-requisitos**  
Antes de iniciar, certifique-se de ter instalado em sua máquina:  
1. **[Node.js](https://nodejs.org/)** (versão 18 ou superior).  
2. **[Git](https://git-scm.com/)**.  

---

## ⚙️ **Como Iniciar o Projeto**

### 1️⃣ Clone o Repositório  
```bash
git clone https://github.com/Mandiegr/Login.git
```

### 2️⃣ Acesse o Diretório  
```bash
cd nome-do-repositorio
```

### 3️⃣ Instale as Dependências  
```bash
npm install
```

### 4️⃣ Inicie o Servidor de Desenvolvimento  
```bash
npm run dev
```

🔗 **Acesse o projeto em**: [http://localhost:5173](http://localhost:5173)

---

## 📜 **Scripts Disponíveis**

| Comando           | Descrição                                           |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento.             |
| `npm run build`   | Cria o build de produção na pasta `dist`.         |
| `npm run preview` | Visualiza o build de produção gerado.             |

---

