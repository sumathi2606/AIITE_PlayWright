import { test } from '@playwright/test';

test.beforeAll(() => {
    console.log('before all');
  });

  test.beforeEach(() => {
    console.log('before each');
  } )

  test('test1', () => {
    console.log('test1');
  })

    test('test3', () => {
    console.log('test3');
  })    

  test('test4', () => {
    console.log('test4');
  })

  test('test5', () => {
    console.log('test5');
  })

  test('test6', () => {
    console.log('test6');
  })

    test.afterEach(() => {
    console.log('after each');
    });

    test.afterAll(() => {   
    console.log('after all');
    });