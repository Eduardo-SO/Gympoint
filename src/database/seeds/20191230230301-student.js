module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'students',
            [
                {
                    name: 'Eduardo Souza',
                    email: 'eduardo.sool07@gmail.com',
                    age: 19,
                    weight: 80.2,
                    height: 1.75,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
