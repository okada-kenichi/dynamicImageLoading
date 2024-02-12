function dynamicImageLoader(id, func) {
    document.addEventListener("click", function (e) {
        var imageUrl = $(e.target).data("image_url");
        if (imageUrl) {
            $.ajax({
                url: imageUrl,
                cache: false,
                xhr: function () {
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = "blob";
                    return xhr;
                },
                success: function (data) {
                    var imageArea = document.querySelector("#" + id);
                    var URL = window.URL || window.webkitURL;
                    imageArea.src = URL.createObjectURL(data);
                    if (func) {
                        func(data);
                    }
                    return;
                },
                error: function (error) {
                    // エラー処理
                    console.log(error);
                    return;
                },
            });
        }
        return;
    });
}
