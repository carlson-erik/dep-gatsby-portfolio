// attaches all needed event listeners
function attachListeners(){
    var intervalID = window.setInterval(switchRoleElement, 1500);
}

// handles incrementing all of the z-indexes for role elements; this does the switch of the "role" in header
function switchRoleElement() {
    // if we haven't gotten the role elements, do that now
    if(!this.roleElements){
        this.roleElements = document.getElementsByClassName('role');
    }
    // if we haven't started increasing the z-index of the role elements, start the the first
    if(!this.roleIndex){
        this.roleIndex = 0;
    }
    // get current index in the array
    var currentIndex = this.roleIndex % this.roleElements.length;
    // get current element
    var currentElement = this.roleElements.item(currentIndex);
    // increment roleIndex
    this.roleIndex += 1;
    // use new roleIndex as z-index (z will always be > 1 )
    currentElement.style.zIndex = this.roleIndex;
}

// run immediately
(function(){
    document.addEventListener('DOMContentLoaded', attachListeners, false);
}());