import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';

export const updateProfile = (firtname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(firtname);
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy
        .request({
            method: 'PUT',
            url: `http://localhost:8000/profile/${profileId}`,
            headers: {
                authorization: 'authorization',
            },
            body: {
                id: '4',
                first: 'test',
                lastname: 'user',
                age: 23,
                currency: 'RUB',
                country: 'Belarus',
                city: 'Moscow',
                username: 'testuser',
                avatar: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                firstname: 'testuser',
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );

            return body;
        });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firtname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
