$(document).ready(function() {
    var $Dojo = function(element) {
        this.doc_element = document.getElementById(element);
        this.click = function (callback) {
            this.doc_element.addEventListener("click", callback);
        };

        this.hover = function (param1, param2) {
            this.doc_element.addEventListener("mouseover", param1);
            this.doc_element.addEventListener("mouseout", param2);
        };
        return this;
    };
    var run = (function() {
        $Dojo("button").click(function() { console.log("The button was clicked!"); });
        $Dojo("otherButton").hover(function() { console.log("The button was hovered on!"); }, function() {console.log("The button is no longer hovered on"); } );
    });
});
