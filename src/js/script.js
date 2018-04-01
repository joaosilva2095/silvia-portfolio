/**
 * Setup the javascript
 */
function setup() {
    // mobile menu slide from the left
    $('[data-toggle="slide-collapse"]').on('click', slideCollapse);
}

$(document).ready(setup);