export class BreweryService {
  static findBrewery(state) {
    return fetch(`http://beermapping.com/webservice/locstate/9fc31f691baa30b0ee58bcc49747b840/${state}&s=json`)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
  static addressCoords(street, city, state, zip) {
    return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=OR0fxFNZAFPABnEFJT0HECNIiDCGgu9l&street=${street}&city=${city}&state=${state}&postalCode=${zip}`)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}

  //   try {
  //     const response = await fetch(`http://beermapping.com/webservice/locstate/${process.env.API_KEY}/${state}&s=json`);
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     return response.json();
  //   } catch(error) {
  //       return error.message;
  //   }
  //}
  //static breweryCoord(ID) {
  //   try {
  //     const response = await fetch(`http://beermapping.com/webservice/locmap/${process.env.API_KEY}/${ID}&s=json`);
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     return response.json();
  //   } catch(error) {
  //       return error.message;
  //   }
  // }
//}


