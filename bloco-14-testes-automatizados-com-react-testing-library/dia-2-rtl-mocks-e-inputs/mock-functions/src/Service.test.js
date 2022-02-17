const service = require('./Service');

describe('testa a funcao randomNumberInt', () => {
  it('teste se a função foi chamada e quantas vezes foi chamada', () => {
    service.randomNumberInt = jest.fn();
    service.randomNumberInt();
    service.randomNumberInt();
    expect(service.randomNumberInt).toHaveBeenCalled();
    expect(service.randomNumberInt).toHaveBeenCalledTimes(2);
  })

  it('testa se a função retorna 10 como padrão', () => {
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