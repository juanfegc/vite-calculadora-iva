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

# Integracion Admin Prestashop
/src/PrestashoBundle/Resources/Views/Admin/Product/form.html.twig


<div class="form-group">
    <h2>Calculadora IVA:</h2>

    <div class="row">
        <div class="col-md-12">
            <a id="calculadora-iva" href="https://calculadoraiva.netlify.app" title="Calculadora IVA" target="_blank">
                <svg width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

