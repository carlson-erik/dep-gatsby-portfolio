// This function attaches all needed event listeners
function attachListeners(){
    console.log("this is where I will be attaching listeners")
    var intervalID = window.setInterval(incrementNextIndex, 1500);
}

function incrementNextIndex() {
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
    
    currentElement.style.zIndex = this.roleIndex;

    console.log("incrementNextIndex ", currentElement, "something new", this.roleIndex++);

}

(function(){
    document.addEventListener('DOMContentLoaded', attachListeners, false);
}());