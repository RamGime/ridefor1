// import React from 'react';
// import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
// import { PieChart, LineChart } from 'react-native-chart-kit';

// const windowWidth = Dimensions.get('window').width;

// const fontSize = windowWidth < 400 ? 14 : 18;

// const viajesData = [
//   { fecha: '2022-10-01', viajes: 10 },
//   { fecha: '2022-10-02', viajes: 15 },
//   { fecha: '2022-10-03', viajes: 5 },
//   { fecha: '2022-10-04', viajes: 20 },
//   { fecha: '2022-10-05', viajes: 12 },
// ];

// const importeData = [
//   { fecha: '2022-10-01', importe: 100 },
//   { fecha: '2022-10-02', importe: 150 },
//   { fecha: '2022-10-03', importe: 50 },
//   { fecha: '2022-10-04', importe: 200 },
//   { fecha: '2022-10-05', importe: 120 },
// ];

// const coloresViajes = [
//   'rgba(255, 99, 132, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(54, 162, 235, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
// ];

// const coloresImporte = [
//   'rgba(255, 159, 64, 1)',
//   'rgba(255, 0, 0, 1)',
//   'rgba(0, 255, 0, 1)',
//   'rgba(0, 0, 255, 1)',
//   'rgba(128, 0, 128, 1)',
// ];

// const coloresLineChart = ['rgba(255, 99, 132, 1)'];

// const chartConfig = {
//   backgroundGradientFrom: '#fff',
//   backgroundGradientTo: '#fff',
//   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightgray', // Fondo claro para toda la pantalla
//   },
//   card: {
//     margin: 20,
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: 'white', // Fondo claro para la tarjeta
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tooltip: {
//     position: 'absolute',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     padding: 8,
//     borderRadius: 4,
//   },
// });

// export default function CombinedChartsComponent() {
//   const [tooltipData, setTooltipData] = React.useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     text: '',
//   });

//   const fadeIn = new Animated.Value(0);
//   const showTooltip = (x: number, y: number, text: string) => {
//     setTooltipData({ visible: true, x, y, text });
//     Animated.timing(fadeIn, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const hideTooltip = () => {
//     Animated.timing(fadeIn, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: false,
//     }).start(() => {
//       setTooltipData({ ...tooltipData, visible: false });
//     });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Gráfico de Número de Viajes</Text>
//         <TouchableOpacity
//           onPress={() => showTooltip(0, 0, 'Ejemplo de tooltip')}
//           style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}
//         >
//           <PieChart
//             data={viajesData.map((data, index) => ({
//               name: data.fecha,
//               population: data.viajes,
//               color: coloresViajes[index % coloresViajes.length],
//             }))}
//             width={windowWidth - 80} // Reducir el ancho para que quepa en la tarjeta
//             height={200}
//             chartConfig={chartConfig}
//             accessor="population"
//             backgroundColor="transparent"
//             paddingLeft="15"
//             center={[10, 10]}
//             absolute
//           />
//         </TouchableOpacity>
//         {tooltipData.visible && (
//           <Animated.View
//             style={[
//               styles.tooltip,
//               {
//                 left: tooltipData.x,
//                 top: tooltipData.y,
//                 opacity: fadeIn,
//               },
//             ]}
//           >
//             <Text style={{ color: 'white' }}>{tooltipData.text}</Text>
//           </Animated.View>
//         )}
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.title}>Gráfico de Importe Total</Text>
//         <TouchableOpacity
//           onPress={() => showTooltip(0, 0, 'Ejemplo de tooltip')}
//           style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}
//         >
//           <PieChart
//             data={importeData.map((data, index) => ({
//               name: data.fecha,
//               population: data.importe,
//               color: coloresImporte[index % coloresImporte.length],
//             }))}
//             width={windowWidth - 80} // Reducir el ancho para que quepa en la tarjeta
//             height={200}
//             chartConfig={chartConfig}
//             accessor="population"
//             backgroundColor="transparent"
//             paddingLeft="15"
//             center={[10, 10]}
//             absolute
//           />
//         </TouchableOpacity>
//         {tooltipData.visible && (
//           <Animated.View
//             style={[
//               styles.tooltip,
//               {
//                 left: tooltipData.x,
//                 top: tooltipData.y,
//                 opacity: fadeIn,
//               },
//             ]}
//           >
//             <Text style={{ color: 'white' }}>{tooltipData.text}</Text>
//           </Animated.View>
//         )}
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.title}>Gráfico de Línea</Text>
//         <TouchableOpacity
//           onPress={() => showTooltip(0, 0, 'Ejemplo de tooltip')}
//           style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}
//         >
//           <LineChart
//             data={{
//               labels: viajesData.map(data => data.fecha),
//               datasets: [
//                 {
//                   data: viajesData.map(data => data.viajes),
//                   color: (opacity = 1) => coloresLineChart[0],
//                 },
//               ],
//             }}
//             width={windowWidth - 80} // Reducir el ancho para que quepa en la tarjeta
//             height={200}
//             chartConfig={chartConfig}
//             bezier
//             style={{
//               marginVertical: 8,
//               borderRadius: 16,
//             }}
//           />
//         </TouchableOpacity>
//         {tooltipData.visible && (
//           <Animated.View
//             style={[
//               styles.tooltip,
//               {
//                 left: tooltipData.x,
//                 top: tooltipData.y,
//                 opacity: fadeIn,
//               },
//             ]}
//           >
//             <Text style={{ color: 'white' }}>{tooltipData.text}</Text>
//           </Animated.View>
//         )}
//       </View>
//     </ScrollView>
//   );
// }






