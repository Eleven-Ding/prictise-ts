//有些时候一些属性是可选的，比如我们在写组件的时候后，用户可以选择传一些数据，可以选择不传。

interface imgType {
    src: string;
    alt: string;
    title?: string;
    onError?: () => void
}

function createImgElement(imgObj: imgType) {
    const img = new Image();
    img.src = imgObj.src;
    img.setAttribute("alt", imgObj.alt)
    img.setAttribute("title", imgObj.title || "");
    img.onerror = function () {
        imgObj.onError && imgObj.onError()
    }
}

createImgElement({src:"https",alt:'图片加载错误'})