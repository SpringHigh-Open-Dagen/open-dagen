class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          display: grid;
          grid-template-areas:
            'footer-left footer-middle footer-right';
          grid-gap: 10px;
          border-radius: 25px;
          width: 100%;
          background-color:#14715D;
          padding: 20px 0px;
          text-align: center;
          text-decoration: none;
          color: white;
        }

        .footer a {
          color: white;
        }

        .footer-left {
          grid-area: footer-left;
        }

        .footer-middle {
          grid-area: footer-middle;
        }

        .footer-right {
          grid-area: footer-right;
        }
      </style>

      <div class="footer">
        <div class="footer-left">
          Herman Poortstraat 17, 1064 BR Amsterdam<br>
          Telefoon: <a href="tel:+31205893038">020 5893038</a><br>
        </div>
        <div class="footer-middle">TEXT TEXT TEXT</div>
        <div class="footer-right"><a href="mailto:info@springhigh.nl">info@springhigh.nl</a></div>
      </div>
      `;
  }
}

customElements.define("sh-footer", Footer);