//Intento de calificacion a los conductores 

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

// const DriverRatingScreen = () => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [ratingSubmitted, setRatingSubmitted] = useState(false); // Nuevo estado

//   const handleRating = async (newRating: number) => {
//     try {
//       setRating(newRating);

//       const response = await fetch('http://192.168.217.49:3000/api/driver-ratings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           driverId: 1, // Reemplaza con el ID del conductor que deseas calificar
//           userId: 2,   // Reemplaza con el ID del usuario que califica
//           rating: newRating,
//           comment: comment,
//         }),
//       });

//       // Añade estas líneas para registrar información adicional
//       console.log('Response Status:', response.status);
//       const responseData = await response.json();
//       console.log('Response Data:', responseData);

//       if (!response.ok) {
//         throw new Error('Error al enviar la calificación');
//       }

//       // Establece ratingSubmitted en true después del éxito
//       setRatingSubmitted(true);
//     } catch (error) {
//       console.error('Error al enviar la calificación:', error);
//       // Maneja el error, muestra un mensaje al usuario, etc.
//     }
//   };

//   const starSize = 70; // Tamaño de las estrellas (ajusta según tu preferencia)

//   const renderStars = (numStars: number) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <TouchableOpacity key={i} onPress={() => handleRating(i)}>
//           <Image
//             source={i <= numStars ? require('../../../../../../assets/estrella.jpg') : require('../../../../../../assets/estrellavaciajpg.jpg')}
//             style={{ width: starSize, height: starSize }}
//           />
//         </TouchableOpacity>
//       );
//     }
//     return stars;
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Califica al conductor</Text>
//       {ratingSubmitted ? (
//         // Renderiza el mensaje de éxito o cualquier otro contenido
//         <Text>¡Calificación enviada con éxito!</Text>
//       ) : (
//         // Renderiza los campos de calificación y comentario
//         <>
//           <View style={styles.starsContainer}>
//             {renderStars(rating)}
//           </View>
//           <Text style={styles.commentLabel}>Deja un comentario:</Text>
//           <TextInput
//             style={styles.commentInput}
//             multiline
//             numberOfLines={4}
//             onChangeText={(text) => setComment(text)}
//             value={comment}
//           />
//           <TouchableOpacity style={styles.clearButton} onPress={() => handleRating(0)}>
//             <Text>Limpiar calificación</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24, // Tamaño del título (ajusta según tu preferencia)
//     marginBottom: 20,
//   },
//   starsContainer: {
//     flexDirection: 'row',
//   },
//   commentLabel: {
//     marginTop: 20,
//     fontSize: 16,
//   },
//   commentInput: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     width: '80%',
//     marginTop: 10,
//     padding: 10,
//   },
//   clearButton: {
//     marginTop: 24,
//   },
// });

// export default DriverRatingScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RatingScreenNavigationProp = StackNavigationProp<any>;

interface DriverRatingScreenProps {
  navigation: RatingScreenNavigationProp;
}

const DriverRatingScreen: React.FC<DriverRatingScreenProps> = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isRatingSent, setIsRatingSent] = useState(false);

  const handleRating = (newRating: number) => {
    if (!isRatingSent) {
      setRating(newRating);
    }
  };

  const handleSendRating = async () => {
    try {
      console.log('Enviando calificación con driverId:', 1); // Agrega este console.log
      const response = await fetch('http://192.168.0.157:3000/driver-ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          driverId: 2, // Agrega este valor manualmente para verificar
          userId: 2,
          rating: rating,
          comment: comment,
        }),
      });

      if (response.ok) {
        setIsRatingSent(true);
      } else {
        console.error('Error al enviar la calificación:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar la calificación:', error);
    }
  };

  const starSize = 40; // Reducimos el tamaño de las estrellas

  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRating(i)}
          disabled={isRatingSent}
        >
          <Image
            source={
              i <= numStars
                ? require('../../../../../../assets/estrella.jpg')
                : require('../../../../../../assets/estrellavaciajpg.jpg')
            }
            style={{ width: starSize, height: starSize, marginRight: 10 }} // Espacio entre estrellas
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {isRatingSent ? (
        <Text style={styles.sentMessage}>Gracias por calificar al conductor.</Text>
      ) : (
        <>
          <Text style={styles.title}>Califica al conductor</Text>
          <View style={styles.starsContainer}>
            {renderStars(rating)}
          </View>
          <Text style={styles.commentLabel}>Deja un comentario:</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            numberOfLines={4}
            onChangeText={(text) => setComment(text)}
            value={comment}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendRating}
            disabled={isRatingSent}
          >
            <Text style={styles.sendButtonText}>Enviar calificación</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Agregamos espacio alrededor del contenido
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold', // Texto en negrita
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20, // Espacio debajo de las estrellas
  },
  commentLabel: {
    fontSize: 16,
    marginBottom: 10, // Espacio debajo de la etiqueta de comentario
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%', // Ancho completo
    padding: 10,
    marginBottom: 20, // Espacio debajo del campo de comentario
    borderRadius: 5, // Bordes redondeados
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18, // Tamaño del texto del botón
  },
  sentMessage: {
    marginTop: 20,
    color: 'green',
    fontSize: 18, // Tamaño del texto del mensaje de confirmación
  },
});

export default DriverRatingScreen;
