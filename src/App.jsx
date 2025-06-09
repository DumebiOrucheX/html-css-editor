import { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <!-- You can use internal or external CSS below -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <style>
      body {
        background: #181c24;
        color: #fff;
        font-family: 'Inter', sans-serif;
      }
      h1 {
        color: #00ffe7;
        text-shadow: 0 2px 16px #00ffe7aa;
      }
      p {
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Edit this code to see changes live.</p>
  </body>
</html>`);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #181c24 0%, #232946 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#00ffe7',
        fontWeight: 900,
        fontSize: '2.5rem',
        letterSpacing: 2,
        marginBottom: 8,
        textShadow: '0 2px 24px #00ffe7aa',
      }}>
        HTML & CSS Editor
      </h1>
      <div style={{ color: '#b8c1ec', marginBottom: 24, fontSize: 18, fontWeight: 500 }}>
        Write HTML with inline, internal, or external CSS. See your code run instantly.
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'min(98vw, 900px)',
        maxWidth: 900,
        gap: 24,
      }}>
        <div style={{
          background: 'rgba(36, 40, 54, 0.95)',
          borderRadius: 18,
          boxShadow: '0 4px 32px #00ffe733',
          padding: 16,
          border: '1.5px solid #00ffe7',
          transition: 'box-shadow 0.2s',
        }}>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%',
              minHeight: 220,
              maxHeight: 400,
              background: 'transparent',
              color: '#fff',
              fontFamily: 'Fira Mono, monospace',
              fontSize: 16,
              border: 'none',
              outline: 'none',
              resize: 'vertical',
              padding: 8,
              borderRadius: 10,
              boxShadow: '0 2px 12px #00ffe722',
              caretColor: '#00ffe7',
              transition: 'box-shadow 0.2s',
              whiteSpace: 'pre',
            }}
            aria-label="HTML and CSS editor"
          />
        </div>
        <div style={{
          background: 'rgba(36, 40, 54, 0.95)',
          borderRadius: 18,
          boxShadow: '0 4px 32px #00ffe733',
          padding: 0,
          border: '1.5px solid #00ffe7',
          overflow: 'hidden',
          minHeight: 220,
          maxHeight: 400,
        }}>
          <iframe
            title="Live Preview"
            srcDoc={code}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 220,
              maxHeight: 400,
              border: 'none',
              background: '#181c24',
              borderRadius: 18,
              transition: 'box-shadow 0.2s',
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
      <footer style={{ marginTop: 32, color: '#b8c1ec', fontSize: 14, opacity: 0.7, textAlign: 'center' }}>
        Made by Oruche Chukwuduemi Godfrey<br />
        Made in 2022 &nbsp;|&nbsp; Modified in 2024 &nbsp;|&nbsp; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
