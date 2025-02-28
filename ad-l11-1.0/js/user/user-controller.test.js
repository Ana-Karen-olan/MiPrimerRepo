const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

// Prueba para agregar un usuario
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

// Prueba para eliminar un usuario
test('remove user from userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

// Prueba para encontrar un usuario por su correo electrónico (email)
test('find user by email', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findByEmail("santiago@generation.org");
    expect(foundUser).toEqual(user); // Esperamos que el usuario encontrado sea el mismo
});

// Prueba para encontrar un usuario por su ID
test('find user by id', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findById(1234);
    expect(foundUser).toEqual(user); // Esperamos que el usuario encontrado sea el mismo
});

// Prueba para añadir un usuario que no está en la lista (se espera que no lo agregue)
test('add user that is not in the list', () => {
    let user = new User(5678, "Carlos", "carlos@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

// Prueba para intentar eliminar un usuario que no está en la lista
test('remove user that is not in the list', () => {
    let user = new User(5678, "Carlos", "carlos@generation.org");
    userController.remove(user); // Intentamos eliminar un usuario que no está en la lista
    expect(userController.getUsers()).not.toContain(user); // No debería haber ningún cambio, ya que no estaba en la lista
});

// Prueba para buscar un usuario por email que no existe
test('find user by email that does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findByEmail("nonexistent@generation.org");
    expect(foundUser).toBeUndefined(); // No debe encontrar ningún usuario
});

// Prueba para buscar un usuario por id que no existe
test('find user by id that does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let foundUser = userController.findById(9999); // ID inexistente
    expect(foundUser).toBeUndefined(); // No debe encontrar ningún usuario
});

// Prueba para eliminar un usuario que no existe
test('remove user that does not exist', () => {
    let user = new User(9999, "Nonexistent", "nonexistent@generation.org");
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user); // No debe alterar la lista
});
