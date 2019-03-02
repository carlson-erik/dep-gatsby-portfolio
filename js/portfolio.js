var currentContentClass = 'greeting';


// This function hides the first element with the passed class
function hideContent(contentClass){
    document.getElementsByClassName(contentClass)[0].classList.add('hidden');
}

// This function shows the first element with the passed class
function showContent(contentClass){
    document.getElementsByClassName("hidden " + contentClass)[0].classList.remove('hidden');
}

// This function handles which of the content elements should be shown/hidden
function handleContent(newClass){
    if( newClass !== currentContentClass){
        // hide old content
        hideContent(currentContentClass);
        // assign new current content class
        currentContentClass = newClass;
        // show new content
        showContent(currentContentClass);
    }
}

//
function onNavItemClick(event){
    var linkElement = null;
    if(event.target && event.target.parentElement ){
        // get the target element
        linkElement = event.target;
        // if the target element is the icon, we'll be editing the parent element
        if( linkElement.classList && linkElement.classList[0] === 'fas'){
            linkElement = event.target.parentElement;
        }
        // Get the current active nav element and remove the active id
        var currentActive = document.getElementById('active');
        if (currentActive) {
            currentActive.id = '';
        }

        // Add active id to clicked element
        linkElement.id = 'active';

        // show the correct content
        handleContent(linkElement.attributes['data-id'].value);
    }
}

// This function attaches all needed event listeners
function attachListeners(){
    // Get reference to navigation bar
    var navBar = document.getElementsByTagName("nav")[0];
    // Add click event for navigation handling 
    navBar.addEventListener("click", onNavItemClick, false);
}


// On load of page, attach all event listeners
document.addEventListener('DOMContentLoaded', attachListeners, false);