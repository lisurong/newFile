$(document).ready(function(){
    //初始化
     var html = template('tpl', {
        type: 'shell', // file or shell,
        display: 'none'
    });
    $('#n_boxs').append(html);

    //选择新增任务
    $(document).on('click', '.add_rw', function(){
        var display = $(this).siblings('.rw_xl').css('display');
        if(display == 'none'){
            $(this).siblings('.rw_xl').css('display','block');
        }else{
            $(this).siblings('.rw_xl').css('display','none');
        }
    })

    //点击添加文件
    $(document).on('click', '.add_by_file', function(){
        $('.rw_xl').css('display','none');
        var html = template('tpl', {
            //如果需要初始化数据，在这添加更多
            type: 'file', // file or shell
            display: 'none'
        });
        $('#n_boxs').append(html);
    })
    //点击添加脚本
    $(document).on('click', '.add_shell', function(){
        $('.rw_xl').css('display','none');
        var html = template('tpl', {
            type: 'shell', // file or shell,
            display: 'none'
        });
        $('#n_boxs').append(html);
    })

    //点击脚本名称，编辑，展开收起
    $(document).on('click', '.shell_name,.n_bj,.n_zk', function(){
        $('.n_child').hide();
        $(this).parents('.body_span').find('.n_child').show();
    })
    //添加节点
    $(document).on('click', '.n_add', function(){
        var type = $(this).hasClass('file');
        //console.log(type);
        if(type){
            var html = template('tpl-file', {
                display: 'none'
            });
            $(this).parents('.n_body').find('.body_bt').before(html);
        }else{
            var html = template('tpl-shell', {
                display: 'none'
            });
            $(this).parents('.n_body').find('.body_bt').before(html);
        }
    })
    //添加本地文件
    $(document).on('click', '.local', function(){
        var html = template('local');
        $('.tr-none').hide();
        $('.local-table').append(html);
    })
    //添加服务器文件
    $(document).on('click', '.service', function(){
        var html = template('service');
        $('.tr-none').hide();
        $('.local-table').append(html);
    })
    //脚本名称切换显示
    $(document).on('click', '.n_btn label', function(){
        var attr = $(this).attr('attr');
        if(attr=='1'){
            $('.n_concent ').find('.n_radio').hide();
        }else{
            $('.n_concent ').find('.n_radio').hide();
            $('.n_concent ').find('.idx-'+attr).show();
        }
    })
    //选择服务器
    $(document).on('click', '.chose', function(){
        $('.dzsw-pop').show();
    })
    //关闭
    $('.m-pop-close,.btn-cancel').click(function(){
        $('.dzsw-pop').hide();
    });
})