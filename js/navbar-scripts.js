// hack to load sidebar tree
document.addEventListener("readystatechange", loadTree);

function loadTree() {
    var loadbtn = document.getElementById('load-tree');
    loadbtn.setAttribute('hidden', 'true');
    loadbtn.click();
}


function fadeBg(event) {
    let shadowEl = document.getElementById('shadow');
    if (event.target.classList.contains('nav-link')) 
        shadowEl.style.display = 'block';
    else 
        shadowEl.style.display = 'none';
}

function hideAlgoliaPopUp(el) {
    if (!el.target.classList.contains('algolia-autocomplete') && el.target.getAttribute('type') !== 'search') {
        let autocompleteEl = document.getElementsByClassName('ds-dropdown-menu')[0];
        autocompleteEl.style.display = 'none';
    }
}

localStorage['openNav'] = true;

function openNav() {

    setTimeout(() => {
        if (localStorage['openNav'] === 'true') {
            console.log('ok')
            if (!document.getElementById('js-bootstrap-offcanvas').classList.contains('in'))
                document.getElementById('js-bootstrap-offcanvas').classList.add('in');
        }
    }, 10)
}
//document.addEventListener("DOMContentLoaded", openNav);

document.body.addEventListener("click", hideAlgoliaPopUp);
document.getElementById('navbarDropdownMenuLink').addEventListener('click', fadeBg);
document.body.addEventListener('click', fadeBg);
