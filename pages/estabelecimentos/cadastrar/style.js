
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        *

            .field{
                display: flex;
                justify-content: center;
                padding: 0.5rem;
                margin: 0.5rem;
            }

            form {
                width: 600px;
                margin: 20px auto;
                padding: 20px 0 ;
                background: #ab956d;
                border-radius: 20px;
                text-align: center;
                top: 10rem;
            }
            
            .field div {
                display: flex;
                margin: 25px, 25px, 25px, 25px;
                justify-content:space-around;
                align-items: center;
                width: 25%;
                height: 2.0rem;
            }
            
            .field input{
                border-radius: 15px;
                border-width: 0.1rem;
                border-color: #f1f0ec;
                height: auto;
                width: 50%;
                transition: 0.3s;
                color:rgb(10, 29, 116);
            
            }
            
            .field input:hover{
                border-color: #caae7a;
                border-width: 0.3rem;
            
            }
            
            .field input:focus{
                border-color: #caae7a;
                border-width: 0.3rem;
                background-color: #f5e9d2;
            
            }
            
            .field input::placeholder{
            color: rgb(207, 208, 209);
            font-size: 0.8rem;
            font-style: italic;
            }
            
            
            .label-container{
                display: flex;
                justify-content:space-around;
                align-items: baseline;
                font-size: 1.5rem;
                justify-content: center;
            }
            
            .label-element{
                color: rgb(207, 208, 209);
                text-align: left;
                width: 100%;
            }
            
            h1{
                position: relative;
                text-align: center;
                color: rgb(10, 29, 116);
            
            }
            
            
            #data-btn-enviar{
              margin-left: 6px;
              padding: 5px;
              background-color:  rgb(10, 29, 116);
              color:rgb(207, 208, 209);
              width: 10rem;
              height: auto;
              font-size: 1.2rem;
              font-weight:600;
              border-radius: 10px;
              border-width: 0.1rem;
            }
            
            
            .form-container{
                display: flex;
                flex-direction: column;
            }



            `;
            document.body.appendChild(style);
        })(); 