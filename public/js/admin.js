$(function () {
    $('.del').click(function (e) {
        var target= $(e.target);
        var id=target.data('id');
        var tr=$('.item-id-'+id);
        console.log(e);
        $.ajax({
            type:'DELETE',
            url:'/admin/list?id='+id
        })
            .done(function (results) {
                if(results.success === 1){
                    if(tr.length>0){
                        tr.remove();
                    }
                }
            })
    })
    tinymce.init({
        selector: '#tinymceEditer',
        branding: false,
        elementpath: false,
        height: 460,
        language: 'zh_CN.GB2312',
        menubar: 'edit insert view format table tools',
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
            'searchreplace visualblocks visualchars code fullpage',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons paste textcolor colorpicker textpattern imagetools codesample'
        ],
        toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
        autosave_interval: '20s',
        image_advtab: true,
        table_default_styles: {
            width: '100%',
            borderCollapse: 'collapse'
        },
        setup: function (editor) {
            editor.on('init', function (e) {
                if ($('.hidden-content').length) {
                    tinymce.get('tinymceEditer').setContent($('.hidden-content')[0].value);
                }
            });
            // editor.on('keydown', function (e) {
            //     localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
            // });
        }
    });
});