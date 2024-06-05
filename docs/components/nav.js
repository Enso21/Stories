class Nav extends HTMLElement {
  constructor() {
    super()
  }


  connectedCallback() {
    this.innerHTML = `
    <div class="left-nav">
    <nav class="header-wrapper">
      <div class="header-info">
        <span class="header-info-logo">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/1999/xlink"> <a xlink:href="index.html">
            <path
              d="M969.5 485C969.5 752.582 752.582 969.5 485 969.5C217.418 969.5 0.5 752.582 0.5 485C0.5 217.418 217.418 0.5 485 0.5C752.582 0.5 969.5 217.418 969.5 485Z"
              fill="#14213D" stroke="#14213D" />
            <rect x="539.464" y="142.659" width="293" height="35" transform="rotate(34.43 539.464 142.659)" fill="white"
              stroke="white" />
            <path
              d="M630.588 265.136L629.913 264.674L518.488 188.294L506.085 206.386L524.318 218.885L523.194 240.798L508.268 242.299L502.797 250.281L595.989 314.163L596.664 314.626L689.856 378.507L695.328 370.525L691.345 356.062L711.378 347.111L729.611 359.609L742.013 341.517L630.588 265.136Z"
              fill="white" />
            <path
              d="M629.913 264.674L742.013 341.517L729.611 359.609L711.378 347.111L691.345 356.062L695.328 370.525L689.856 378.507L595.989 314.163M630.588 265.136L518.488 188.294L506.085 206.386L524.318 218.885L523.194 240.798L508.268 242.299L502.797 250.281L596.664 314.626"
              fill="white" stroke="white" />
            <path
              d="M673.121 392.496L584.041 331.433L441.56 539.287L434.636 560L265.016 807.446C314.232 755.103 352.505 679.609 547.356 659.091C557.688 560.849 596.553 479.434 673.121 392.496Z"
              fill="white" stroke="white" />
            <path
              d="M495.785 270.935L584.865 331.998L442.385 539.852L425.563 553.781L255.943 801.226C287.013 736.445 343.624 673.521 292.488 484.383C380.392 439.316 442.312 373.705 495.785 270.935Z"
              fill="white" stroke="white" />
            <circle cx="438.733" cy="543.411" r="14" transform="rotate(34.43 438.733 543.411)" fill="#14213D" />
            </a>
          </svg>
        </span>
        <span class="header-info-text">Stories</span>
      </div>
    </nav>
    <ul class="left-nav-list">
      <li>
        <a href="index.html">
          <h1 class="nav-title">About</h1>
        </a>
        <ol class="nav-subheading">
          <li class="nav-item"> <a href="cardinals.html">
              <h2 class="nav-subtitle">Cardinals</h2>
            </a></li>
          <li class="nav-item"> <a href="no-context.html">
              <h2 class="nav-subtitle">No Context</h2>
            </a></li>
          <li class="nav-item"> <a href="quotes.html">
              <h2 class="nav-subtitle">Book Quotes</h2>
            </a></li>
          <li class="nav-item"> <a href="ryan-quotes.html">
              <h2 class="nav-subtitle">Ryan Quotes</h2>
            </a></li>
          <li class="nav-item"> <a href="charlotte-quotes.html">
              <h2 class="nav-subtitle">Charlotte Quotes</h2>
            </a></li>
        </ol>
        </a>
      </li>
    </ul>
  </div>
`;
  }
}

customElements.define('nav-component', Nav);