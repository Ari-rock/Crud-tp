const { createApp } = Vue  //creo un objeto VUE llamdo createApp
createApp({
  data() {  // define los datos de VUE
    return {
      url: '#',
      datos: [],
      nombre: "",
      precio: 0,
      stock: 0,
      imagen: ""
    }
  },
  methods: {  // define los métodos o funciones
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.datos = data
        })
        .catch(error => alert("Ups... se produjo un error: " + error))
    },
    eliminar(id) {
      const url = this.url + "/" + id;
      var options = {
        method: 'DELETE',
      }
      fetch(url, options)
        .then(res => res.text()) // or res.json()
        .then(res => {
          alert("Registro Eliminado")
          location.reload();
        })


    },
    grabar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen
      }
      var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      }
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado")
          window.location.href = "./productos.html";  // recarga productos.html
        })
        .catch(err => {
          console.error(err);
          alert("Error al Grabar")  // puedo mostrar el error tambien
        })


    }

  },
  created() {  // llama a los métodos que se tienen que ejecutar al inicio
    this.fetchData(this.url)
  }

}).mount('#app')
