export function showToast(operation,id){
    const toast = document.createElement("div");
    toast.classList.add("toast");


    if(operation === "add"){
        toast.textContent = `Product with ID ${id} has been Added.`;
    }else{
        toast.textContent = `Product with ID ${name} has been Deleted.`;
    }
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    },2000)
}