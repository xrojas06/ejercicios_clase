 
   	function longitud() { //por declaración
        let palabra=document.getElementById('palabra').value
        let text=palabra.length		        
        alert("Su palabra tiene "+text+" letras");
   	}

   	let mayusculas=function() { //función anónima
        let palabra=document.getElementById('palabra').value
        let text=palabra.toUpperCase()
        alert("Su palabra en mayúsculas "+text+" !");   
   	}

   	let minusculas=function minusculas() { //por expresión
        let palabra=document.getElementById('palabra').value
        let text=palabra.toLowerCase()
        alert("Su palabra en minúsculas "+text);   
   	}

   	function primercar() {
        let palabra=document.getElementById('palabra').value
        let text=palabra.substring(0,1)
        alert("La inicial de su palabra es "+text);   
   	}

    function concatenar(){
      let palabra=document.getElementById('palabra').value
      let palabra2=document.getElementById('palabra2').value
      let text=palabra.concat(" ",palabra2)
      alert("Las palabras unidas son "+text);    
    }

