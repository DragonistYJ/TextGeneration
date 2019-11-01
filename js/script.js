(function ($) {
    $(document).ready(function () {
        $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
        $('#cssmenu #menu-button').on('click', function () {
            var menu = $(this).next('ul');
            if (menu.hasClass('open')) {
                menu.removeClass('open');
            } else {
                menu.addClass('open');
            }
        });
    });
})(jQuery);

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return en2ch(pair[1]);
        }
    }
    return false;
}

function en2ch(v) {
    switch (v) {
        case 'cangtou':
            return '藏头诗';
        case 'keyword':
            return '关键词';
        case 'sports':
            return '体育新闻';
        case 'weather':
            return '天气预报';
        case 'novel':
            return '小说';
        case 'prose':
            return '散文';
    }
}


