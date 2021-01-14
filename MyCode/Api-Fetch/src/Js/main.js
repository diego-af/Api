const cep = document.querySelector('#cep')


const showData = (result)=>{

    for(const campos in result){
        if(document.querySelector("#"+campos).value = result[campos]){

    }
} 

cep.addEventListener('blur',(e)=>{
    let search = cep.value.replace("-","")

    const options = {
        methdod: 'GET',
        mode:'cors',
        cache:'default'
    }

    fetch(`http://viacep.com.br/ws/${search}/json`,options)
    .then(response=> response.json())
    .then(data => showData(data))
})



const showData = (result)=>{
    for(const campos in result)
    if(document.querySelector('#'+campos)){

    document.querySelector("#"+campos).value = result[campos]
    }
}

        cep.addEventListener('blur',(e)=>{
        let search = cep.value.replace("-","")
        const options={
            method:'GET',
            mode:'cors',
            cache:'default'
        }

        fetch(`http://viacep.com.br/ws/${search}/json`,options)
        .then(response=>{response.json()
            .then(data=>showData(data))

        })
        .catch(e=>console.log("Deu erro" + e.message))

        
        })
        