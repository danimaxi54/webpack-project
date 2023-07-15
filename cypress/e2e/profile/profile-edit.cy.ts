let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'testuser');
    });

    it('И редактирует его', () => {
        const newName = 'firstname';
        const newLastName = 'lastname';

        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastName);
    });
});
