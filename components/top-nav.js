class TopNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .topnav {
          overflow: hidden;
          background-color: #53CD8A;
          padding: 10px;
        }
        
        .topnav a {
          float: left;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }
        
        .topnav a:hover {
          background-color: #6C9B7D;
          color: black;
        }
        
        .topnav a.active {
          background-color: #386C5F;
          color: white;
        }
        
        .topnav-right {
          float: right;
        }
      </style>

      <div class="topnav">
        <a href="/index.html">Home</a>
        <div class="topnav-right">
          <a href="/Kinderen/home_kinderen.html">Kinderen</a>
          <a href="/Ouders/home_ouders.html">Ouders</a>
        </div>
      </div>
    `;
  }
}

customElements.define("top-nav", TopNav);
