function pixiv_images() {
    var img_html = '';
    for (var i = 1; i <= 50; i++) {
        img_html += '<img class="nya-btn hot badge" src="./pixiv_images/aibianse_com_' + i + '.webp" referrerpolicy="no-referrer" alt="爱变色"/></br>';
    }
    $('#pixiv_images').html(img_html);
}
