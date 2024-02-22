import BtcLogo from "./btc-logo";

const HTMLElement = globalThis.HTMLElement || (null as unknown as typeof window['HTMLElement'])

export type Properties = {
  size?: string 
  fill?: string
  stroke?: string
}

const attributes: (keyof Properties)[] = [
  'size',
  'fill',
  'stroke',
];

const DEFAULT_SIZE = '140px'
const DEFAULT_STROKE = 'black'
const DEFAULT_FILL = 'white'

const BBTLogo = class extends HTMLElement {

  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({mode: 'open'});
  }

  static get observedAttributes(): string[] {
    return [...attributes];
  }


  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // dirty check
    if (oldValue === newValue) return

    const wrapper = this.shadowRoot.querySelector('wrapper')
    const lighthouse = this.shadowRoot.querySelector('lighthouse')
    switch(name) {
      case 'size': {
        wrapper?.setAttribute('style', '{width: newValue || DEFAULT_SIZE, height: newValue || DEFAULT_SIZE}')
        break;
      }
      case 'fill': {
        lighthouse?.setAttribute('fill', newValue || DEFAULT_FILL)
        break;
      }
      case 'stroke': {
        lighthouse?.setAttribute('stroke', newValue || DEFAULT_STROKE)
        break;
      }
    }

  }

  connectedCallback() {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')
    
    const bg = document.createElement('div')
    bg.setAttribute('class', 'bg')

    const lighthouse = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    lighthouse.setAttribute('width', '100%')
    lighthouse.setAttribute('height', '100%')
    lighthouse.setAttribute('viewBox', '0 0 37.041667 37.041667')
    lighthouse.setAttribute('class', 'lighthouse')
    lighthouse.innerHTML = `<g transform='translate(-10.311717,-4.1193979)'>
      <rect
        style='stroke-width:0.453158;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        stroke='currentColor'
        width='8.339776'
        height='6.4164'
        x='24.762302'
        y='22.344303'
        ry='0'></rect>
      <rect
        style='stroke-width:0.409071;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        width='10.588191'
        height='1.6825172'
        stroke='currentColor'
        fill='currentColor'
        x='23.642668'
        y='28.770376'></rect>
      <path
        style='stroke-width:0.463613;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.006086,23.409519 9.66712,0.01501'
        stroke='currentColor'></path>
      <path
        style='stroke-width:0.463613;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.009972,23.873632 9.647792,-0.0995'
        stroke='currentColor'></path>
      <path
        style='stroke-width:0.946151;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.390522,24.178992 8.892527,4.54e-4'
        stroke='currentColor'></path>
      <rect
        style='stroke-width:0.445774;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        width='4.152565'
        height='1.2346774'
        stroke='currentColor'
        x='26.819813'
        y='26.625462'></rect>
      <rect
        style='stroke-width:0.444029;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        stroke='currentColor'
        width='1.6034751'
        height='1.1708666'
        x='28.174551'
        y='26.639946'></rect>
      <path
        style='stroke-width:0.473074;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 27.626391,22.319755 0.843371,-1.098808 0.196847,-0.795228 0.01828,-0.745516 0.24595,-0.195885 0.257443,0.212173 0.02516,0.572869 0.133727,0.882892 0.817774,1.09638 c -0.866454,-0.115318 -1.521353,-0.328672 -2.53856,0.07112 z'
        stroke='currentColor'></path>
      <path
        style='stroke-width:1.43933;stroke-linecap:butt;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.081703,31.495243 9.612288,-0.0093'
        stroke='currentColor'></path>
      <path
        style='stroke-width:0.880364;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.271836,30.713108 9.250367,0.05656'
        stroke='currentColor'></path>
      <path
        style='stroke-width:1.03548;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 24.276935,32.547587 9.186147,5.2e-4'
        stroke='currentColor'></path>
      <rect
        style='stroke-width:0.458672;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        stroke='currentColor'
        width='8.3342619'
        height='6.5778422'
        x='24.742165'
        y='32.836575'
        ry='0'></rect>
      <path
        style='stroke-width:1.41057;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:3.3;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke'
        d='M 23.622526,39.866272 H 34.065074'
        stroke='currentColor'></path>
      <path
        style='stroke-width:1.00967;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal'
        d='m 23.548346,39.43046 10.47123,-0.0043'
        stroke='currentColor'></path>
      <path
        style='stroke-width:1.85496;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:3.3;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke'
        d='m 24.565076,40.503903 h 8.572161'
        stroke='currentColor'></path>
    </g>`;

  
    const btcLogo = new BtcLogo()
    btcLogo.setAttribute('size', '100%')
    btcLogo.setAttribute('class', 'btcLogo')

    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      @keyframes lightfire-rotate {
        0% {
          opacity:.2;transform:rotate(0)
        }
        50% {
          opacity:.4
        }
        to {
          opacity:.2;transform:rotate(45deg)
        }
      }
    
      .wrapper {
        position: relative;
        height: ${this.getAttribute("size") || DEFAULT_SIZE};
        width: ${this.getAttribute("size") || DEFAULT_SIZE};
        overflow: hidden;
        border-radius: 9999px;
      }
      
      .bg {
        position: absolute;
        inset: -15%;
        top: -40%;
        background-color: ${this.getAttribute("fill") || DEFAULT_FILL};
        background-image: repeating-conic-gradient( from 0deg,#F7931A 0deg 12deg, transparent 12deg 22.5deg);
        animation: lightfire-rotate 5s linear infinite;
      }

      .lighthouse {
        position: absolute;
        inset: 0;
        z-index: 3;
        fill: ${this.getAttribute("fill") || DEFAULT_FILL};
        color: ${this.getAttribute("stroke") || DEFAULT_STROKE};
      }
      
      
      .btcLogo {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 35%;
        width: 15%;
        height: 15%;
        left: 50%;
        z-index: 4;
      }
    `;

    // Attach styles + created elements to the shadow dom
    wrapper.appendChild(style);
    wrapper.appendChild(bg);
    wrapper.appendChild(lighthouse);
    wrapper.appendChild(btcLogo);

    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('bbt-logo', BBTLogo)

export default BBTLogo


declare global {
  interface HTMLElementTagNameMap {
    "bbt-logo": typeof BBTLogo;
  }
}
