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
        const { data } = await axios.get(`http://viacep.com.br/ws/${cep}/json`);
        console.log(data);
        console.log(cep);
        return data;
      } catch (error) {
        console.log(error);
      }
    });
    return Promise.all(promise);
  }
}
