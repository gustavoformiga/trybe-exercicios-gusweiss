const service = require('./Service');

describe('Testa a funcao randomNumberInt', () => {
  it('Teste se a função foi chamada e quantas vezes foi chamada', () => {
    service.randomNumberInt = jest.fn();
    service.randomNumberInt();
    service.randomNumberInt();
    expect(service.randomNumberInt).toHaveBeenCalled();
    expect(service.randomNumberInt).toHaveBeenCalledTimes(2);
  })

  it('Testa se a função retorna 10 como padrão', () => {
    service.randomNumberInt = jest.fn().mockReturnValue(10);
    expect(service.randomNumberInt()).toBe(10);
  })
})

// exercise 2
describe('Testando mock implementation em randomNumberInt', () => {
  it('Testar se randomNumberInt mockada foi chamada e se a mockimplementation foi aplicada', () => {
    service.randomNumberInt.mockImplementation((a,b) => a/b);
    expect(service.randomNumberInt(12, 2)).toBe(6);
    expect(service.randomNumberInt).toHaveBeenCalled();
    expect(service.randomNumberInt).toBeCalledTimes(1);
    expect(service.randomNumberInt).toHaveBeenCalledWith(12,2);
  })
})

// exercise 3
describe('Testando mock implementation em randomNumberInt com três parâmetros', () => {
  it('Retornar a multiplicação de 3 parâmetros da mock implementation de randomnumberInt', () => {
    service.randomNumberInt.mockImplementationOnce((a,b,c) => a*b*c);
    expect(service.randomNumberInt(2,3,5)).toBe(30);
    expect(service.randomNumberInt).toHaveBeenCalled();
    expect(service.randomNumberInt).toBeCalledTimes(1);
    expect(service.randomNumberInt).toHaveBeenCalledWith(2,3,5);
    // reset da mock
    service.randomNumberInt.mockReset();
    service.randomNumberInt.mockImplementationOnce((a) => a*2);
    expect(service.randomNumberInt(5)).toBe(10);
    expect(service.randomNumberInt).toHaveBeenCalled();
    expect(service.randomNumberInt).toBeCalledTimes(1);
    expect(service.randomNumberInt).toHaveBeenCalledWith(5);
  })
})

// exercise4
jest.mock('./Service');
describe('Testando mockimplementation em funcoes', () => {
  it('A função upperCase agora deve retornar a string em caixa baixa', () => {
    service.upperCase.mockImplementationOnce((phrase) => phrase.toLowerCase());
    expect(service.upperCase('GUStavo')).toBe('gustavo');
    expect(service.upperCase).toHaveBeenCalled();
    expect(service.upperCase).toBeCalledTimes(1);
  })

  it('A função firstLetter agora deve retornar a última letra de uma string', () => {
    service.firstLetter.mockImplementationOnce((phrase) => phrase.charAt(phrase.length -1))
    expect(service.firstLetter('GUStavo')).toBe('o');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toBeCalledTimes(1);
  })

  it('A função boundingStrings agora deve concatenar 3 strings passadas como parâmetros', () => {
    service.boundingStrings.mockImplementationOnce((phrase1, phrase2, phrase3) => (`${phrase1} ${phrase2} ${phrase3}`));
    expect(service.boundingStrings('gustavo', 'é um cara', 'amável')).toBe('gustavo é um cara amável');
    expect(service.boundingStrings).toHaveBeenCalled();
    expect(service.boundingStrings).toBeCalledTimes(1);
  })

  it('Restaure a implementação da primeira função e garanta que foi restaurada.', () => {
    service.upperCase.mockRestore();
    // service.upperCase('gustavo');
    expect(service.upperCase('gustavo')).toBe('GUSTAVO')
  })
})

// exercise 5
describe('Simule uma requisição para dogApi', () => {
  service.gettingFetchedDog = jest.fn();
  afterEach(service.gettingFetchedDog.mockReset);
  it('verifique se resolveu e teve como valor "request sucess".', async () => {
    service.gettingFetchedDog.mockResolvedValue("request sucess")
    service.gettingFetchedDog();
    expect(service.gettingFetchedDog).toHaveBeenCalled();
    expect(service.gettingFetchedDog).toHaveBeenCalledTimes(1);
    await expect(service.gettingFetchedDog()).resolves.toBe("request sucess")
  })
})