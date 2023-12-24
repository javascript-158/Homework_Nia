function loadButton(){
    return new Promise ((resolve, reject)=>{
        const fileInput = document.getElementById("fileInput");
        const file = fileInput.files[0];

        if(file){
            const reader=new FileReader();
            reader.readAsText(file);
            reader.onload=function(content){
                document.getElementById("textArea").value = content.target.result;
            }
        }else{
            reject("No file selected bro");
        }
    })
}
