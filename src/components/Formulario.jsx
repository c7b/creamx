import { useState, useEffect } from "react";
import Error from "./Error";

//const [cliente, setCliente] = useState({});

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);


  useEffect(() => {
    if( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enviando formulario");
    //VALIDACION del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
        console.log('Hay un espacio vacio');
        setError(true);
        return;
    }
    setError(false);

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id ){
      //Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( 
        pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
        setPacientes(pacientesActualizados)
        setPaciente({}) //limpia el state


    } else {
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

  
    //reinciar form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  };



  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y{" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>


        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-20"
        >
          <div className="mb-5">

          {error && <Error><p>Todos los campos son obligatorios</p></Error>}


            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="mascota"
            >
              Nombre Mascota
            </label>
            <input
              type="text"
              id="mascota"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            >
              Nombre Propietario
            </label>

            <input
              type="text"
              id="propietario"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email de Contacto"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           />
          </div>

          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="alta"
            >
              Alta
            </label>
            <input
              type="date"
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="Sintomas"
            >
              Sintomas
            </label>
            <textarea
              name=""
              id="Sintomas"
              cols="30"
              rows="10"
              placeholder="Describe los sintoams"
              className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md
          hover:bg-indigo-700 cursor-pointer transition-all"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </form>
      </div>
    </>
  );
}

export default Formulario;
