$(function() {
    $.get('https://v1.hitokoto.cn', function(res){
        console.log(res)
        $('#hitokoto_text').text(res.hitokoto)
        var from = '';
        // if(res.from != ''){
        //     from += '《' + res.from + '》'
        // }
        if(res.from_who != ''){
            from += ' ' + res.from
        }
        var from_html = ''
        if(from != ''){
            from_html = '——' + from
            $('#hitokoto_from').html(from_html)
        }
    });
})

