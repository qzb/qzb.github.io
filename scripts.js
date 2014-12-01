$(document).on('ready', function () {
    $('.links a')
    .on('mouseover', function (ev) {
        var bg = $(ev.target).data('bg');
        $('.background').removeClass('on');
        $('.background.' + bg).addClass('on');
     })
    .on('mouseout', function () {
        $('.background.default').addClass('on');
    });

    $('#mail').attr('href', ['mai', 'lto:', 'hello', '@', 'qzb', '.', 'me'].join(''));
});
