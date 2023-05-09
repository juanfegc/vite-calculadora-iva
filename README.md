# Integrar widget creado con React en una web en produccion
Creamos nuestro build

Integramos el widget en nuestra web en produccion asi:
```html
<script defer src="./app.js"></script>
<div id="root"></div>
```

Podemos personalizar el id de enganche de nuestra web `<div id="root"></div>` cambiandolo también en nuestro index.js:
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
# Despliegue PREVIEW:
https://calculadoraiva.netlify.app/

