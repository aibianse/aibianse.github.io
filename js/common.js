function pixiv_images() {
    var img_html = '';
    for (var i = 1; i <= 50; i++) {
        img_html += '<img class="nya-btn hot badge" src="./pixiv/pixiv_data/hentai_illust/aibianse_com_' + i + '.webp" referrerpolicy="no-referrer" alt="爱变色Pixiv Hentai Illust"/></br>';
    }
    $('#pixiv_images').html(img_html);
}
function xhentai_video() {
    $.get("https://aibianse.github.io/file/xhentai_data.json", function (data) {
        var video_url = data.video_url
        let dom = document.getElementById('xhentai_video')
        dom.src = video_url
    }, "json");
}
