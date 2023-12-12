const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const carCollection = ["toyota", "fiat", "honda", "bmw"];

  function updateCarCollection(carBrand) {
    if (!carCollection.includes(carBrand)) {
      carCollection.push(carBrand);
      return `New car collection is: ${carCollection.join(", ")}, ${carBrand}.`;
    } else {
      const position = carCollection.indexOf(carBrand) + 1;
      return `${carBrand} already exists in position ${position} of the car collection.`;
    }
  }

  console.log(updateCarCollection("audi"));
  console.log(updateCarCollection("toyota"));
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
