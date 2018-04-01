/**
 * Slide collapse navigation bar
 */
function slideCollapse() {
    console.log('here');
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width': 'toggle'}, 350);
}
