import React from 'react';
// import { randomNumberInt } from './Service';

function randomNumberInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('testa a funcao randomNumberInt', () => {
  it('teste se a função foi chamada e quantas vezes foi chamada', () => {
    randomNumberInt = jest.fn();
    randomNumberInt();
    randomNumberInt();
    expect(randomNumberInt).toHaveBeenCalled();
    expect(randomNumberInt).toHaveBeenCalledTimes(2);
  })

  it('testa se a função retorna 10 como padrão', () => {
    randomNumberInt = jest.fn().mockReturnValue(10);
    expect(randomNumberInt()).toBe(10);
  })
})
