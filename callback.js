let div = document.querySelector("#container");
let h2 = document.createElement("h2");
h2.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12");
div.append(h2);
h2.textContent = "10";


  setTimeout(() => {
    h2.textContent = "9";
    setTimeout(() => {
      h2.textContent = "8";
      setTimeout(() => {
        h2.textContent = "7";
        setTimeout(() => {
          h2.textContent = "6";
          setTimeout(() => {
            h2.textContent = "5";
            setTimeout(() => {
              h2.textContent = "4";
              setTimeout(() => {
                h2.textContent = "3";
                setTimeout(() => {
                  h2.textContent = "2";
                  setTimeout(() => {
                    h2.textContent = "1";
                    setTimeout(() => {
                      h2.setAttribute("style", "font-size:80px;font-style:italic");
                      h2.textContent = "Happy Women's Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);



