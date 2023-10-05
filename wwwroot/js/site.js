window.downloadAsPng = function (svgId) {
    var svgElement = document.querySelector('#' + svgId);

    html2canvas(svgElement).then(function (canvas) {
        var link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'azure icon.png';
        link.click();
    });
} 