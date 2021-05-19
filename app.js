const imgnames = [
    "1621321673520.jpg",
    "1621321673560.jpg",
    "1621321673568.jpg",
    "1621321673572.jpg",
    "1621321673614.jpg",
    "1621321673617.jpg",
    "1621321673657.jpg",
    "1621321673692.jpg",
    "1621321673700.jpg",
    "1621321673798.jpg",
    "1621321673800.png"
]

const inimgname = [
    "Shraddha Kapoor",
    "Jennifer Lawrence",
    "Emma Watson(Edited)",
    "Elle Fanning",
    "Alexendra Dadrio",
    "Maisee Williams",
    "Amber Heard",
    "Elizabeth Olsen",
    "Mary Mouser",
    "Rasmika Mandanna",
    "Tinna Dutta"
]

const choosed_files = []

const container = document.querySelector(".container")
let counter = 0;
imgnames.forEach(src => {
    const html = `
        <div>
            <input type='checkbox' data-index='${counter}'>
            <img src='imgs/${src}' onclick="checkornot('${counter}')">
            <button onclick="showimg('imgs/${src}')">Preview</button>
            <strong>${inimgname[counter]}</strong>
        </div>
    `
    container.innerHTML += html
    counter++;
})

let isShow = false
const showimg = (src)=>{
    const box = document.querySelector(".boxes")
    box.classList.add("showing")
    const img = box.querySelector("img")
    img.src = src
    isShow = true
}

const checkornot = index => {
    const checkbox = document.querySelector(`input[data-index='${index}']`)
    if(checkbox.checked){
        checkbox.checked = false
    }else{
        checkbox.checked = true
    }
}
document.addEventListener("dblclick", (e)=>{
    if(isShow){
        if(e.target.classList.contains("showing")){
            document.querySelector(".showing").classList.remove("showing");
            isShow = false
        }
    }
    if(e.target.classList.contains("progress")){
        document.querySelector(".progress").classList.remove("active")
    }
})

const download = ()=>{
    const all_checkedBox = document.querySelectorAll("input:checked")
    if(all_checkedBox.length > 0){
        all_checkedBox.forEach(inp => {
            const index = inp.getAttribute(['data-index'])
            const filename = imgnames[index]
            choosed_files.push(`imgs/${filename}`)
        })
        get_downloaded();
    }
}

let filesname;
const get_downloaded = ()=>{
    $.post("./downloader.php", {
        files: choosed_files
    }, (data, status)=>{
        filesname = data
        download_loaded(data)
    })
}

const download_btn = document.querySelector(".downloading_btn")
const download_loaded = (filename)=>{
    console.log(filename);
    const xhr = new XMLHttpRequest()
    xhr.responseType = "blob"
    xhr.open("GET", filename, true)
    xhr.send()
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            const obj = window.URL.createObjectURL(xhr.response)
            download_btn.href = obj
            download_btn.download = filename
            setTimeout(()=>{
                window.URL.revokeObjectURL(obj)
            }, 60*1000)
        }
    })
    xhr.addEventListener("progress", progress_handle, false)
    xhr.addEventListener("load", onload_handler, false)
    xhr.addEventListener("error", error_handler, false)
}

const bar = document.querySelector(".progress")

const progress_handle = (event)=>{
    bar.classList.add("active")
    const total = (event.loaded / event.total) * 100
    document.querySelector(".percent").textContent = total
    const circle = document.querySelector(".circle")
    circle.style.strokeDashoffset = `calc(440 - (440 * ${total})/100)`
}

const onload_handler = (event)=>{
    document.querySelector(".percent").textContent = "100"
    const circle = document.querySelector(".circle")
    circle.style.strokeDashoffset = `calc(0)`
    download_btn.click()
    console.log(event);
    $.post("remove.php", {
        filesname
    }, (data, status)=>{
        console.log(data);
    })
}

const error_handler = (event)=>{
    console.log("Error Occured");
}