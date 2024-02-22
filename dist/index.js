var h = Object.defineProperty;
var k = (i, t, o) => t in i ? h(i, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[t] = o;
var a = (i, t, o) => (k(i, typeof t != "symbol" ? t + "" : t, o), o);
const p = [
  "size"
];
class c extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return [...p];
  }
  attributeChangedCallback(t, o, r) {
    const s = this.shadowRoot, e = s == null ? void 0 : s.querySelector("svg");
    e == null || e.setAttribute("width", r || "35"), e == null || e.setAttribute("height", r || "35");
  }
  connectedCallback() {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    t.setAttribute("viewBox", "0 0 35 35"), t.setAttribute("width", this.getAttribute("size") || "35"), t.setAttribute("height", this.getAttribute("size") || "35"), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.innerHTML = `
    <g>
      <circle cx="50%" cy="50%" r="50%" fill="#FFF"></circle>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2686 34.4775C22.6551 36.8141 32.1446 31.0929 34.4798 21.7236C36.8092 12.3486 31.0972 2.83044 21.705 0.522482C12.3414 -1.81411 2.85767 3.9071 0.522498 13.2764C-1.81267 22.6457 3.89934 32.1352 13.2686 34.4775ZM21.8978 10.8419C24.3284 11.6667 26.1013 12.8866 25.7867 15.2234C25.5465 16.9244 24.6201 17.7549 23.339 18.047C25.089 18.9462 25.964 20.3093 25.1634 22.6976C24.1683 25.693 21.7148 25.9622 18.4321 25.378L17.6772 28.5682L15.7557 28.1043L16.5106 24.9656C16.0245 24.8454 15.5155 24.7194 14.9779 24.5762L14.223 27.7377L12.3014 27.2738L13.0563 24.0836C12.7922 24.007 12.5174 23.941 12.2385 23.874C12.0586 23.8308 11.8769 23.7872 11.6952 23.74L9.19032 23.1558L10.0996 20.9393C10.0996 20.9393 11.5351 21.3059 11.5122 21.2829C12.0441 21.4032 12.29 21.0596 12.3872 20.819L13.5539 15.7789C13.5911 15.7904 13.6211 15.7961 13.6511 15.8018C13.6811 15.8076 13.7112 15.8133 13.7483 15.8248C13.7002 15.7914 13.6545 15.7796 13.6143 15.7693C13.5924 15.7636 13.5721 15.7584 13.5539 15.7503L14.406 12.1478C14.4346 11.7583 14.2859 11.2486 13.5081 11.0539C13.5596 11.0252 12.1241 10.7102 12.1241 10.7102L12.6103 8.66554L15.2581 9.30128C15.464 9.34996 15.6713 9.39291 15.8786 9.43587C16.0859 9.47882 16.2933 9.52178 16.4991 9.57046L17.254 6.40895L19.1985 6.87287L18.4665 9.96565C18.9755 10.0687 19.4902 10.189 19.9991 10.3093L20.7312 7.21651L22.6527 7.68043L21.8978 10.8419ZM15.9161 22.3421C17.4611 22.7389 20.9451 23.6338 21.4632 21.4261C21.9846 19.1891 18.7184 18.4848 17.0796 18.1314C16.8849 18.0894 16.7132 18.0524 16.5735 18.0183L15.5784 22.2566C15.6762 22.2804 15.7896 22.3096 15.9161 22.3421ZM17.3001 16.1439C18.5887 16.4771 21.522 17.2355 21.9951 15.2234C22.4749 13.2039 19.7374 12.6174 18.3835 12.3274C18.2208 12.2926 18.078 12.262 17.9632 12.2337L17.0367 16.0768C17.1138 16.0958 17.2022 16.1186 17.3001 16.1439Z" fill="#F7931A"/>
    <g>
    `, this.attachShadow({ mode: "open" }).appendChild(t);
  }
}
customElements.define("btc-logo", c);
const u = [
  "size",
  "fill",
  "stroke"
], l = "140px", d = "black", n = "white", y = class extends HTMLElement {
  constructor() {
    super();
    a(this, "shadowRoot");
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [...u];
  }
  attributeChangedCallback(t, o, r) {
    if (o === r)
      return;
    const s = this.shadowRoot.querySelector("wrapper"), e = this.shadowRoot.querySelector("lighthouse");
    switch (t) {
      case "size": {
        s == null || s.setAttribute("style", "{width: newValue || DEFAULT_SIZE, height: newValue || DEFAULT_SIZE}");
        break;
      }
      case "fill": {
        e == null || e.setAttribute("fill", r || n);
        break;
      }
      case "stroke": {
        e == null || e.setAttribute("stroke", r || d);
        break;
      }
    }
  }
  connectedCallback() {
    const t = document.createElement("div");
    t.setAttribute("class", "wrapper");
    const o = document.createElement("div");
    o.setAttribute("class", "bg");
    const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("viewBox", "0 0 37.041667 37.041667"), r.setAttribute("class", "lighthouse"), r.innerHTML = `<g transform='translate(-10.311717,-4.1193979)'>
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
    const s = new c();
    s.setAttribute("size", "100%"), s.setAttribute("class", "btcLogo");
    const e = document.createElement("style");
    console.log(e.isConnected), e.textContent = `
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
        height: ${this.getAttribute("size") || l};
        width: ${this.getAttribute("size") || l};
        overflow: hidden;
        border-radius: 9999px;
      }
      
      .bg {
        position: absolute;
        inset: -15%;
        top: -40%;
        background-color: ${this.getAttribute("fill") || n};
        background-image: repeating-conic-gradient( from 0deg,#F7931A 0deg 12deg, transparent 12deg 22.5deg);
        animation: lightfire-rotate 5s linear infinite;
      }

      .lighthouse {
        position: absolute;
        inset: 0;
        z-index: 3;
        fill: ${this.getAttribute("fill") || n};
        color: ${this.getAttribute("stroke") || d};
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
    `, t.appendChild(e), t.appendChild(o), t.appendChild(r), t.appendChild(s), this.shadowRoot.appendChild(t);
  }
};
customElements.define("bbt-logo", y);
export {
  y as default
};
