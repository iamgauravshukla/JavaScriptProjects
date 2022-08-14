const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', e=>{
    e.preventDefault();
    downloadBtn.innerText = "Downloading file..";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    // fetching file & returning as blob
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click(); //Click to download
        aTag.remove(); //after download remove it
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download File";

    }).catch(()=>{
        downloadBtn.innerText = "Download File";
        alert("Failed to download file!");
    })
}