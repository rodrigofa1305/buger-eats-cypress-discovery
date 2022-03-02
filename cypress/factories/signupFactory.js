var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '91981434330',
                address: {
                    postalcode: 66822120,
                    street: 'Rua J',
                    number: '3',
                    details: 'CJ Castro Moura',
                    district: 'Águas Negras (Icoaraci)',
                    city_state: 'Belém/PA'
            },
                deliver_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }
        return data
    }
}