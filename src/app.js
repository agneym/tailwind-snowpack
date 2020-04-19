import { h, render } from '/web_modules/preact.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(h);

function SomePreactComponent(props) {
  return html`
    <div class="container">
      <h1 class="font-medium text-orange-900">Tailwind CSS - Preact - HTML</h1>
    </div>
  `;
}

render(html`<${SomePreactComponent} />`, document.getElementById('app'));