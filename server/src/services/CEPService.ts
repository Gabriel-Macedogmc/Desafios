import axios from 'axios';

export default class CEPService {
  public async retunJSON(
    cep: string,
    cep2: string,
    cep3: string,
    cep4: string,
    cep5: string,
  ) {
    const CEPS = [cep, cep2, cep3, cep4, cep5];
    const promise = CEPS.map(async cep => {
      try {
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json`);
        console.log(response.data);
        console.log(cep);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    });
    return Promise.all(promise);
  }
}
