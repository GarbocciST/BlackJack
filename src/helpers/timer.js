import Swal from "sweetalert2";


    

    export const timer = ( valuePlayer) => {
            setTimeout(() => {
                
                if (valuePlayer > 21 ) {
                  return Swal.fire({
                        icon: 'error',
                        title: 'Derrota',
                        text: 'Perdiste, juego terminado',
                    })
                }
            }, 950);
        } 

  
    //! Botones de disable
  //! Nuevo estado que active useEffect para la alerta con setTimeout con cleanUp
  // useEffect(() => {
  //   : ""
    
  // }, [isFinished]);
  


  
  
  // if ( valuePlayer <= 21 && valuePlayer > valueBank && valueBank > 0 ) {

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Victoria',
  //     text: 'Ganaste, juego terminado',
  //   })
  // }

  // if ( valuePlayer > 21) {
 
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Derrota',
  //     text: 'Perdiste, juego terminado',
  //   })
  // }
