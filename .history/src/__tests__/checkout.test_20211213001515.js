import Checkout from '../__tests__/checkout.test'
import products from '../data/data';


test('init', () => {
    const purchase = new Checkout(products);
    expect(purchase.price).toMatchObject(products);
    expect(purchase.discounts).toMatchObject({});
});

test('scan and total', () => {
    const co = new Checkout(products);
    co.scan('fake code');
    expect(co.items.length).toBe(0);

    const { code } = products[0]; // get 'TSHIRT' code
    // add t-shirt item
    co.scan(code);
    expect(co.items.length).toBe(1);
    const currentItem = co.items.find((item) => item.code === code);
    expect(currentItem.count).toBe(1);
    expect(co.total()).toBe(currentItem.price);

    // add the same t-shirt item
    co.scan(code).scan(code);
    expect(co.items.length).toBe(1);
    expect(currentItem.count).toBe(3);
    expect(co.total()).toBe(currentItem.price * 3);

    // add item with count argument
    co.scan(code, 6);
    expect(co.items.length).toBe(1);
    expect(currentItem.count).toBe(6);
    co.scan(code, -1);
    expect(co.items.length).toBe(1);
    expect(currentItem.count).toBe(5);

    // need to implement cost method test
});
