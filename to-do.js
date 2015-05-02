document.getElementById("add").onclick = function() {
    // Function to create list ("li") element in HTML on user's click on button.

    var list = document.getElementById("list"); // Store <ul> in variable.

    var newItem = document.getElementById("input").value; // Store the user input in variable.

    var listElement = document.createElement("li"); // Create list element.

    var text = document.createTextNode(newItem); // Create text node.

    listElement.appendChild(text); // Add text node to "li" element.

    if (newItem) {
        list.insertBefore(listElement, list.firstChild);
    };
    // Function to remove selected list item.
    listElement.onclick = function () {
        this.remove();
    }

}
