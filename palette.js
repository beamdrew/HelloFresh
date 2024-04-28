    function _class(name){
        return document.getElementsByClassName(name);
    }
    let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
    for(let i=0;i<tabPanes.length;i++){
        tabPanes[i].addEventListener("click", function(){
            _class('tab-header')[0].getElementsByClassName("active")
            [0].classList.remove("active");
            tabPanes[i].classList.add("active");

            _class('tab-content')[0].getElementsByClassName("active")
            [0].classList.remove("active");
             _class('tab-content')[0].getElementsByTagName("div")
            [i].classList.add("active");
        });
    }
      function addItem() {
        var input = document.getElementById("addItemInput");
        var item = input.value.trim();
        if (item !== "") {
            var list = document.getElementById("dislikesList");
            var listItem = document.createElement("li");
            listItem.textContent = item;
            var removeButton = document.createElement("button");
            removeButton.textContent = "-";
            removeButton.onclick = function() {
                list.removeChild(listItem);
            };
            listItem.appendChild(removeButton);
            list.appendChild(listItem);
            input.value = "";
        }
    }