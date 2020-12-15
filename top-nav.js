class TopNav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
      
         .topnav {
            overflow: hidden;
            background-color: #52A68F;
            padding: 10px;
            border-radius: 25px;
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
            background-color: #52A68F;
            color: black;
          }
          
          .topnav a.active {
            background-color: #14715D;
            color: black;
            border-radius: 25px;
          }
          
          .topnav-right {
            float: right;
          }

          /*Simple css to style it like a toggle switch*/
          .theme-switch-wrapper {
            display: flex;
            align-items: center;
            float: right;
            margin-top: 6px;
       
            
              em {
                margin-left: 10px;
                font-size: 1rem;
              }
            }
            .theme-switch {
              display: inline-block;
              height: 34px;
              position: relative;
              width: 60px;
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
          <a href="index.html">Home</a>
          <div class="topnav-right">
          <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
         <div class="slider round"></div>
        </label>
        </div>
            <a href="Kinderen/home_kinderen.html">Kinderen</a>
            <a href="Ouders/home_ouders.html">Ouders</a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("top-nav", TopNav);