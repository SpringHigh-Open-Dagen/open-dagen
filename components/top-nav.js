class TopNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .topnav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background-color: #00cd86;
        }

        .topnav-push-right {
          margin-left: auto;
        }

        .topnav-text-link a {
          color: white;
          text-align: center;
          // padding: 14px 16px;
          padding: 10px 10px;
          text-decoration: none;
          font-size: 17px;
        }
        
        .topnav-text-link a:hover {
          background-color: #00cd86;
          color: black;
        }
        
        .topnav-text-link a.active {
          background-color: #14715D;
          color: black;
        }

        a img {
          padding: 0px 0px;
        }

        /*Simple css to style it like a toggle switch*/
        .theme-switch {
          display: inline-block;
          height: 34px;
          position: relative;
          width: 60px;
          margin-right:10px;
        }
        
        .theme-switch input {
          display:none;
        }
        
        .slider {
          background-color: #ccc;
          bottom: 0;
          cursor: pointer;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: .4s;
        }
        
        .slider:before {
          background-color: #fff;
          bottom: 4px;
          content: "";
          height: 26px;
          left: 4px;
          position: absolute;
          transition: .4s;
          width: 26px;
        }
        
        input:checked + .slider {
          background-color: #66bb6a;
        }
        
        input:checked + .slider:before {
          transform: translateX(26px);
        }
        
        .slider.round {
          border-radius: 34px;
        }
        
        .slider.round:before {
          border-radius: 50%;
        }
      </style>

      <div class="topnav">
        <a href="/index.html"><img src="/images/logo_3.png" width="200"></a>
        <div class="topnav-text-link">
          <a href="/index.html">Home</a>
          <a href="/leerlingen/home_leerlingen.html">Leerlingen</a>
          <a href="/ouders/home_ouders.html">Ouders</a>
          <a href="/online-lessen/lessen.html">Kraampjes</a>
          <a href="/SH-team/team.html">Ons team</a>
          <a href="/projecten/projecten.html">Projecten</a>
          <a href="/quiz/quiz.html">Quiz</a>
          <a href="/faq/home_faq.html">FAQ</a>
        </div>
        <div class="topnav-push-right">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
          </label>
        </div>
      </div>
    `;
  }
}

customElements.define("top-nav", TopNav);



// code for dark mode
window.onload = function () {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
}
