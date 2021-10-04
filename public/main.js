$(document).ready(function() {
    let bodyHeight = $(document).outerHeight()
    let footerheight = $('#footer').outerHeight()

    let bodyWrapperHeight = bodyHeight - footerhdeight
    $('#body-wrapper').css('height',`${bodyWrapperHeight}px`)
})