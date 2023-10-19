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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DriverRatingScreen = () => {
  const [rating, setRating] = useState(0);

  const handleRating = async (newRating: number) => {
    try {
      setRating(newRating);

      const response = await fetch('http://192.168.56.1:3000/api/driver-ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          driverId: 1,
          userId: 2,
          rating: newRating,
          comment: 'Comentario de ejemplo',
        }),
      });

      // Añade estas líneas para registrar información adicional
      console.log('Response Status:', response.status);
      const responseData = await response.json();
      console.log('Response Data:', responseData);

      if (!response.ok) {
        throw new Error('Error al enviar la calificación');
      }

      // La solicitud se realizó con éxito
    } catch (error) {
      console.error('Error al enviar la calificación:', error);
      // Maneja el error, muestra un mensaje al usuario, etc.
    }
  };

  const starSize = 70; // Tamaño de las estrellas (ajusta según tu preferencia)

  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Image
            source={i <= numStars ? require('../../../../../../assets/estrella.png') : require('../../../../../../assets/estrellavaciajpg.jpg')}
            style={{ width: starSize, height: starSize }}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Califica al conductor</Text>
      <View style={styles.starsContainer}>
        {renderStars(rating)}
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={() => handleRating(0)}>
        <Text>Limpiar calificación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24, // Tamaño del título (ajusta según tu preferencia)
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  clearButton: {
    marginTop: 24,
  },
});

export default DriverRatingScreen;
